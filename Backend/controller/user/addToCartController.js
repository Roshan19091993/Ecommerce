

const addToCartModel = require("../../Models/CartProduct");

const addToCartController = async (req, res) => {
    try {
        const { productId } = req.body; // Destructure productId from req.body
        const currentUser = req.userId;

        // Check if product is already in the cart
        const isProductAvailable = await addToCartModel.findOne({ productId, userId: currentUser });

        console.log("isProductAvailable", isProductAvailable);

        if (isProductAvailable) {
            return res.json({
                message: "Product is already in the cart",
                success: false,
                error: true,
            });
        }

        const payload = {
            productId: productId, // Ensure this is a string
            quantity: 1,
            userId: currentUser
        };

        const newAddToCart = new addToCartModel(payload);
        const saveProduct = await newAddToCart.save();

        return res.json({
            data: saveProduct,
            message: "Product added to cart successfully",
            success: true,
            error: false,
        });

    } catch (err) {
        return res.json({
            message: err?.message || err,
            error: true,
            success: false,
        });
    }
};

module.exports = addToCartController;
