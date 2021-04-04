const express = require('express');
const router = express.Router();
const sitesController = require('../app/Controllers/Sites.controller');

router.use('/trang-chu', sitesController.trang_chu);
router.use('/search', sitesController.search);
router.use('/cup-dien', sitesController.cup_dien);
router.use('/', sitesController.home);

module.exports = router;
