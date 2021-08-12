const express = require('express');

const router = express.Router();

const userController = require('../controllers/usercontroller');

router.post("/registerUser",userController.registerUser);

router.get("/listUser/:name?",userController.listUser);


module.exports = router;