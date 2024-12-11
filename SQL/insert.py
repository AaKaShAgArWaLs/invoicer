import mysql.connector as z
import random
import string

def service(name,sac,sales,rate,userid):
    m=z.connect(host="localhost",user="root",passwd="12345",database=userid)
    ex=m.cursor()
    s=('SELECT * FROM service WHERE Name=%s ')
    v=[name]
    ex.execute(s,v)
    d=ex.fetchall()
    print(d)
    if len(d)<=0:
        a=new(name,sac,sales,rate,userid)
        return a
    elif len(d)>0:
        a=update(name,sac,sales,rate,userid)
        return a
    else:
        return False

def new(name,sac,sales,rate,userid):
    m=z.connect(host="localhost",user="root",passwd="12345",database=userid)
    ex=m.cursor()
    s=("insert into service values(%s,%s,%s,%s)")
    if '%' in rate:
        gst= int(rate.replace('%', ''))
    else:
        gst=rate
    print(name,sac,int(sales),int(gst))
    v=[name,sac,int(sales),int(gst)]
    ex.execute(s,v)
    m.commit()
    return "New"   

def update(name,sac,sales,rate,userid):
    m=z.connect(host="localhost",user="root",passwd="12345",database=userid)
    ex=m.cursor()
    s=("update service set SAC_Code=%s,Price=%s,GST=%s where Name=%s")
    gst= int(rate.replace('%', ''))
    print(name,sac,int(sales),int(gst))
    v=[sac,int(sales),int(gst),name]
    ex.execute(s,v)
    m.commit()
    return "Update"