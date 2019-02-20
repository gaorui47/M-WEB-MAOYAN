

    let appHeaderView=require('../views/app-header.html');

const render=()=>{
    $('#header').html(Handlebars.compile(appHeaderView)({title:'<- 猫眼电影'}));

    $('#main').html("我不好")
}


module.exports={
    render
}