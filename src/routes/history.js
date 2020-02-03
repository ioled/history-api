const express = require('express');
const router = express.Router();

// Import all controllers for history
const {getDayGraph, getWeekGraph, getMonthGraph} = require('../controllers/history');

router.route('/day/:device').get(getDayGraph);
router.route('/week/:device').get(getWeekGraph);
router.route('/month/:device').get(getMonthGraph);

module.exports = router;
