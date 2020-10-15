var fs = require("fs");
var file = "AVB53.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

db.serialize(function () {
  if (!exists) {
      db.run(
          `CREATE TABLE TempSensors
          (
              sensorID INT UNSIGNED PRIMARY KEY,
              name VARCHAR(20) NOT NULL,
              date TEXT NOT NULL,
              time TEXT NOT NULL,
              temp REAL NOT NULL
          );`
      );
  }
});
console.log("Database gemaakt");
db.close();
