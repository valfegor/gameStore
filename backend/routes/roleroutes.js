//libreria express con su router.


const express = require('express');

const router = express.Router();

const roleController = require('../controllers/rolecontroller');


router.post("/registerRole",roleController.registerRole);

router.get("/listRole",roleController.listRole);


module.exports = router;