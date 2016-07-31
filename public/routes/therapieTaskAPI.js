var express = require('express');
var router = express.Router();
var therapieTasks = require('../controllers/therapieTaskAPIController');

// POST /therapieTask
router.post('/', therapieTasks.post);

//GET therapieTask gibt liste aller Patienten zurück
router.get('/', therapieTasks.get);

//GET /therapieTask/figdfg3454375sdfh234dsasd
router.get('/:therapieTaskId', therapieTasks.show);

// PUT /therapieTask/ashdhqwhei23h4ihhashdhashdh324 ->body: Datenobjekt
router.put('/:therapieTaskId', therapieTasks.put);

//GET /therapieTask/figdfg3454375sdfh234dsasd
router.delete('/:therapieTaskId', therapieTasks.delete);

module.exports = router;

