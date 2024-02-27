from flask import Flask, request, jsonify
import json
import subprocess
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/process_data": {"origins": "*"}})

@app.route('/process_data', methods=['POST'])
def process_data():
    data = json.loads(request.data)
    # Call your Python script with subprocess and pass data
    result = subprocess.run(['python', 'processData.py'], input=json.dumps(data), text=True, capture_output=True)
    # Process the output as needed
    output = result.stdout.strip()  # Assuming processData.py outputs the desired result
    return jsonify({'result': output})

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app