import mysql.connector as z
import random
import string
import SQL.uniquee as uniquee

def new_entry(email, passw):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = 'SELECT * FROM signin_data WHERE Emaid_ID=%s'
    v = [email]
    ex.execute(s, v)
    d = ex.fetchall()

    if len(d) <= 0:
        Unique = id()
        s = "INSERT INTO signin_data(Emaid_id, Password, Unique_ID) VALUES (%s, %s, %s)"
        v = [email, passw, Unique]
        ex.execute(s, v)
        m.commit()
        uniq=uniquee.create_database(Unique)
        if uniq==True:
            return [True, Unique] 
        return ['Error', None]
    else:
        return ['Error', None]


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

def fetch_unique(email):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = 'select * from signin_data where Emaid_ID=%s;'
    ex.execute(s, (email,))  
    result = ex.fetchall()    
    m.close()    
    res=result[0][0]            
    return res


