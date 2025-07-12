
import { v2 as cloudinary } from "cloudinary"
import productModel from '../models/productModel.js'
import ProductModel from "../models/productModel.js"

// 4 controller functions


// functionfro add prodcts

const addProduct = async (req, res) => {
    
    try {

        const { name, description, price, category, subCategory, sizes,  bestSeller } = req.body
        
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0] 
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)
        
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path)
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            Category: category, 
            SubCategory: subCategory,    
            bestSeller: bestSeller == "true" ? true : false,
            Sizes: JSON.parse(sizes), 
            image: imagesUrl,
            date : Date.now()

        }
        
        console.log(productData)

        const product = new productModel(productData)
        await product.save()

        res.json({success:true,message:"product added"})

    } catch (error) {
        
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


// functionfro list prodcts

const listProduct = async (req, res) => {
    
    try {

        const product = await productModel.find({})
        res.json({ success: true, product })
        

    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}



// functionfro remove prodcts

const removeProduct = async (req, res) => {

    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message:"prodct removed" })

    } catch (error) {

         console.log(error)
        res.json({success:false,message:error.message})
        
    }
    
}



// functionfro single  prodcts

const singleProduct = async (req, res) => {

    try {

        const { productId } = req.body
        const prodct = await ProductModel.findById(productId)
        res.json ({success:true,prodct})

    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }
    
}


export {listProduct,addProduct,removeProduct,singleProduct}