import os
from flask import Flask, request, jsonify,render_template
import pickle
import json

# def get_disease

app = Flask(__name__,template_folder='templates')
print("hello")

with open('rnd_forest.pkl', 'rb') as model_file:
    loaded_model = pickle.load(model_file)

with open('symptom_weights.json', 'r') as f:
    symptom_weights = json.load(f)

# List of symptoms
symptoms = list(symptom_weights.keys())

# Initialize the array
selected_symptoms = [0] * 17

@app.route('/')
def index():
    return 'hi'

@app.route('/symptoms', methods=['GET'])
def get_symptoms():
    return jsonify({'symptoms': symptoms})

@app.route('/update', methods=['POST'])
def update():
    global selected_symptoms
    selected_symptoms = [0] * 17
    selected_indices = [symptom_weights[symptom] for symptom in request.form.getlist('symptoms')]
    for weight in selected_indices:
        selected_symptoms[weight - 1] = weight
    return 'Array updated successfully'

@app.route('/get_selection', methods=['GET'])
def get_selection():
    return jsonify(selected_symptoms)

@app.route('/hi')
def find():
    result = loaded_model.predict([[3, 5, 3, 5, 4, 4, 3, 1,0, 0, 0, 0, 0, 0, 0, 0, 0]])
    return result[0]

app.run(host='0.0.0.0', port=5000, debug=True)