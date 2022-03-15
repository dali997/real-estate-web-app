const mongoose = require('mongoose');

const {Schema, model}=mongoose;

const userSchema= new Schema({
    name: {type:String, required:true},
    description: {type: String, required: true},
    price: {type:String},
    phone:{type:String},
    productImg:{type:String,required:"true"}
  
})

module.exports = Product = model('product', userSchema)