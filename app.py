from flask import Flask
from flask_cors import CORS
from SQL import login as lo
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})




@app.route("/api/login", methods=['POST'])
def login():
    lo.login()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)