from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/learnaboutme")
def aboutme():
    return render_template("learnaboutme.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/myprojects")
def myprojects():
    return render_template("myprojects.html")

@app.route("/week3")
def week3():
    return render_template("week3.html")



if __name__ == "__main__":
    app.run(debug=True)