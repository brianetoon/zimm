<template>
    <nav>
        <v-toolbar flat dark id="main-nav" height="100">
            <v-toolbar-side-icon large @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="link in links" :key="link.name" router :to="link.route">
                    <span class="text font-weight-bold">{{ link.name }}</span>
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            
            <v-toolbar-title>
                <img src="../assets/round-logo.png" height="75" width="75" />
            </v-toolbar-title>

        </v-toolbar>

        <v-navigation-drawer disable-resize-watcher v-model="drawer" app class="light-blue darken-3">

            <v-layout column align-center>
                <v-flex class="mt-5">
                    <img src="/round-logo.png" alt="round-logo">
                </v-flex>
            </v-layout>

            <v-list class="mt-3">
                <v-list-tile v-for="link in links" :key="link.name" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text text-uppercase font-weight-bold">
                            {{ link.name }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data(){
        return{
            links: [
                { name: 'home', icon: 'home', route: '/'},
                { name: 'installation', icon: 'settings', route: '/installation'},
                { name: 'systems', icon: 'list', route: '/systems'},
                { name: 'accessories', icon: 'toys', route: '/accessories'},
                { name: 'tune up & repair', icon: 'build', route: '/tune-up-and-repair'},
                { name: 'about', icon: 'info', route: '/about'},
            ],
            drawer: false
        }
    }
}
</script>

<style scoped>
#main-nav{
    background-image: url("../assets/nav-gradient.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.v-icon{
    font-size: 35px;
}

/* medium devices and up */
@media (min-width: 960px){
    .text{
        font-size: 16px;
        font-weight: 500;
    }
}
</style>
