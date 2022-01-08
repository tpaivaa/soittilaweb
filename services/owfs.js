const config = require('../config')
const Client = require('owfs').Client
const HOST = config.owfs.HOST 
const PORT = config.owfs.PORT
const con = new Client(HOST, PORT)

const getTemp = (sensor) => {
  input = `/${sensor}/temperature`
  return new Promise((resolve, reject) => {
    con.read(input, (error,result) => {
      if(error){ reject(error)}
      resolve({ sensor: sensor, temp: result})
    })
  })
}

const getPresence = (sensor) => {
  return new Promise((resolve, reject) => {
    con.presence(`/${sensor}`,  (error,result) => {
      if(error){ reject(error)}
      resolve({ sensor: sensor, temp: result})
    })
  })
}
const  getTemps = async (sensors) => {
    const results = {}
    let data = await Promise.all(Object.keys(sensors).map(async sensor => {return await getTemp(sensor)}))
    for (let value of data) { results[value.sensor] = {temp: value.temp} }
    return results
}

module.exports = {
  getTemp,
  getTemps,
  getPresence
}