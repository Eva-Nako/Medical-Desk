import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#09425a',
                secondary: colors.red.lighten4, // #FFCDD2
                accent: '#0FB7B6', // #3F51B5
                bbb: '#D0D8DA',
                wht: '#fff',
            },
        },
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
});
