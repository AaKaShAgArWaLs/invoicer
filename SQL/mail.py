import smtplib
import logging
import mysql.connector as z
from flask import jsonify
import random
import string
from datetime import datetime, timedelta

# Function to generate a random OTP (6 digits)
def generate_otp(length=6):
    otp = ''.join(random.choices(string.digits, k=length))
    return otp

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

            # Generate an OTP for the user
            otp = generate_otp()

            # Store the OTP in the database
            if not store(otp, email):
                return jsonify({'error': 'Failed to store OTP in the database.'}), 500

            # Set up the SMTP session
            s = smtplib.SMTP('smtp.gmail.com', 587)
            s.starttls()
            s.login("aakashrkl1609@gmail.com", "aqwsdzbvtxhcwjfr")

            # Create the message headers and body with the OTP included
            subject = "Password Reset Request"
            html_message = f"""
            <html>
                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
                    <div style="max-width: 600px; margin: auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                        <h2 style="color: #333; text-align: center;">Hello,</h2>
                        <p style="color: #555; text-align: center; margin-top: 20px;">You can use the OTP below to verify your identity and reset your password:</p>
                        <h3 style="color: #007BFF; font-size: 36px; text-align: center;">{otp}</h3>
                        <p style="color: #555; text-align: center; margin-top: 20px;">If you did not request a password reset, please ignore this email.</p>
                        <p style="font-size: 12px; color: #777; text-align: center;">If you have any questions, feel free to contact us.</p>
                    </div>
                </body>
            </html>
            """

            # Set headers for the email
            message = f"From: aakashrkl1609@gmail.com\nTo: {email}\nSubject: {subject}\nContent-Type: text/html; charset=UTF-8\n\n{html_message}"

            # Send the email
            s.sendmail("aakashrkl1609@gmail.com", email, message)
            s.quit()

            return jsonify({'message': 'Password reset link and OTP have been sent to your email.'}), 200
        else:
            return jsonify({'error': 'Email not found in our records.'}), 404

    except smtplib.SMTPException as e:
        logging.error(f"Error occurred while sending email: {e}")
        return jsonify({'error': 'Failed to send email'}), 401
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        return jsonify({'error': 'An unexpected error occurred.'}), 500


def store(otp, email):
    try:
        # Establish database connection
        m = z.connect(host="localhost", user="root", passwd="12345", database="app")
        with m.cursor() as ex:
            # Add an expiration time for the OTP (e.g., 10 minutes)
            expires_at = (datetime.now() + timedelta(minutes=10)).strftime('%Y-%m-%d %H:%M:%S')
            s = "INSERT INTO otp_records (email, otp, created_at, expires_at) VALUES (%s, %s, NOW(), %s)"
            v = (email, otp, expires_at)
            ex.execute(s, v)
            m.commit()
            return True
    except Exception as e:
        logging.error(f"Error storing OTP: {e}")
        return False
    finally:
        m.close()
