


const appHeaderView = require('../views/app-header.html');
const { getFilmsList } = require('../models/app-main-model');
const appMainView = require('../views/app-main.html');


const render = async () => {
    //渲染头部
    $('#header').html(Handlebars.compile(appHeaderView)({ title: '猫眼电影' }));

    let films=await getFilmsList();
    let template = Handlebars.compile(appMainView)
        $('#main').html(template({ films: films.movieList }));

}


module.exports = {
    render
}