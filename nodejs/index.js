// express : framework which we are using with nodejs in order to create API.
// API : it can be url or something which handles request from the client and response from the server.
//npm init -y : used for setting up your project : it create package.json file
// npm install _library_name :for installing anything inside our node application
// npm : node package manager


// es6 : require,module.exports,destructing
const express = require('express');
const { product } = require('./product')
// console.log(product,"this is my product")



const app = express();
app.use(express.json()); // method to allow the req coming to server in jSON format/ json formatter

app.get('/data', (req, res) => {
    //   res.send(product)
    res.json({
        message: 'this is response from our server',
        product
    })
})

app.post('/addproduct', (req, res) => {
    //because client will sending some useful information in the request
    // take the data from client and update the database;
    // our id field is auto incremented,
    // example : client sending a data of name , and after that we will add this name to our database;
    // req.body;
    console.log(req.body, "this is coming from client request");
    let name = req.body.name;
    if (!name) {
        return res.json({
            message: "name does not exists.."
        })
    }

    // we have to add that name to our databse with id;
    let obj = {
        name: name,
        id: product.length + 1
    }

    product.push(obj);
    res.json({
        message: "data inserted succesfully",
        product
    })
})
const Port = 5000;
app.listen(Port, () => {
    console.log("Server is running...");
})



