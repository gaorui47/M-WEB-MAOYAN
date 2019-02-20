

const appMainView=require('./app-main-controller');

const render = () => {
    //利用webpack里面的string-loader转换成字符串
    let appHeaderView=require('../views/app-header.html');
    let appFooterView=require('../views/app-footer.html');
    $('#header').html(appHeaderView);
    $('#footer').html(appFooterView);
    appMainView.render();
}


module.exports = { render }