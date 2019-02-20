

const appController=require('./controllers/app-controller')
const Router=require('./router');

appController.render();

new Router({initial:'/index'}).init();