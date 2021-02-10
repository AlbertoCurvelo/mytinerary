const express=require('express')
const router=express.Router()
const citiesController=require('../controllers/citiesController')
const itinerariesController=require('../controllers/itinerariesController')
const userController=require('../controllers/userController')
const passport = require('passport')
require('../config/passport')
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

router.route('/user')
.post(userController.register)

router.route('/user/:id')
.get(userController.singleUser)

router.route('/users')
.get(userController.allUsers)

router.route('/user/signin')
.post(userController.signIn)

router.route('/user/register')
.post(userController.register)

router.route('/user/localStorage')
.post(passport.authenticate('jwt',{session:false}), userController.logingForLS)

router.route('/admin/cities/:id')
.post(citiesController.postCity)
.put(citiesController.putCity)
.delete(citiesController.deleteCity)

module.exports = router