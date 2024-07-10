from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.after_request
def add_headers(resp):
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    #resp.headers["Content-Security-Policy"] = (
    #    "script-src 'self'; style-src 'self'; default-src 'none'"
    #)
    resp.headers["Cache-Control"] = "max-age=0"
    return resp


if __name__ == "__main__":
    app.run(debug=True)
