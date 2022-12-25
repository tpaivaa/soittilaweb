const db = require('../services/db')

const getSensorTemplimit = (sensor, temp) => {
  const data = db.query(`select ? FROM templimits where ulko like  ?`, [sensor, temp])
  return data
}


module.exports = {
  getSensorTemplimit
}
