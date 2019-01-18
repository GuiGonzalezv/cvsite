var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  res.render('home');
});

router.all('/download', function(req, res, next) {
  var path = 'public/curriculo/GuilhermeGonzalezCurriculo.docx'
  res.download(path);
});

module.exports = router;
