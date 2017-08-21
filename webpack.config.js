/*
 * @Author: whz 
 * @Date: 2017-08-21 17:29:51 
 * @Last Modified by: whz
 * @Last Modified time: 2017-08-21 17:34:47
 */
var config = {
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js']
    },
    output: {
        path: './dist',
        filename: 'app.js'
    }
};

module.exports = config;