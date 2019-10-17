
class RouteRegisterConfig {
    constructor() {
        this.listRoute = []
    }
    setOptions() {
        return {
            isAuth: false
        }
    }
    add(config, defaultLayout = '', options = {}) {
        let setOptions = this.setOptions();
        options = Object.assign({}, setOptions, options)
        if (typeof config != 'undefined') {

            let a = config.routes.map((val) => {
                if (typeof config.prefix !== 'undefined') {
                    val.path = `/${config.prefix}${val.path}`
                }
                
                if (typeof val.meta === 'undefined') {
                    val.meta = {};
                }
                if (typeof config.prefix !== 'undefined') {
                    val.meta.prefix = config.prefix
                } else {
                    val.meta.prefix = ''
                }

                if (typeof val.meta.layout === 'undefined') {
                    val.meta.layout = defaultLayout;
                }

                if (typeof val.meta.title === 'undefined') {
                    val.meta.title = 'Untitled';
                }

                if (typeof val.meta.isAuth === 'undefined') {
                    val.meta.isAuth = options.isAuth;
                }
                return val;
            })
            this.listRoute = this.listRoute.concat(a);
        }
    }
    getList() {
        return this.listRoute
    }

    ifNotAuthenticated(to, from, next) {
        if (!store.getters.isAuthenticated) {
            next()
            return
        }
        next('/')
    }

    ifAuthenticated(to, from, next) {
        if (store.getters.isAuthenticated) {
            next()
            return
        }
        next('/login')
    }
}


export default new RouteRegisterConfig();