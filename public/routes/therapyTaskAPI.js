var express = require('express');
var router = express.Router();
var therapyTasks = require('../controllers/therapyTaskAPIController');

// POST /therapyTask
router.post('/', therapyTasks.post);

//GET therapyTask gibt liste aller Patienten zurück
router.get('/', therapyTasks.get);

//GET /therapyTask/figdfg3454375sdfh234dsasd
router.get('/:therapyTaskId', therapyTasks.show);

// PUT /therapyTask/ashdhqwhei23h4ihhashdhashdh324 ->body: Datenobjekt
router.put('/:therapyTaskId', therapyTasks.put);

//GET /therapyTask/figdfg3454375sdfh234dsasd
router.delete('/:therapyTaskId', therapyTasks.delete);

module.exports = router;

