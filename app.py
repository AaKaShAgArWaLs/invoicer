from flask import Flask, request, jsonify
from flask_cors import CORS
from SQL import login as lo
from SQL import sign
from SQL.mail import reset
from SQL import otp
app = Flask(__name__)

# Apply CORS to all routes under /api/*
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/login", methods=['POST'])
def login():
    a=lo.login()
    print (a)
    return a

@app.route("/api/signup", methods=['POST'])
def ent_det():
    a=sign.new()
    print(a)
    return a

@app.route("/api/data", methods=['POST'])
def ent_data():
    a=sign.data()
    print(a)
    return a

@app.route("/api/forgot", methods=['POST'])
def password_reset():
    # Extract the email from the request
    email = request.json.get('email')  # Get email from the body of the POST request
    print(email)
    
    if not email:
        return jsonify({"message": "Email is required"}), 400  # Return error if no email is provided

    # Call the function from mail_functions.py to send the email
    response = reset(email)
    print(response)
    # If the function returns an error, pass it back to the client
    if 'error' in response:
        return response

    return response

@app.route("/api/otp", methods=['POST'])
def otp_verify():
    # Get the data from the request
    data = request.get_json()
    email = data.get('email_id')
    otpp = data.get('otp')

    # Check if both email and OTP are provided
    if not email or not otpp:
        return jsonify({"message": "Email and OTP are required" }), 400  # Return error if no email or OTP is provided

    # Call the verify function to check OTP validity
    response = otp.verify(otpp, email)
    print(response)
    # Handle different types of response from verify function
    if "OTP is valid and verified" in response:
        Unique=otp.Get_unique(email)
        return jsonify({"message": "OTP verified successfully." , 'user_id': Unique}), 200
    elif "Error: OTP has expired" in response:
        return jsonify({"error": "OTP has expired. Please request a new one."}), 400
    elif "Error: Invalid OTP" in response:
        return jsonify({"error": "Invalid OTP."}), 400
    else:
        return jsonify({"error": response}), 500  # If an unexpected error occurs


@app.route('/api/*', methods=['OPTIONS'])
def handle_options():
    return '', 200  # Handle preflight request

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
