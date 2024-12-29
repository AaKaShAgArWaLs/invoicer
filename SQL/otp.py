import mysql.connector as z
from datetime import datetime

def verify(otp, email):
    try:
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        with m.cursor() as ex:
            s = 'SELECT otp, expires_at FROM otp_records WHERE email=%s'
            v = [email]
            ex.execute(s, v)
            d = ex.fetchall()
            
            if not d:
                return "Error: No OTP record found for this email."

            otp_f, expires_at = d[0]
            
            if otp_f == otp:
                if isinstance(expires_at, datetime):
                    expiration_time = expires_at
                else:
                    expiration_time = datetime.strptime(expires_at, '%Y-%m-%d %H:%M:%S')
                
                if expiration_time > datetime.now():
                    return "OTP is valid and verified."
                else:
                    return "Error: OTP has expired. Please request a new one."
            else:
                return "Error: Invalid OTP."

    except Exception as e:
        return f"Error: {e}"
    finally:
        if m.is_connected():
            m.close()


def Get_unique(email):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = ('SELECT * FROM signin_data WHERE Emaid_id=%s')
    v = [email]
    ex.execute(s, v)
    d = ex.fetchall()
    unique = d[0][0]
    return unique


def change_pass(Unique, password):
    try:
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        ex = m.cursor()
        s = 'SELECT * FROM signin_data WHERE Unique_ID=%s'
        v = [Unique]
        ex.execute(s, v)
        d = ex.fetchall()

        if len(d) > 0:
            email = d[0][1]
            update_query = 'UPDATE signin_data SET Password=%s WHERE Unique_ID=%s'
            update_values = [password, Unique]
            ex.execute(update_query, update_values)
            m.commit()
            
            stat = del_otp(email)  # Call to delete OTP
            if stat:
                return True  # Success: Password updated and OTP deleted
            else:
                return False  # Failure: OTP not deleted
        else:
            return False  # Failure: Unique_ID not found
    except Exception as e:
        print(f"Error updating password: {e}")
        return False
    finally:
        if m.is_connected():
            ex.close()
            m.close()

def del_otp(email):
    try:
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        ex = m.cursor()
        s = 'SELECT * FROM otp_records WHERE email=%s'
        v = [email]
        ex.execute(s, v)
        d = ex.fetchall()

        if len(d) > 0:
            delete_query = 'DELETE FROM otp_records WHERE email=%s'
            ex.execute(delete_query, v)
            m.commit()
            return True  # OTP deleted successfully
        else:
            return False  # No OTP found for the email

    except Exception as e:
        print(f"Error deleting OTP: {e}")
        return False
    finally:
        if m.is_connected():
            ex.close()
            m.close()