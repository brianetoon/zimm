<template>
    <nav>

        <v-toolbar flat dark id="main-nav" height="100" class="">
            <v-toolbar-side-icon large @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">

                <v-btn flat v-for="link in links" :key="link.name" router :to="link.route">
                    <span class="text font-weight-bold">{{ link.name }}</span>
                </v-btn>

                <Menu />

            </v-toolbar-items>

            <v-spacer></v-spacer>
            
            <v-toolbar-title>
                <a href="/">
                    <img src="../assets/round-logo.png" height="75" width="75" alt="logo" />
                </a>
            </v-toolbar-title>
        </v-toolbar>

        <v-navigation-drawer disable-resize-watcher v-model="drawer" app class="light-blue darken-3">

            <v-layout column align-center>
                <v-flex class="mt-5">
                    <img src="/round-logo.png" alt="logo">
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

                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon class="white--text">format_list_bulleted</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <Menu />
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
import Menu from './Menu'

export default {
    components: { Menu },
    data(){
        return{
            links: [
                { name: 'home', icon: 'dashboard', route: '/'},
                { name: 'commercial', icon: 'store_mall_directory', route: '/commercial'},
                { name: 'residential', icon: 'house', route: '/residential'},
                // { name: 'accessories', icon: 'toys', route: '/accessories'},
                { name: 'tune up & repair', icon: 'handyman', route: '/tune-up-and-repair'},
                { name: 'about', icon: 'info', route: '/about'},
            ],
            menuLinks: [
                { name:'trade in', route:'/trade-in'},
                { name:'system upgrades', route:'/system-upgrades'},
                { name:'accessories', route:'/accessories'}
            ],
            drawer: false,
        }
    }
}
</script>

<style scoped>
nav{
    background-image: url("../assets/nav-gradient.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
#main-nav{
    background: none !important;
    margin: 0 auto;
}
.v-icon{
    font-size: 35px;
}
#main-nav > div{

}


/* medium devices and up */
@media screen and (min-width: 960px){
    .text{
        font-size: 16px;
    }
    #main-nav{
        max-width: 942px;
    }
}
@media screen and (min-width: 1264px){
    #main-nav{
        max-width: 1222px;
    }
}
@media screen and (min-width: 1904px){
  #main-nav{
      max-width: 1786px;
  }
}
</style>
