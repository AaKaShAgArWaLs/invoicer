from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector as z
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    print(f"Login attempt for email: {email}")  # Debug log

    Res, Unique = Get_data(email, password)
    
    if Res:  # Login successful
        print("Login successful for user_id:",Unique)  # Debug log
        return jsonify({'message': 'Login Successful!', 'user_id': Unique}), 200
    
    print("Login failed - invalid credentials")  # Debug log
    return jsonify({'message': 'Invalid email or password'}), 401



def Get_data(email,password):
    m=z.connect(host="localhost",user="root",passwd="12345",database="app")
    ex=m.cursor()
    s=('select * from signin_data where Emaid_ID=%s')
    v=[email]
    ex.execute(s,v)
    d=ex.fetchall()
    emailfet=d[0][1]
    passwordfet=d[0][2]
    if email==emailfet and password==passwordfet:
        unique=d[0][0]
        return True,unique
    return False,None
