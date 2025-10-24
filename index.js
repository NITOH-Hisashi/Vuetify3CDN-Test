const { createApp, ref, onMounted } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()
createApp({
    setup() {
        const visual = ref(false);
        const info = ref({
            name: "",
            nickname: "",
            gender: "",
        });
        const drawer = ref(null);

        /**
         * 初期表示時にナビゲーションドロワーを開く
         */
        onMounted(() => {
            drawer.value = true;
        });

        return {
            visual,
            info,
            drawer,
        };
    },
}).use(vuetify).mount('#app');
