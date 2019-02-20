
const path=require('path');
const serverconfig=require('./server-config');
const webpackConfig=require('./webpack-config');


const config={
    path:{
        src:path.join(__dirname,'../src'),
        dist:path.join(__dirname,'../dist'),
        static:path.join(__dirname,'../src/static'),
    },
    serverconfig,
    webpackConfig
}

module.exports=config;
