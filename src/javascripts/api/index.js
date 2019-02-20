


const api={
   request({url,data,methods}){
    return  $.ajax({
            // url:"/maoyan/ajax/movieOnInfoList?token=",
            url:"/maoyan"+url,
            data:data||{},
            methods:methods||'get',
            success:(res)=>{
               return res;
            },
            error:(error)=>{
                console.log("请求出错了",error)
            }
        })
    }
}

module.exports=api;