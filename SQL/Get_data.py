import mysql.connector as z
def get_Mobile(Unique):
    m=z.connect(host="localhost",user="root",passwd="12345",database="app")
    ex=m.cursor()
    s=('SELECT Mobile FROM signin_data WHERE Unique_ID=%s ')
    v=[Unique]
    ex.execute(s,v)
    d=ex.fetchall()
    return(d[0][0])

def login(email,password):
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
