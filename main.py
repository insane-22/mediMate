import os
from flask import Flask, request, jsonify,render_template
import pickle

# def get_disease

app = Flask(__name__,template_folder='templates')
print("hello")

with open('rnd_forest.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

@app.route('/')
def index():
    return 'hi'

@app.route('/hi')
def find():
    result = loaded_model.predict([[3, 5, 3, 5, 4, 4, 3, 1,0, 0, 0, 0, 0, 0, 0, 0, 0]])
    return result[0]

app.run(host='0.0.0.0', port=5000, debug=True)