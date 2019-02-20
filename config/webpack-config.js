
const path=require('path');

const webpackConfig={
    mode:'development',//配置打包模式
    entry:{
        index:path.join(__dirname,'../src/javascripts/index.js')
    },
    output:{
        filename:'[name].js',//前面的入口叫什么，后面的出口就叫什么名字
    },
    module:{
        rules:[
            {
            test:/\.html$/,//寻找引入进来的html模块
            use:'string-loader',//把这些模块变换成字符串
            }
        ]
    }
}


module.exports=webpackConfig;