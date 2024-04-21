# Bach Network
# Date: 2024/04/21

from flask import Flask, render_template
import sqlite3
import webbrowser
import json
import sys

PORT = 5000
#DB_PATH = '../data/bach.db'
DB_PATH = sys.argv[1]
print(DB_PATH)

app = Flask(__name__)

@app.route('/')
def hello_world():
  return render_template('index.html')

def get_array(table_name):
  r = None
  with sqlite3.connect(DB_PATH) as conn:
    cur = conn.cursor()
    r = cur.execute(f'SELECT name from {table_name}').fetchall()
    r = [e[0] for e in r]
  return json.dumps(r)

@app.route('/names')
def get_names():
  return get_array('names')

@app.route('/cities')
def get_cities():
  return get_array('cities')

@app.route('/orgs')
def get_orgs():
  return get_array('orgs')

if __name__ == '__main__':
  url = f'http://127.0.0.1:{PORT}'
  webbrowser.open(url, new=0, autoraise=True)
  app.run(debug=True)

