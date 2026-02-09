
from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/puzzle1', methods=['GET', 'POST'])
def puzzle1():
    if request.method == 'POST':
        if request.form['answer'].lower() == 'coffee':
            return redirect(url_for('puzzle2'))
    return render_template('puzzle1.html')

@app.route('/puzzle2', methods=['GET', 'POST'])
def puzzle2():
    if request.method == 'POST':
        if request.form['answer'].lower() == 'willyou':
            return redirect(url_for('puzzle3'))
    return render_template('puzzle2.html')

@app.route('/puzzle3', methods=['GET', 'POST'])
def puzzle3():
    if request.method == 'POST':
        if request.form['answer'].lower() == 'feb14':
            return redirect(url_for('final'))
    return render_template('puzzle3.html')

@app.route('/final')
def final():
    return render_template('final.html')

@app.route('/gift')
def gift():
    return render_template('gift.html')

if __name__ == '__main__':
    app.run(debug=True)
