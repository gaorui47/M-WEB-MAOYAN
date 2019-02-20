
const appMainController=require('../controllers/app-main-controller');
const appCenimaController=require('../controllers/app-cenima-controller');
const appMyController=require('../controllers/app-my-controller');


let rotues={
    '/index':appMainController.render,
    '/cenima':appCenimaController.render,
    '/my':appMyController.render
}

module.exports=rotues;