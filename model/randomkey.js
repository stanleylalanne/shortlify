const mongoose = require('mongoose');
const { Schema } = mongoose;
const randomkeyConn = mongoose.createConnection(process.env.RANDOMKEYSDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const randomkeyschema = new Schema({
    urlkey: {type: String, unique: true}
});

module.exports = randomkeyConn.model('Randomkeys', randomkeyschema);