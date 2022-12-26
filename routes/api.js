
const express = require('express')
const { sequelize } = require('../models')
const { QueryTypes } = require('sequelize')
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
    })
})

router.post('/awayHomes', (req, res) => {
  const { startDate, startTime, stopDate, stopTime } = req.body
  return db.awayHome.create({ startDate, startTime, stopDate, stopTime })
    .then((awayHome) => res.send(awayHome))
    .catch((err) => {
      console.log('***There was an error creating a awayHome', JSON.stringify(awayHome))
      return res.status(400).send(err)
    })
})

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
})

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

//Palauttaa templimitin ulko lämpötilanmukaan
router.get('/templimits', async (req, res) => {
  try {
    if ((typeof req.query.temp === "string") && (typeof req.query.sensor === "string")) {
      const temp = parseInt(req.query.temp) // must have query param ?temp=x example http://10.10.10.5:3000/api/templimits?temp=10
      const sensor = req.query.sensor // must have query param sensor=y example http://10.10.10.5:3000/api/templimits?temp=10&sensor=y
      const query = "SELECT `id`, " + `${sensor}` + ", `createdAt`, `updatedAt` FROM `templimits` WHERE `templimits`.`ulko` = " + `${temp}`
      const templimits = await sequelize.query(query, { type: QueryTypes.SELECT })
      res.send(templimits)
    }
    if (typeof req.query.temp === "string") {
      const temp = parseInt(req.query.temp) // must hav equery param ?temp=x example http://10.10.10.5:3000/api/templimits?temp=10
      const templimits = await db.templimits.findOne({ where: { ulko: temp } })
      res.send(templimits)
    } else {
      const alltemplimits = await db.templimits.findAll()
      res.send(alltemplimits)
    }
  }
  catch (err){
    console.log('***Error getting templimits', JSON.stringify(err))
      res.status(400).send(err)
  }
})

// Palauttaa yhden templimit konfiguraation
router.get('/templimits/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const templimit = await db.templimits.findByPk(id)
    res.send(templimit)
  }
  catch (err){
    console.log(`***Error getting templimit for id: ${id}`, JSON.stringify(err))
      res.status(400).send(err)
  }
})

router.post('/templimits', (req, res) => {
  const { ulko,khhLattiaLowLimit,khhLattiaHighLimit,olohuoneLowLimit,olohuoneHighLimit,ykMHLowLimit,ykMHHighLimit,khhLowLimit,khhHighLimit,makuuhuoneLowLimit,makuuhuoneHighLimit,keittioLowLimit,keittioHighLimit,keittioLattiaLowLimit,keittioLattiaHighLimit,verantaLattiaLimit,veranta,ykmh2 } = req.body
  return db.templimits.create( { ulko,khhLattiaLowLimit,khhLattiaHighLimit,olohuoneLowLimit,olohuoneHighLimit,ykMHLowLimit,ykMHHighLimit,khhLowLimit,khhHighLimit,makuuhuoneLowLimit,makuuhuoneHighLimit,keittioLowLimit,keittioHighLimit,keittioLattiaLowLimit,keittioLattiaHighLimit,verantaLattiaLimit,veranta })
    .then((templimits) => res.send(templimits))
    .catch((err) => {
      console.log('***There was an error creating a templimit', JSON.stringify(err))
      return res.status(400).send(err)
    })
})

router.put('/templimits/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.templimits.findByPk(id)
  .then((templimits) => {
    const { ulko,khhLattiaLowLimit,khhLattiaHighLimit,olohuoneLowLimit,olohuoneHighLimit,ykMHLowLimit,ykMHHighLimit,khhLowLimit,khhHighLimit,makuuhuoneLowLimit,makuuhuoneHighLimit,keittioLowLimit,keittioHighLimit,keittioLattiaLowLimit,keittioLattiaHighLimit,verantaLattiaLimit,veranta,ykmh2 } = req.body
    return templimits.update({ ulko,khhLattiaLowLimit,khhLattiaHighLimit,olohuoneLowLimit,olohuoneHighLimit,ykMHLowLimit,ykMHHighLimit,khhLowLimit,khhHighLimit,makuuhuoneLowLimit,makuuhuoneHighLimit,keittioLowLimit,keittioHighLimit,keittioLattiaLowLimit,keittioLattiaHighLimit,verantaLattiaLimit,veranta })
      .then(() => res.send(templimits))
      .catch((err) => {
        console.log('***Error updating templimits', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
})

// Current temperatures API
router.get('/currentTemps', async (req, res) => {
  console.log(req.query.room)
  console.log(typeof req.query.room)
  try {
    if (typeof req.query.room === "string") { // Returns single current temperature
      const room = req.query.room // must hav equery param ?room=x example http://10.10.10.5/api/currentTemps?room=khh
      const currentTemps = await db.currentTemps.findOne({ where: { room: room } })
      res.send(currentTemps)
    }
    else {
      console.log('Should get all currentTemps')
      const allCurrentTemps = await db.currentTemps.findAll()
      res.send(allCurrentTemps)
    }
  }
  catch (err){
      console.log('***Error getting currentTemps', JSON.stringify(err))
        res.status(400).send(err)
    }
})

// Palauttaa yhden currentTempsin
router.get('/currentTemps/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const currentTemp = await db.currentTemps.findByPk(id)
    res.send(currentTemp)
  }
  catch (err){
    console.log(`***Error getting currentTemps for id: ${id}`, JSON.stringify(err))
      res.status(400).send(err)
  }
})

router.post('/currentTemps', (req, res) => {
  const { room, temp } = req.body
  return db.currentTemps.create({ room, temp })
    .then((currentTemps) => res.send(currentTemps))
    .catch((err) => {
      console.log('***There was an error creating a currentTemps', JSON.stringify(awayHome))
      return res.status(400).send(err)
    })
})

router.put('/currentTemps/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.currentTemps.findByPk(id)
  .then((currentTemps) => {
    const { room, temp } = req.body
    return currentTemps.update({ room, temp })
      .then(() => res.send(currentTemps))
      .catch((err) => {
        console.log('***Error updating currentTemps', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
})

// Change / Update single room temperature
router.put('/currentTemps', async (req, res) => {
  try {
    const { room, temp } = req.body
    const currentRoom =  await db.currentTemps.findOne({ where: { room: room } })
    console.log(currentRoom)
    const updated = currentRoom.update({ room, temp })
    res.json({"updated": req.body})
  } catch (err){
    console.log(`***Error changing CurrentTemp ${room}`, JSON.stringify(err))
    res.status(400).send(err)
  }
})




router.delete('/currentTemps/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.currentTemps.findByPk(id)
    .then((currentTemps) => currentTemps.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting currentTemps', JSON.stringify(err))
      res.status(400).send(err)
    })
})


module.exports = router
