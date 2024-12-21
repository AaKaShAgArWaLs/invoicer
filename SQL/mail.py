import smtplib
import logging
import mysql.connector as z
from flask import jsonify

def login(email):
    try:
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        with m.cursor() as ex:
            s = 'SELECT * FROM signin_data WHERE Emaid_ID=%s'
            ex.execute(s, (email,))
            d = ex.fetchall()
            
            if not d:  # If no records found
                return False, None

            emailfet = d[0][1]
            if email == emailfet:
                unique = d[0][0]
                return True, unique
        m.close()
    except Exception as e:
        logging.error(f"Database error: {e}")
        return False, None

def reset(email):
    try:
        hashCode = login(email)
        if hashCode[0] == True:
            reset_link = f"http://localhost:5000/api/reset/{hashCode[1]}"

            # Set up the SMTP session
            s = smtplib.SMTP('smtp.gmail.com', 587)
            s.starttls()
            s.login("aakashrkl1609@gmail.com", "aqwsdzbvtxhcwjfr")

            # Create the message headers and body
            subject = "Password Reset Request"
            message = f"""\
From: aakashrkl1609@gmail.com
To: {email}
Subject: {subject}

Hello,

We've received a request to reset your password. If you want to reset your password, click the link below:

{reset_link}
"""

            s.sendmail("aakashrkl1609@gmail.com", email, message)
            s.quit()

            return jsonify({'message': 'Password reset link has been sent to your email.'}), 200
        else:
            return jsonify({'error': 'Email not found in our records.'}), 404

    except smtplib.SMTPException as e:
        logging.error(f"Error occurred while sending email: {e}")
        return jsonify({'error': 'Failed to send email'}), 401
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        return jsonify({'error': 'An unexpected error occurred.'}), 500


