const productModel = require("../../Models/productModel");

const searchProduct = async(req,res)=>{
    try{
        const query = req.query.q;
        // console.log(query);

        const regex  = new RegExp(query,'i','g');

        const product = await productModel.find({
            "$or":[
            {
                productName: regex
            },
            {
                category : regex
            }
        ]
    })
        res.json({

            data: product,
            message:"Search Product List ",
            success: true,
            error: false,
        })

    }
    catch(err){
       res.json({
        error: err.message || err,
        error: true,
        success: false,
       })
    }
}
module.exports = searchProduct;