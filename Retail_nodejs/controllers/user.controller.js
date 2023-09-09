const User = require('../models/user.model');
let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(6);
const jwt = require('jsonwebtoken');
//validation
//schema 
// encyption of password :bcryptjs
const register = async (req, res) => {
    let { username, email, password } = req.body;

    //   cannot set http request header after its sent to client;
    try {
        if (username == '' || email == "" || password == '') {
            return res.status(400).json({
                message: 'Please fill all the fields'
            })
        }

        // check if user with that email exists .
        const isUser = await User.find({ email });
        // find return array;
        // []
        if (isUser.length > 0) {
            //user exists
            return res.status(401).json({
                message: 'User already exists',
                isUser
            })
        }


        // if isUser not there, register it;
        const registeredUser = await User.create({
            username,
            email,
            password: await bcrypt.hash(password, salt)
        })
        const token = jwt.sign({ id: registeredUser._id }, process.env.JWT_SECRETKEY, {
            expiresIn: '24h'
        })
        res.status(200).json({
            message: 'User registered',
            registeredUser,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: `Something went wrong ${error.message}`

        })
    }



}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        //if any field empty;
        if (email == '' || password == '') {
            return res.status(400).json({
                message: `Please fill all the fields`

            })
        }

        //   check if user exists in the db;
        const isUser = await User.find({ email });
        if (isUser.length == 0) {
            return res.status(400).json({
                message: `User does not exists, please register yourself!`

            })
        }

        //if user is there
        if (isUser.length > 0 && isUser[0].password) {
            // now match the users password with password coming from request body;

            if (await bcrypt.compare(password, isUser[0].password)) {
                const token = jwt.sign({ id: isUser[0]._id }, process.env.JWT_SECRETKEY, {
                    expiresIn: '24h'
                })
                return res.status(200).json({
                    message: "Login Successful",
                    isUser,
                    token
                })
            }
            return res.status(400).json({
                message: "password does not match",
                login: 'unsuccessful'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: `Something went wrong ${error.message}`

        })

    }
}

const getallUser = async (req, res) => {
    try {
        const listofUsers = await User.find({});
        if (listofUsers.length > 0) {
            return res.status(200).json({
                message: 'list of Users',
                listofUsers
            })
        }
       return res.status(400).json({
            message: "user db is empty"
        })
    } catch (error) {
        return res.status(400).json({
            message: `something went wrong ${error.message}`
        })
    }

}
module.exports = {
    register,
    login,
    getallUser
}