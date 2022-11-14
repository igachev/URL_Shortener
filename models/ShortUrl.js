const mongoose = require('mongoose')
const shortId = require('shortid')

const UrlSchema = new mongoose.Schema({

    fullUrl : {
        type : String,
        required : true
    },

    short : {
        type : String,
        required : true,
        default : shortId.generate
    },

    countClicks : {
        type : Number,
        default : 0
    },

    lastDateClicked : {
        type : Date,
        default : Date.now
    }

})

//UrlSchema.plugin(AutoIncrement, {id:'id_seq',inc_field: 'id'});



module.exports = mongoose.model('ShortUrl',UrlSchema)