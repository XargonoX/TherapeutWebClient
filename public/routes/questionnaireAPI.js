var express = require('express');
var router = express.Router();
var questionnaire = require('../controllers/questionnaireAPIController');

// POST /questionnaire
router.post('/', questionnaire.post);

//GET questionnaire gibt liste aller Patienten zurück
router.get('/', questionnaire.get);

//GET /questionnaire/figdfg3454375sdfh234dsasd
router.get('/:questionnaireId', questionnaire.show);

// PUT /questionnaire/ashdhqwhei23h4ihhashdhashdh324 ->body: Datenobjekt
router.put('/:questionnaireId', questionnaire.put);

//GET /questionnaire/figdfg3454375sdfh234dsasd
router.delete('/:questionnaireId', questionnaire.delete);

module.exports = router;

