const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salecontroller');

router.post("/registerSale",salesController.registerSale);
router.get("/listsale",salesController.listSale);

module.exports = router;