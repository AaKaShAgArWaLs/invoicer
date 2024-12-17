from flask_mail import Mail, Message
import random
import string
from flask import Flask

# Create a Flask instance (we need this to initialize Flask-Mail)
app = Flask(__name__)

# Configuring the Mail server (Gmail in this case)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'  # Your Gmail email address
app.config['MAIL_PASSWORD'] = 'your_password'  # Your Gmail app password or regular password
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
posta = Mail(app)

def reset(email):
    """Function to generate the reset link and send the email."""
    try:
        # Generate a random hashCode for the reset link
        hashCode = ''.join(random.choices(string.ascii_letters + string.digits, k=24))
        reset_link = f"http://localhost:5000/api/reset/{hashCode}"

        # Create and send the email
        msg = Message('Password Reset Request', sender='your_email@gmail.com', recipients=[email])
        msg.body = f"Hello,\nWe've received a request to reset your password. If you want to reset your password, click the link below:\n{reset_link}"
        posta.send(msg)
        
        return {"message": "Password reset link has been sent to your email."}
    
    except Exception as e:
        # If an error occurs, return a dictionary with the error message
        return {"error": str(e)}
