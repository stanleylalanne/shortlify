var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
  res.json(req.params.userid);
});
router.get('/',function(req,res){
  res.send('anything');
})
module.exports = router;
