from flask import Flask, request
from flask_cors import CORS
from SQL import login as lo
from SQL import sign

app = Flask(__name__)

# Apply CORS to all routes under /api/*
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/login", methods=['POST'])
def login():
    a=lo.login()
    print (a)
    return a

@app.route("/api/signup", methods=['POST'])
def ent_det():
    a=sign.new()
    print(a)
    return a

@app.route('/api/*', methods=['OPTIONS'])
def handle_options():
    return '', 200  # Handle preflight request

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
