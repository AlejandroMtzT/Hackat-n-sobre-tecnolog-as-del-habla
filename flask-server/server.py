from flask import Flask
from intermediario import *

app = Flask(__name__)

@app.route("/members")
def members():
    return {'contenido': obtener_transcript_spanish('prueba.mp3')}

if __name__ == '__main__':
    app.run(port=8080)
