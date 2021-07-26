const userService = {}

/*
const userRepository = require('../repositories/user.repository');

userService.login = async (request,response) => {
    try {
        const userName = request.body.userName;
        const password = request.body.password;
        const loginUser = await userRepository.login(userName,password);
        console.log(loginUser);
        response.json(loginUser);
    }catch (error) { console.error(error); throw error; }
}

userService.register = async (request,response) => {
    try {
        await userRepository.save(request.body);
        response.json("saved");
    }catch (error) { console.error(error); throw error; }
}

userService.validateMail= async (request,response) => {
    try {
     //   const userName = request.body.user;
     //   const password = request.body.password;
     //   const result = await userRepository.login(userName,password);
      //  response.json(result);
    }catch (error) { console.error(error); throw error; }
}

userService.forgotPassword= async (request,response) => {
    try {
      //  const userName = request.body.user;
      //  const password = request.body.password;
      //  const result = await userRepository.login(userName,password);
      //  response.json(result);
    }catch (error) { console.error(error); throw error; }
}
*/

const mongoose = require('mongoose');
const userSchema = require('../model/user.model');

const User = mongoose.model('USER', userSchema);

userService.login = async (request,response) => {
    try {
        const _username = request.body.userName, _password = request.body.password;
        const loginQuery = User.findOne( { userName: _username, password: _password } );
        loginQuery.exec( (err, user) => {
            if (err) { console.error(err); throw err; } 
            response.json(user)});
    }catch (error) { console.error(error); throw error; }
}

userService.register = async (request,response) => {
    try {
        const user = request.body;
        const userToSave =  new User ( 
            { userName:user.userName,
                password:user.password,
                names: user.names,
                lastnames: user.lastnames }
            );
        await userToSave.save( (err) => {
            if (err) {console.error(err); response.json(false); }
            console.log('User successfully saved.');
            response.json(true);
        });
    }catch (error) { console.error(error); }
}

userService.validateMail = async (request,response) => {
    try {
        const _userName = request.body.userName;
        const findEmailQuery = User.findOne( { userName: _userName } );
        findEmailQuery.exec( (err, user) => {
            if (err) { console.error(err); response.json(false); return; }
            if(!user || !user.userName || user.userName!=_userName){response.json(false); return; }
            response.json(true);
        });
    }catch (error) { console.error(error); throw error; }
}

userService.forgotPassword= async (request,response) => {
    try {
      //  const userName = request.body.user;
      //  const password = request.body.password;
      //  const result = await userRepository.login(userName,password);
      //  response.json(result);
    }catch (error) { console.error(error); throw error; }
}


module.exports = userService;