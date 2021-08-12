const express = require('express');

const router = express.Router();

const productContoller = require('../controllers/productcontroller');


router.post("/registerProduct",productContoller.registerProduct);

router.get("/listProduct",productContoller.listProduct);


module.exports = router