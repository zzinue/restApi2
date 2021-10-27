const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const schema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true,
        maxlength:20,
        minlength: 1,
    }, 
    price: {
        type: Number, 
        required: true,
    },
    description: {
        type: String, 
        required: true, 
    },
});

module.exports= {
    model: mongoose.model("categories", schema),
    schema,
}