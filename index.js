        const vuetify = Vuetify.createVuetify()
        const app = Vue.createApp({
            data() {
                return {
                    visual: false,
                    info: {
                        name: "",
                        nickname: "",
                        gender: "",
                    },
                    drawer: null,
                };
            },
            methods: {
            },
            mounted() {
            }
        });
        app.use(vuetify).mount('#app');
