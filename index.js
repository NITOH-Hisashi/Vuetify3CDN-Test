const { createApp, ref, onMounted } = Vue
const { createVuetify } = Vuetify
//const { createRouter, createWebHistory } = VueRouter

const vuetify = createVuetify()
/*
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: {
            template: '<div>RouterTemplate</div>'
        }
    }]
})
*/
const headers = {
    headers: {
        "Content-Type": "text/x-vue",
    }
};

/** メインアプリケーションの作成とマウント
 * - index.vue をフェッチしてテンプレートとして使用
 */
fetch('./index.vue', headers)
    .then(r => r.text())
    .then(vue => {
        const app = createApp({
            template: vue,
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
        })

        //app.use(router)
        app.use(vuetify)
        app.mount('#app')
    })
    .catch(err => {
        console.error('index.vueの読み込みに失敗:', err);
    });
