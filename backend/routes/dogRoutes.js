const express = require('express')

// use the router portion of express
const router = express.Router()

const { getDogs, setDog, updateDog, deleteDog } = require('../controllers/dogController');
// We could create functions here to handle the functionality but it is a better design to have a controller layer to have those functions


router.route('/').get(getDogs).post(setDog);
router.route('/:id').put(updateDog).delete(deleteDog);


module.exports=router

