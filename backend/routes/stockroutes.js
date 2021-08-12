const express = require('express');


const router = express.Router();


const stockController = require('../controllers/stockcontroller');


router.post("/registerStock",stockController.registerStock);

router.get("/listStock/:name?",stockController.listStock);

module.exports = router;