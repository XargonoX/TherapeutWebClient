var express = require('express');
var router = express.Router();
var answeredQuestionnaire = require('../controllers/answeredQuestionnaireAPIController');

// POST /questionnaire
router.post('/', answeredQuestionnaire.post);

//GET questionnaire gibt liste aller Patienten zurück
router.get('/', answeredQuestionnaire.get);

//GET /questionnaire/figdfg3454375sdfh234dsasd
router.get('/:answeredQuestionnaireId', answeredQuestionnaire.show);

// PUT /questionnaire/ashdhqwhei23h4ihhashdhashdh324 ->body: Datenobjekt
router.put('/:answeredQuestionnaireId', answeredQuestionnaire.put);

//GET /questionnaire/figdfg3454375sdfh234dsasd
router.delete('/:answeredQuestionnaireId', answeredQuestionnaire.delete);

module.exports = router;

