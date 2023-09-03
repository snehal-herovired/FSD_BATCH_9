const User = require('../models/user.model');

//validation
//schema 

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
            password
        })
        res.status(200).json({
            message: 'User registered',
            registeredUser
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
        if (isUser.length>0 && isUser[0].password) {
            // now match the users password with password coming from request body;
           
            if (isUser[0].password == password) {
                return res.status(200).json({
                    message: "Login Successful",
                    isUser
                })
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: `Something went wrong ${error.message}`

        })

    }
}
module.exports = {
    register,
    login
}