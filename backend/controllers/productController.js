
// 4 controller functions


// functionfro add prodcts

const addProduct = async (req, res) => {
    
    try {

        const { name, description, price, category, subCategory, sizes,  bestSeller } = req.body
        
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        console.log(name, description, price, category, subCategory, sizes,  bestSeller)
        console.log(image1, image2, image3, image4)
        res.json({})

    } catch (error) {
        
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


// functionfro list prodcts

const listProduct = async (req, res) => {
    
}



// functionfro remove prodcts

const removeProduct = async (req, res) => {
    
}



// functionfro single  prodcts

const singleProduct = async (req, res) => {
    
}


export {listProduct,addProduct,removeProduct,singleProduct}