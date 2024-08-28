// vue.config.js

const path = require('path');

module.exports = {
  
  lintOnSave: false, 

  // Webpack yapılandırmasını özelleştirmek için
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
};
