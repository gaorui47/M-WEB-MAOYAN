


const {getFilmsList}=require('../models/app-main-model')

const render=()=>{

    let appMainView=require('../views/app-main.html');

    getFilmsList((data)=>{
        let template=Handlebars.compile(appMainView)
        $('#main').html(template({films:data.movieList}));
    });

}


module.exports={
    render
}