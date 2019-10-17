import RegisterLib from './RegisterLib'
import Config from '../Config'

class Init {

    mixin(Vue) {
        // Vue.mixin({
        //     methods: {
        //         lib() {
        //             return RegisterLib
        //         },
        //         config() {
        //             return Config;
        //         }
        //     }
        // });
        Vue.prototype.$config = Config
        Vue.prototype.$lib = RegisterLib
    }
}

export default new Init();