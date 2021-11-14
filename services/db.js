const sqlite = require('better-sqlite3')
const path = require('path')
const db = new sqlite(path.resolve('local.db'), {fileMustExist: true})

const query = (sql, params) => {
  return db.prepare(sql).all(params)
}

const run = (sql, params) => {
  return db.prepare(sql).run(params);
}

module.exports = {
  query,
  run
}