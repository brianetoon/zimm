<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn
            color="transparent"
            class="menu-text font-weight-bold"
            depressed
            dark
            v-on="on"
            >
            Trade In,<br class="hidden-sm-and-down"> Upgrades & Parts
            </v-btn>
        </template>
        <v-list>
            <v-list-tile class="grey--text text--darken-2" v-for="link in menuLinks" :key="link.name" router :to="link.route">
                <v-list-tile-title class="menu-links ">{{ link.name }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    data(){
        return{
            menuLinks: [
                { name:'trade in', route:'/trade-in'},
                { name:'system upgrades', route:'/system-upgrades'},
                { name:'accessories', route:'/accessories'}
            ]
        }
    }
}
</script>

<style scoped>
    .menu-text{
        font-size: 16px;
    }
    .menu-links{
        text-transform: uppercase;
        font-weight: bold;
    }

    /* Media Queries */
    @media screen and (max-width: 959px) {
        button{
            margin: 0;
            padding: 0;
        }
        .menu-text{
            font-size: 14px;
        }
        .menu-links{
            font-size: 14px;
        }
    }
</style>