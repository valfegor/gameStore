const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salecontroller');

router.post("/registerSale",salesController.registerSale);


module.exports = router;