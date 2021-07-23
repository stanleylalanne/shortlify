const mongoose = require('mongoose');
mongoose.connect(process.env.SHORTLIFYDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

module.exports = mongoose;