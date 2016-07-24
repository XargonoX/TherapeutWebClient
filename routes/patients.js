var express = require('express');
var router = express.Router();
var patients = require('../controllers/patientController');

// POST /patient
router.post('/', patients.post);

//GET patient gibt liste aller Patienten zurück
router.get('/', patients.get);

//GET /patient/figdfg3454375sdfh234dsasd
router.get('/:patientId', patients.show);

// PUT /patient/ashdhqwhei23h4ihhashdhashdh324 ->body: Datenobjekt
router.put('/:patientId', patients.put);

//GET /patient/figdfg3454375sdfh234dsasd
router.delete('/:patientId', patients.delete);

module.exports = router;

