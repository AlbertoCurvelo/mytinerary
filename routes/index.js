const express=require('express')
const router =express.Router()
const citiesController=require('../controllers/citiesController')
//Se definen las rutas de consulta
router.route('/cities')
.get(citiesController.allCities)

router.route('/cities/:id')
.get(citiesController.singleCity)

module.exports = router