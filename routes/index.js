const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

//home route
router.get('/', homeController.home);
//for creation of habit
router.post('/create', homeController.create);
//for changing the status of habit
router.post('/status', homeController.status);
//for deleting of habit
router.post('/delete', homeController.delete);
//for showing information of specific habit
router.get('/habit', homeController.habit);

module.exports = router;