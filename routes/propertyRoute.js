const propertyController = require('../controllers/propertyController.js')

const router = require('express').Router();

router.post('/addProperty', propertyController.upload , propertyController.addProperty)

router.get('/allProperty', propertyController.getALlProperty)



router.get('/:id', propertyController.getOneProperty)

module.exports = router

