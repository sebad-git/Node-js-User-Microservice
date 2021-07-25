const userService = {}

const userRepository = require('../repositories/user.repository');

userService.login = async (request,response) => {
    try {
        const userName = request.body.user;
        const password = request.body.password;
        const result = await userRepository.login(userName,password);
        response.json(result);
    }catch (error) { console.error(error); throw error; }
}

userService.register= async (request,response) => {
    try {
        //const userName = request.body.user;
       // const password = request.body.password;
      //  const result = await userRepository.login(userName,password);
      //  response.json(result);
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

module.exports = userService;