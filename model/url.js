const mongoose = require('mongoose');
const { Schema } = mongoose;
const shortlify = mongoose.createConnection(process.env.SHORTLIFYDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const urlschema = new Schema({
    originalURL: String,
    hash: {type: String, unique: true},
    userId: String,
    creationDate: Date,
    expirationDate: Date
});

module.exports = shortlify.model('Url', urlschema);