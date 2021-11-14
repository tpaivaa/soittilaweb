const express = require('express')
const router = express.Router()
const awayhome = require('../services/awayhome')

/* GET quotes listing. */
router.get('/', (req, res, next) => {
  try {
    res.json(awayhome.getMultiple(req.query.page || 1))
  } catch(err) {
    console.error(`Error while getting awayHome Date and Times `, err.message)
    next(err)
  }
})

/* POST awayhome Date and Times */
router.post('/', (req, res, next) => {
  try {
    res.json(awayhome.create(req.body));
  } catch(err) {
    console.error(`Error while adding awayhome Date and Times `, err.message);
    next(err);
  }
});

module.exports = router;