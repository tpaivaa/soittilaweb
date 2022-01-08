
const express = require('express')
const router = express.Router()
const db = require('../models')
const getTemp = require('../services/owfs').getTemp
const getTemps = require('../services/owfs').getTemps

router.get('/awayHomes', (req, res) => {
  return db.awayHome.findAll()
    .then((awayHomes) => res.send(awayHomes))
    .catch((err) => {
      console.log('***There was an error querying awayHomes', JSON.stringify(err))
      return res.send(err)
    });
});

router.post('/awayHomes', (req, res) => {
  const { startDate, startTime, stopDate, stopTime } = req.body
  return db.awayHome.create({ startDate, startTime, stopDate, stopTime })
    .then((awayHome) => res.send(awayHome))
    .catch((err) => {
      console.log('***There was an error creating a awayHome', JSON.stringify(awayHome))
      return res.status(400).send(err)
    })
});

router.put('/awayHomes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.awayHome.findByPk(id)
  .then((awayHome) => {
    const { startDate, startTime, stopDate, stopTime } = req.body
    return awayHome.update({ startDate, startTime, stopDate, stopTime })
      .then(() => res.send(awayHome))
      .catch((err) => {
        console.log('***Error updating awayHome', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});

router.delete('/awayHomes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.awayHome.findByPk(id)
    .then((awayHome) => awayHome.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting awayHome', JSON.stringify(err))
      res.status(400).send(err)
    })
})

router.get('/owfs/:id', (req, res) => {
  const id = req.params.id
  return getTemp(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(`***Error getting sensor ${id} temperature`, JSON.stringify(err))
      res.status(400).send(err)
    })
})

router.post('/owfs/getTemps', (req, res) => {
  sensors = req.body

  getTemps(sensors)
  .then((result) => res.send(result))
    .catch((err) => {
      console.log(`***Error getting sensors ${Object.keys(req.body)} temperatures`, JSON.stringify(err))
      res.status(400).send(err)
    })

})

module.exports = router