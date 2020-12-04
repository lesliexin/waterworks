import time
import json
import os
from flask import Flask

app = Flask(__name__)

@app.route('/heatmap')
def get_data_points():
    filename = os.path.join(app.static_folder, 'data.json')
    data_points = {}
    with open(filename) as data_file:
        data_points = json.load(data_file)
    return data_points