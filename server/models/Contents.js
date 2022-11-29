const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ContentsSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Communutytitle: {
        type: String,
        maxlength: 50
    },
    Communutydesc: {
        type: String,
        maxlength: 50
    },
    
    images: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    },
    id: {
        type: String,
        maxlength: 50
    },
})


const Contents =mongoose.model('Contents',ContentsSchema)

module.exports ={Contents}