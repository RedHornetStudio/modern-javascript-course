const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'distribution/assets/js'),
        filename: 'bundle.js'
    }
};