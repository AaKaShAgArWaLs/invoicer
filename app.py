from flask import Flask, request, jsonify
from flask_cors import CORS
from SQL import login as lo
from SQL import sign
from SQL.mail import reset
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

@app.route('/api/*', methods=['OPTIONS'])
def handle_options():
    return '', 200  # Handle preflight request

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
