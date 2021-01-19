import time
import json
import os
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

filename = os.path.join(app.static_folder, 'data.json')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/heatmap')
def get_data_points():
    data_points = {}
    with open(filename) as data_file:
        data_points = json.load(data_file)
    return data_points

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
