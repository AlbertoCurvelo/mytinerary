const express=require('express')
const router=express.Router()
const citiesController=require('../controllers/citiesController')
const itinerariesController=require('../controllers/itinerariesController')
//Se definen las rutas de consulta
router.route('/cities')
.get(citiesController.allCities)

router.route('/cities/:id')
.get(citiesController.singleCity)

router.route('/itineraries')
.get(itinerariesController.allItineraries)
.post(itinerariesController.postItinerary)

router.route('/itineraries/:id')
.delete(itinerariesController.delSingleItinerary)

router.route('/itineraries/city/:id')
.get(itinerariesController.itinerariesForCity)

router.route('/admin/cities/:id')
.post(citiesController.postCity)
.put(citiesController.putCity)
.delete(citiesController.deleteCity)

module.exports = router