from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return send_from_directory("../javascript-nivel-simple", "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory("../javascript-nivel-simple", filename)
