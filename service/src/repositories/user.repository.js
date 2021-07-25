const userRepository = {}

const mysqlDatabase = require('../database/mysql.database');

userRepository.login = async (userName,password) => {
    try {
        const sql = `SELECT * FROM USER WHERE USERNAME == ${userName} AND PASSWORD == ${password}`;
        return result = await mysqlDatabase.query(sql);
    }catch (error) { console.error(error); throw error; }
}

module.exports = userRepository;