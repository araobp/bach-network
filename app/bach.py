# Bach Network
# Date: 2024/04/21

from flask import Flask, render_template
import sqlite3
import webbrowser
import json

PORT = 5000
DB_PATH = '../data/bach.db'

app = Flask(__name__)

@app.route('/')
def hello_world():
  return render_template('index.html')

@app.route('/names')
def get_names():
  with sqlite3.connect(DB_PATH) as conn:
    cur = conn.cursor()
    r = cur.execute('SELECT name from names').fetchall()
    r = [e[0] for e in r]
  return json.dumps(r)

if __name__ == '__main__':
  url = f'http://127.0.0.1:{PORT}'
  webbrowser.open(url, new=0, autoraise=True)
  app.run()

