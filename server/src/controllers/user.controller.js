const userService = {}

//const restaurantDB = require('../databases/restaurantDB');

const User = require('../model/User.js');

userService.login = (req,res) => {
    try {
        const userName = req.body.user;
        const password = req.body.password;
        const user = new User(userName,password,"User Logged","Lastname");
        console.log("login called.");
        res.json(user);
    }catch (err) { res.json( { "status": err } ); console.error(err); }
}

/*

userService.login = async (req,res) => {
    try {

        const user = await restaurantDB.list(table);
        res.json(items);
    }catch (err) { res.json( { "status": err } ); console.error(err); }
}

userService.saveItem = async (req,res) => {
    try {
        const p_name = req.body.name;
        const p_description = req.body.description;
        const p_price = req.body.price;
        const item = { name: p_name, description: p_description, price : p_price };
        await restaurantDB.save(table,item);
        res.json( { "status":"success" } );
    }catch (err) { res.json( { "status": err } ); console.error(err); }
}
*/

module.exports = userService;