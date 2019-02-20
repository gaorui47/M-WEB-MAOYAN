

const rotues = require('./rotues');

class Router {
    constructor({ initial }) {
        this.rotues = rotues;
        this.initial = initial;
    }
    init() {
        this.initAction();
        this.listenHanshChange();
    }
    refreshRotuer(path) {
         this.rotues[path]();
         this.renderNavLink(path);
    }
    initAction() {
        let path = location.hash.replace("#", '');
        if (!path) {
            location.hash = this.initial;
        } else {
            this.refreshRotuer(path);
        }
    }
    renderNavLink(path){
        $('.nav-link').removeClass('active')
        $('.nav-link').each((i, item) => {
            if ( $(item).data('path') === path ) $(item).addClass('active')
        })
    }
    listenHanshChange() {
        window.addEventListener("hashchange", () => {
            let path = location.hash.replace("#", '');
            let handler = this.rotues[path];
            if (handler) {
                this.refreshRotuer(path);
            } else {
                location.hash = this.initial;
            }
        })
    }
}


module.exports = Router;