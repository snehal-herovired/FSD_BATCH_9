const jwt = require('jsonwebtoken');

async function jwtVerify(req, res, next) {

    // some sort of logic which checks our token coming from client
    // if token is valid , we pass the control to next controller or middleware
    //if token is invalide , we send a res to client
    //  Bearer token
    let token;

    try {
        if (!req.headers.authorization) {
            //   console.log(req.headers.authorization,"token coming from here");
       
           return res.status(403).json({
            message:'no token in authorization'
           })

        }
        let bearerToken = req.headers.authorization;
        //    Bearer token
        //['Bearer","token"]
        token = bearerToken.split(' ')[1];

        const decoded = await jwt.verify(token, process.env.JWT_SECRETKEY);
        console.log(decoded)
        if (!decoded) {
            return res.status(400).json({
                message: "token is not valid"
            })
        }

        next();

    
    } catch (error) {
        console.log(error, "error from jwt middleware");
        return res.status(400).json({
            message: `something went wrong ${error.message}`
        })
    }

}

module.exports = jwtVerify