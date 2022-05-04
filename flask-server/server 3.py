from flask import Flask

app = Flask(__name__)

@app.route("/members")
def members():
    return {"members": ["UNO", "DOS", "TRES"]}

if __name__ == '__main__':
    app.run(port=8080)