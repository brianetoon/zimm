<template>
    <div class="commercial">

        <v-container fluid fill-height class="commercial-banner pa-0 banner">
            <v-container fill-height>
                <v-layout row wrap align-end fill-height>
                <v-flex>
                    <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Commercial & industrial systems</h2>
                </v-flex>
                </v-layout>
            </v-container>
        </v-container>

        <div class="body-bkgd">
            <v-container>

                <v-layout row wrap>
                    <v-flex>
                        <v-breadcrumbs :items="items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12 sm4 class="py-2">
                        <img src="../assets/horiz-logo.png" alt="logo" width="200px" class="pb-2">
                        <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro" :key="index">
                            {{ para }}
                        </p>
                        <div class="list pt-3">
                            <h2 class="sub-head-bold text-uppercase grey--text text--darken-2 pb-2">
                                COMMERCIAL VACUUM SYSTEMS ARE IDEAL FOR:
                            </h2>
                            <p class="point basic-text grey--text text--darken-2 pb-1" v-for="(item, index) in list" :key="index">
                                {{ item }}
                            </p>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm7 offset-sm1 class="py-2">
                        <h2 class="sub-head grey--text text--darken-2 pb-3">
                            Why choose a commercial vac system?
                        </h2>
                        <div v-for="point in points" :key="point.category" class="py-2">
                            <h2 class="sub-head-bold text-uppercase grey--text text--darken-2 pb-1">{{ point.category }}</h2>
                            <p class="point basic-text grey--text text--darken-2 pb-1" v-for="(bullet, index) in point.bullets" :key="index">
                                {{ bullet }}
                            </p>
                        </div>
                        <div class="dog">
                            <img src="../assets/dog-groom.png" alt="dog" width="100%" class="pt-4">
                        </div>
                    </v-flex>
                </v-layout>

            </v-container>
        </div>

    </div>
</template>

<script>
import db from '@/fb'

export default {
    data(){
        return {
            intro: [],
            points: [],
            list: [],
            items: []
        }
    },
    created(){
        db.collection('commercial').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let page = doc.data()
                    this.intro = page.intro
                    this.points = page.points
                    this.list = page.list
                    this.items = page.items
                })
            })
    }
}
</script>

<style scoped>
.commercial-banner{
    background-image: url("../assets/banners/commercial-banner.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.dog{
    max-width: 450px;
}
</style>