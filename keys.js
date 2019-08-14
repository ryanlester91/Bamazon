//console.log('this is loaded');
require('dotenv').config();

module.exports= {
    password: process.env.MYSQL_PASSWORD
};