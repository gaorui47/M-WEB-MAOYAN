
   const appHeaderView=require('../views/app-header.html');

const render=()=>{
    $('#header').html(Handlebars.compile(appHeaderView)({title:"影院"}));
    $('#main').html("你好")
}

module.exports={
    render
}