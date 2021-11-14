const Database = require('better-sqlite3')
const db = new Database('local.db', { verbose: console.log })

const insert = (input) => {
  db.prepare(`INSERT INTO ${input.table} (startDate, startTime, stopDate, stopTime) VALUES (${input.startDate}, ${input.startTime}, ${input.stopDate}, ${input.stopTime})`)
} 
const select = (input) => {
  db.prepare(`SELECT (startDate, startTime, stopDate, stopTime) FROM ${input.table}`)
}



module.exports = {insert, select }