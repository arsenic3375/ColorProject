from flask import Flask
from flask import request

app = Flask(__name__)

colorFilePath = 'color.txt'

def setColor(color):
    with open(colorFilePath, 'w') as file:
        file.write(color)

def getColor():
    with open(colorFilePath, 'r') as file:
        return file.read()

@app.route('/about')
def about():
    return {
        'version': 'Color API v0.4'
    }

@app.route('/color', methods=['GET', 'POST'])
def color():
    if request.method == 'GET':
        return {
            'color': getColor()
        }
    if request.method == 'POST':
        print(request.get_json())
        data = request.get_json()
        setColor(data['color'])
        return {
            'status': 'OK'
        }
