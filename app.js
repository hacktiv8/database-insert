let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('users.db')

db.run("CREATE TABLE if not exists user_info (info TEXT)")
let stmt = db.prepare("INSERT INTO user_info VALUES (?)")

for(let i =0; i < 10; i++) {
  stmt.run("User " + i)
}

stmt.finalize()

db.each("SELECT rowid AS id, info FROM user_info", (err, row) => {
  console.log(row.id + ": " + row.info)
})

db.close()
