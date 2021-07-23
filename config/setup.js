require('dotenv').config();
const RandomKey = require('../model/randomkey');
const getRandomString = require('../controller/randomString');

for(var i = 0; i< 2000; i++){
    var randomstring = getRandomString();
    var key = new RandomKey({urlkey: randomstring});
    key.save();
}

