from flask import Flask, jsonify, request
from flask_cors import CORS
from SQL import new_entry, Get_data, insert
import mysql.connector as z
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

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