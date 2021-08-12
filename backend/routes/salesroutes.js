const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salecontroller');

router.post("/registerSale",salesController.registerSale);
router.get("/listsale/:name_product?",salesController.listSale);

module.exports = router;