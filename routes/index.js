var express = require('express');
var router = express.Router();
const RandomKey = require('../model/randomkey');
const Url = require('../model/url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shortlify' });
});


router.get('/:key', function(req, res){
  const key = req.params.key;
  Url.findOne({ hash: key}).exec().then(doc =>{
    var re = "http://"+ doc.originalURL;
    res.redirect(301, re);
  }).catch(err=>{
    res.send(err);
  });
});

router.post('/', function(req,res){
  var inputurl = req.body.url;
  //validate if url is valid

  //get a random url key from randomkeysdb
  RandomKey.findOneAndDelete().then( (data)=>{
    const newUrl = new Url({
      hash: data.urlkey,
      originalURL: inputurl,
      userId: '',
      creationDate: Date()
    });
    newUrl.save();
    res.send(`localhost:3000/${data.urlkey}`);
  })

})
module.exports = router;
