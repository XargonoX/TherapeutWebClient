var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/#patientList', function(req, res, next) {
    res.render('patientList', { title: 'patientList' });
});
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
