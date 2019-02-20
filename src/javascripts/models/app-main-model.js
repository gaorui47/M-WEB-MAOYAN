
const api=require("../api");


const getFilmsList=(callback)=>{
   api.request({
       url:"/ajax/movieOnInfoList?token=",
       success:(data)=>{
           callback(data);
           console.log(data)
       }
})
}


module.exports={
    getFilmsList
}