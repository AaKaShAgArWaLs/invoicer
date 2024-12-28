import mysql.connector as z
from datetime import datetime

def verify(otp, email):
    try:
        # Connect to the database
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        
        with m.cursor() as ex:
            # Select the OTP and expiration time from the database based on the email
            s = 'SELECT otp, expires_at FROM otp_records WHERE email=%s'
            v = [email]
            ex.execute(s, v)
            d = ex.fetchall()
            
            if not d:
                # If no records are found for the email
                return "Error: No OTP record found for this email."

            otp_f, expires_at = d[0]
            
            # Check if the OTP matches
            if otp_f == otp:
                # If expires_at is already a datetime object, no need to convert
                if isinstance(expires_at, datetime):
                    expiration_time = expires_at
                else:
                    # Otherwise, convert it to a datetime object
                    expiration_time = datetime.strptime(expires_at, '%Y-%m-%d %H:%M:%S')
                
                # Compare the expiration time with the current time
                if expiration_time > datetime.now():
                    return "OTP is valid and verified."
                else:
                    # OTP has expired
                    return "Error: OTP has expired. Please request a new one."
            else:
                # OTP does not match
                return "Error: Invalid OTP."

    except Exception as e:
        # Log the error if any exception occurs
        return f"Error: {e}"
    finally:
        # Close the connection
        if m.is_connected():
            m.close()


def Get_unique(email):
    m = z.connect(host="localhost", user="root", passwd="12345", database="app")
    ex = m.cursor()
    s = ('SELECT * FROM signin_data WHERE Emaid_ID=%s')
    v = [email]
    ex.execute(s, v)
    d = ex.fetchall()
    unique = d[0][0]
    return unique
