
const productModel = require("../../Models/productModel");

const getProductController = async(req,res)=>{

    try{
        const allProduct= await productModel.find().sort({ createdAt : -1});

        res.json({
            message: 'All Products',
            success: true,
            error: false,
            data: allProduct,
        })

    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        })

    }
}
module.exports = getProductController;