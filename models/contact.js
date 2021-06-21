const mongoose = require('mongoose');

const contactschema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Number:{
        type: String,
        required: true
    }

});

const Contact = mongoose.model('Contact', contactschema);

module.exports = Contact;