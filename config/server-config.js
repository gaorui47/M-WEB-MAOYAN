


const serverconfig={
    livereload: {
        enable: true
    },
   directoryListing:false,
   open:false,
   port:1000,
   //web-server的代理跨域访问数据
   proxies:[{
        source:'/maoyan',//暗号
        target:'http://m.maoyan.com/',//目标
   }
]
}


module.exports=serverconfig;