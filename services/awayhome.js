const db = require('../services/db')
const config = require('../config')

const getMultiple = (page = 1) => {
  const offset = (page - 1) * config.listPerPage
  const data = db.query(`SELECT * FROM awayHome LIMIT ?,?`, [offset, config.listPerPage])
  const meta = {page}

  return {
    data,
    meta
  }
}

const validateCreate = (dateAndTime) => {
  let messages = [];

  if (!dateAndTime) {
    messages.push('No object is provided')
  }

  if (!dateAndTime.startDate) {
    messages.push('startDate is empty')
  }

  if (!dateAndTime.startTime) {
    messages.push('startTime is empty')
  }

  if (!dateAndTime.stopDate) {
    messages.push('stopDate is empty')
  }

  if (!dateAndTime.stopTime) {
    messages.push('stopTime is empty')
  }

  if (messages.length) {
    let error = new Error(messages.join())
    error.statusCode = 400

    throw error
  }
}

const create = (dateAndTimeObj) => {
  validateCreate(dateAndTimeObj)
  const {startDate, startTime, stopDate, stopTime} = dateAndTimeObj
  const result = db.run('INSERT INTO awayHome (startDate, startTime, stopDate, stopTime) VALUES (@startDate, @startTime, @stopDate, @stopTime)', {startDate, startTime, stopDate, stopTime})

  let message = 'Error in creating AwayHome start and end'
  if (result.changes) {
    message = 'AwayHome config created successfully'
  }

  return {message}
}


module.exports = {
  getMultiple,
  create
}