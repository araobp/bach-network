const sqlite3 = require('sqlite3').verbose();
const BACH_DB_PATH = '../data/bach.db';

const names = (res) => {
    const db = new sqlite3.Database(BACH_DB_PATH);
    var sql = 'SELECT name FROM names';
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        result = [];
        rows.forEach( row => {
            result.push(row.name);
        });
        res.send(JSON.stringify(result));
      });
}

exports.names = names;
