import time
import json
import os
from flask import Flask

app = Flask(__name__)

filename = os.path.join(app.static_folder, 'data.json')

@app.route('/heatmap')
def get_data_points():
    data_points = {}
    with open(filename) as data_file:
        data_points = json.load(data_file)
    return data_points
