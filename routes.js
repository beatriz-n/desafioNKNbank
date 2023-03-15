const express = require ('express');
const router = express.Router();
const userController = require('./controllers/UserController.js')

router.get('/info',userController.index);
router.post('/info', userController.store);

module.exports = router;