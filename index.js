const { createApp, ref, onMounted, watch } = Vue
const { createVuetify } = Vuetify
const { createRouter, createWebHistory, useRoute } = VueRouter

const vuetify = createVuetify()

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: {
            template: '<div>RouterTemplate</div>'
        }
    }]
})

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
    .then(xml => {
        /* template部分を抽出しないといけないので、タグを削除する
         * index.vue の中身をそのまま使うわけにはいかない
         * index.vue は template タグで囲まれていないとVueファイルと認識されないため
         */
        const vue = xml.replace('<template>', '').replace('</template>', '');
        const app = createApp({
            template: vue,
            setup() {
                const visual = ref(false);
                const info = ref({
                    name: "",
                    nickname: "",
                    gender: "",
                });

                // 初期表示時にナビゲーションドロワーを開く
                // 幅1280px未満はモバイル扱いで閉じられる
                const drawer = ref(true);

                const route = useRoute();

                // ルートが変わるたびにドロワーを開く
                watch(() => route.fullPath, () => {
                    drawer.value = true;
                });

                onMounted(() => {
                });

                return {
                    visual,
                    info,
                    drawer,
                };
            },
        })

        app.use(router)
        app.use(vuetify)
        app.mount('#app')
    })
    .catch(err => {
        console.error('index.vueの読み込みに失敗:', err);
    });
