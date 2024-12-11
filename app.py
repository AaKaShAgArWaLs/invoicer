from flask import Flask, jsonify, request
from flask_cors import CORS
from SQL import new_entry, Get_data, insert
import mysql.connector as z
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})




@app.route("/api/signup", methods=['POST'])
def ent_det():
    print("Signup endpoint reached")  # Debug log
    data = request.get_json()
    password=data.get('password')
    email = data.get('email')
    gst = data.get('gstNo')
    t_name=data.get('traderName')
    address=data.get('address')
    pan=data.get('pan')
    entity=data.get('entityType')
    a,Unique=new_entry.new_entry(email,password)
    b= new_entry.insert_data(Unique, gst, t_name, address, pan, entity) 
    if b== True:
        if a == 'Error':
            return jsonify({'message': 'Email Id Already Exists'}), 500  # Internal Server Error

        return jsonify({'message': 'Signup successful!', 'user_id': Unique, 't_name': t_name}), 201  # Created
    return jsonify({'message': 'Failed. Please Try Again'})



@app.route("/api/login", methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(f"Login attempt for email: {email}")  # Debug log

    Res, Unique = Get_data.login(email, password)
    
    if Res:  # Login successful
        print("Login successful")  # Debug log
        return jsonify({'message': 'Login Successful!', 'user_id': Unique}), 200
    
    print("Login failed - invalid credentials")  # Debug log
    return jsonify({'message': 'Invalid email or password'}), 401


@app.route("/api/services", methods=['GET'])
def get_services():
    try:
        # Retrieve user_id from query parameters
        user_id = request.args.get('user_id')
        if not user_id:
            return jsonify({"message": "User ID is required."}), 400
        
        # Connect to the database and fetch services based on the user_id
        m = z.connect(host="localhost", user="root", passwd="12345", database=user_id)
        ex = m.cursor()

        # Assuming the table has a 'GST_Rate' column
        ex.execute("SELECT Name, SAC_Code, Price, GST FROM service")
        services = ex.fetchall()
        
        # Prepare the response data
        service_list = [{
            "name": row[0],            # Service name
            "sac": row[1],             # SAC code
            "sales": row[2],           # Sales price
            "gst": str(row[3]) + '%'  # GST Rate with a '%' symbol
        } for row in services]
        print(service_list)
        # Return the services data in JSON format
        return jsonify({"services": service_list}), 200
    
    except Exception as e:
        # Log the error and send a failure response
        print(f"Error fetching services: {e}")
        return jsonify({"message": "Failed to fetch services."}), 500


@app.route("/api/service", methods=['POST'])
def service():
    data = request.get_json()
    name = data.get('service')
    sac = data.get('sac')
    sales = data.get('sales')
    rate = data.get('gst')
    userid = data.get('user_id')
    print(name,sac,sales,rate,userid)
    # Check if the required fields are provided
    if not name or not sac or not sales or not rate or not userid:
        return jsonify({'message': 'Missing required fields'}), 400

    try:
        # Insert service logic
        res = insert.service(name, sac, sales, rate, userid)
        if res == "New":
            return jsonify({'message': 'Service added successfully', 'user_id': userid}), 200
        elif res == "Update":
            return jsonify({'message': 'Service updated successfully', 'user_id': userid}), 200
        else:
            return jsonify({'message': 'Service already exists'}), 400

    except Exception as e:
        print(f"Error adding service: {e}")
        return jsonify({'message': 'An error occurred while adding the service'}), 500



@app.route("/api/service/delete/<user_id>/<service_name>", methods=['DELETE'])
def delete_service(user_id, service_name):
    try:
        # Validate if the user_id is present
        if not user_id:
            return jsonify({"message": "User ID is required for deletion."}), 400
        
        # Connect to the database
        m = z.connect(host="localhost", user="root", passwd="12345", database=user_id)
        ex = m.cursor()

        # Check if the service exists in the database using Name
        ex.execute("SELECT * FROM service WHERE Name = %s", (service_name,))
        service = ex.fetchone()
        if not service:
            return jsonify({"message": "Service not found."}), 404

        # Delete the service by Name
        ex.execute("DELETE FROM service WHERE Name = %s", (service_name,))
        m.commit()  # Commit the changes to the database

        # Return success response
        return jsonify({"message": "Service deleted successfully."}), 200
    
    except Exception as e:
        print(f"Error deleting service: {e}")
        return jsonify({"message": "An error occurred while deleting the service."}), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)