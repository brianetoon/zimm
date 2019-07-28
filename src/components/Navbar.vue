<template>
    <nav>
        <v-toolbar flat dark id="main-nav" height="100">
            <v-toolbar-side-icon large @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat v-for="link in links" :key="link.name" router :to="link.route">
                    {{ link.name }}
                </v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>
            
            <v-toolbar-title>
                <v-img src="round-logo.png" height="75" width="75"></v-img>
            </v-toolbar-title>

        </v-toolbar>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            links: [
                { name: 'home', route: '/'},
                { name: 'installation', route: '/installation'},
                { name: 'systems', route: '/systems'},
                { name: 'accessories', route: '/accessories'},
                { name: 'tune up & repair', route: '/tune-up-and-repair'},
                { name: 'about', route: '/about'},
            ],
            drawer: false
        }
    }
}
</script>

<style>
#main-nav{
    background-image: url("../assets/nav-gradient.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.v-icon{
    font-size: 35px;
}
</style>
