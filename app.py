from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.after_request
def add_headers(resp):
    resp.headers["X-Content-Type-Options"] = "nosniff"
    resp.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    resp.headers[
        "Content-Security-Policy"
        ] = "img-src 'self' data:; script-src 'self'; worker-src blob: data:; connect-src 'self'; style-src 'self' 'sha256-h4EYiXepVsBYC61eGB76YyueNhn/mDXX8h8BgYtjIio=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-bpQUtIaiaK94Sx+1l4cRcrSwbwaN6ZuSJ6i6L54yaTg=' 'sha256-0OXF52ZShVnPWY52BUP1RouTqge3XlWWUXHhUh+kXg0=' 'sha256-w6SvMLXy/Ryx2QPxBlOsL/H23A4XjuLYLnMLlK0ty5s=' 'sha256-UKbTxvoj8BBaKkSLtjE1TDg8RTYzMqANwXf4uQsIeGo='; default-src 'none'"
    resp.headers["Cache-Control"] = "max-age=0"
    return resp


if __name__ == "__main__":
    app.run(debug=True)
