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
    template: `
            <v-app>
            <v-app-bar app>
                <!-- ヘッドバー  -->
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>Application</v-toolbar-title>
                <div class='foo' style='margin-left: auto;'>

                </div>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" app>
                <!-- サイドメニューバー  -->
                <v-expansion-panels>
                    <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                </v-expansion-panels>
            </v-navigation-drawer>

            <v-main>
                <!-- メインコンテンツ  -->
                <div>
                    <v-btn>
                        push
                    </v-btn>
                </div>
                <v-row no-gutters>
                    <v-col v-for="n in 25" :key="n">
                        <v-card width="300" height="600" outlined>Card</v-card>
                    </v-col>
                </v-row>
            </v-main>
        </v-app>
    `,
}).use(vuetify).mount('#app');
