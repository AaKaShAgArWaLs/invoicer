from flask import Flask, jsonify, request
import mysql.connector as z
import SQL.uniquee as uniquee
import random
import string


def new():
    print("Signup endpoint reached")  # Debug log
    data = request.get_json()
    name=data.get('name')
    password=data.get('password')
    email = data.get('email')
    
    a,Unique=new_entry(email,password, name)
    if a== True:
        if a == 'Error':
            return jsonify({'message': 'Email Id Already Exists'}), 500  # Internal Server Error

        return jsonify({'message': 'Signup successful!', 'user_id': Unique, 't_name': t_name}), 201  # Created
    return jsonify({'message': 'Failed. Please Try Again'})


def new_entry(email, passw, name):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = 'SELECT * FROM signin_data WHERE Emaid_ID=%s'
    v = [email]
    ex.execute(s, v)
    d = ex.fetchall()

    if len(d) <= 0:
        Unique = id()
        s = "INSERT INTO signin_data(Emaid_id, Password, Unique_ID, name) VALUES (%s, %s, %s, %s)"
        v = [email, passw, Unique, name]
        ex.execute(s, v)
        m.commit()
        uniq=uniquee.create_database(Unique)
        if uniq==True:
            return [True, Unique] 
        return ['Error', None]
    else:
        return ['Error', None]
    


def insert_data(unique,gst, t_name, address, pan, entity):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    a=False
    s = "UPDATE signin_data SET GST = %s, T_Name = %s, Address = %s, PAN = %s, Entity = %s WHERE Unique_ID = %s"
    ex.execute(s, (gst, t_name, address, pan, entity, unique))
    m.commit()
    a=True
    ex.close()
    return a


def id():
    a=unique()
    m=z.connect(host="localhost",user="root",passwd="12345",database="app")
    ex=m.cursor()
    s=('SELECT * FROM signin_data WHERE Unique_ID=%s ')
    v=[a]
    ex.execute(s,v)
    d=ex.fetchall()
    if len(d)<=0:
        return a
    else:
        id()

def unique():
    characters = string.ascii_letters + string.digits  # A-Z, a-z, 0-9
    random_string = ''.join(random.choice(characters) for _ in range(10))
    return random_string

def data():
    
    data = request.get_json()
    Unique=data.get('user_id')
    gst = data.get('gstNo')
    t_name=data.get('traderName')
    address=data.get('address')
    pan=data.get('pan')
    entity=data.get('entityType')
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = 'SELECT * FROM signin_data WHERE Unique_ID=%s'
    v = [Unique]
    ex.execute(s, v)
    d = ex.fetchall()
    print(d)

    if d[0][3] == None:
        b= insert_data(Unique, gst, t_name, address, pan, entity) 
        if b== True:
            return jsonify({'message': 'Data Entered Successfully', 'user_id': Unique, 't_name': t_name}), 201  # Created
        return jsonify({'message': 'Failed. Please Try Again'})
    else:
        return ['Error', None]