const { Await } = require("react-router-dom");
const userModel = require("../../Models/userModel");

const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        console.log("req.body",req.body);

        const existingUser = await userModel.findOne({ email });
        console.log("existingUser",existingUser);
        if (existingUser) {
            throw new Error("User already exists!");
        }

        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }
        if (!name) {
            throw new Error("Please provide a name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);
    

        if (!hashPassword) {
            throw new Error("Something is wrong with the password");
        }
        

        const payload = {
            ...req.body,
            role:"GENERAL",
             password : hashPassword,
        }

        const userData = new userModel(payload);

        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully !"
        });
    } catch (err) {
       
        res.json({
            message:  err.message || err ,
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController;
