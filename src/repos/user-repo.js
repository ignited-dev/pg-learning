const pool = require('../pool');
const toCamelCase = require('./utils/to-camel-case');

class UserRepo {

    static async find () {
        const { rows } = await pool.query(`SELECT * FROM users`);
        return toCamelCase(rows);
    }
    
    static async findById(id) {
        const { rows } = await pool.query(`SELECT * FROM users where id = $1`, [id]);
        return toCamelCase(rows)[0];
    }
    
    static async insert(username, bio) {
        const result = await pool.query('INSERT INTO users(username, bio) VALUES($1, $2)', [username, bio]);
        console.log(result);
        return toCamelCase({})
    }

    static async update() {}

    static async delete() {}
}

module.exports = UserRepo;