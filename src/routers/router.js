const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.renderHomePage)
// router.get('/', controller.renderEmail)
// router.get('/index2', controller.renderHomeSecond)

module.exports = router;