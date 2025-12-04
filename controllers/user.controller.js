const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
/**
 * Signup Logic  
 * 1) register -> add new user in db
 * 2) check for already email present in db
 * 3) yes -> already registered please login
 * 4) password bcrypt 
 *   
 */
exports.signup = async (req, res) => {
    try {
        // req.body parameters
        const { name, email, password } = req.body;
        const userRecord = await User.find({ email });
        //check if user already registered
        if (userRecord.length != 0) {
            return res.status(200).json({
                message: "User already registered, please login"
            })
        }
        //no password bcrypt and save new user

        const hashedPassword = await bcryptjs.hash(password, 10);
        await User.insertOne({
            name,
            email,
            password: hashedPassword
        });
        return res.status(200).json({
            message: "User registered successfully"
        })

    } catch (error) {
        console.log(error);
        return req.status(400).json({
            message: "something went wrong"
        })
    }
}
/** 
 * Signin Logic
 * 1)got the email, password from frontend
 * 2) check email present in db
 * 3) no -> user not present send error message
 * 4) yes -> compare password with bcryptjs
 * 5) password no match -> password is not match , means authentication failed send error message
 * 6) password match -> authentication successfull, generate auth(jwt) token and send to frontend
 */
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userRecord = await User.find({ email });
        //check if user already registered
        if (userRecord.length == 0) {
            return res.status(200).json({
                message: "User not registered, please signup"
            })
        }
        //password match
        const match = await bcryptjs.compare(password, userRecord.password);
        if (!match) {
            return res.status(200).json({
                message: "Password is not match"
            })
        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({
            message: "something went wrong"
        })
    }

}