const mongoose = require('mongoose');
mongoose.connect(process.env.RANDOMKEYSDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

module.exports = mongoose;