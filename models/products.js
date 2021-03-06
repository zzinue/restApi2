const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    name:{
        type: String,
        required:true,
        trim: true,
        maxlength:20,
        minlength: 1,

    },
    price: {
        type:Number,
        required:false
    },
    
}); 

module.exports= {
    model: mongoose.model("product", schema),
    schema,
}

