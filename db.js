const sqlite3 = require("sqlite3").verbose();

const dbFile = "db.sqlite";

// Se connecter a la base de donnés
let db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("connexion a la base sqlite3...");
    const sql = `CREATE TABLE contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre text,
            resumé text,
            contenu text,
            auteur text,
            datedecreation date,
            datededernieremiseajour date

        )`;
    db.run(sql, (err) => {
      if (err) {
        console.log("table déja créee");
      }
    });
  }
});

module.exports = db;
