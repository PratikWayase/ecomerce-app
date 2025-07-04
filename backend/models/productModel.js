

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    Category: { type: String, required: true },
    SubCategory: { type: String, required: true },
    Sizes: { type: Array, required: true },
    bestSeller: { type: Boolean },
    date : {type:Number,required : true}
        
    
})

const ProductModel = mongoose.models.product || mongoose.model("product", ProductSchema)

export default ProductModel
