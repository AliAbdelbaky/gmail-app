<template>
    <v-app>
        <v-main>
            <ToolBarVue />
            <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600">
                <router-view />
            </v-sheet>
        </v-main>
    </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ToolBarVue from "./layouts/ToolBar.vue";
export default defineComponent({
    name: "App",
    components: {
        ToolBarVue
    }
});
</script>