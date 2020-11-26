<template>
    <div class="trade-in">

        <v-container fluid fill-height class="trade-in-banner pa-0 banner">
            <v-container fill-height>
                <v-layout row wrap align-end fill-height>
                <v-flex>
                    <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Trade in and save on an<br>upgraded central vac system</h2>
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
                    <v-flex xs12 md4 lg3>
                        <img src="../assets/horiz-logo.png" alt="logo" width="200px">
                    </v-flex>
                    <v-flex xs12 md8 lg9>
                        <h2 class="sub-head grey--text text--darken-2 pb-3">
                            Trade In - Trade Up
                        </h2>
                        <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro" :key="index">
                            {{ para }}
                        </p>

                        <div class="promo-group pb-4">
                            <div class="promo">
                                <h3 class="price">$100 OFF</h3>
                                <p class="promo-text grey--text text--darken-2 mb-0">The purchase of a new unit</p>
                            </div>
                            <div class="promo">
                                <h3 class="price plus-sign">+</h3>
                            </div>
                            <div class="promo">
                                <h3 class="price">$125 VALUE</h3>
                                <p class="promo-text grey--text text--darken-2 mb-0">Free installation of a new unit</p>
                            </div>
                        </div>
                        
                    </v-flex>
                </v-layout>

                <v-layout align-center class="py-5">
                    <v-flex xs6 sm7 class="filter-promo">
                        <p class="grey-sub grey--text text--darken-2">
                            Tired of emptying the dirty canister and cleaning the filter?
                        </p>
                        <p class="blue-sub">
                            TRADE IN YOUR OLD CENTRAL VAC UNIT!
                        </p>
                        <p class="grey-sub grey--text text--darken-2">
                            Enjoy the convenience of a disposable bag. NO fuss, NO mess, NO tune-up needed!
                        </p>
                        <p class="grey-sub grey--text text--darken-2">
                            Get all the cleaning and health benefits that your central vacuum offers.
                        </p>
                        <p class="blue-sub">
                            LIMITED TIME OFFER<br class="break"> Call now! 866-829-0021
                        </p>
                    </v-flex>
                    <v-flex xs6 sm5 class="zimm-filter-wrapper"><img src="../assets/zimm-filter.png" alt="filter" class="zimm-filter"></v-flex>
                </v-layout>

                <v-layout align-end justify-center row wrap fill-height class="unit-row">
                    <v-flex xs12 sm6 md4 v-for="(unit, index) in units" :key="index">
                        <v-card flat class="unit-card text-xs-center transparent">
                            <img :src="getPicUrl(unit.image)" width="40%">
                            <v-card-title class="unit-info text-xs-left">
                                <h3 class="unit-name grey--text text--darken-2">{{ unit.name }}</h3>
                                <p class="basic-text grey--text text--darken-2 mb-0 pb-1">{{ unit.description }}</p>

                                <ul class="unit-list basic-text grey--text text--darken-2 pb-3">
                                    <li v-for="(item, index) in unit.list" :key="index">{{ item }}</li>
                                </ul>
                                
                                <div class="unit-pricing">
                                    <div class="unit-price-line" v-for="(price, index) in unit.prices" :key="index">
                                        <p class="basic-text grey--text text--darken-2">{{ price.item }}</p>
                                        <p class="unit-price">{{ price.cost }}</p>
                                    </div>
                                </div>
                                

                            </v-card-title>
                        </v-card>
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
            units: [],
            items: []
        }
    },
    created(){
        db.collection('trade-in').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let page = doc.data()
                    this.intro = page.intro
                    this.units = page.units
                    this.items = page.items
                })
            })
    },
    methods: {
        getPicUrl(img){
            var images = require.context('../assets/units/', true, /\.png$/)
            return images('./' + img)
        }
    }
}
</script>

<style scoped>
.trade-in-banner{
    background-image: url("../assets/banners/trade-in-banner.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.price{
    color: #0055a5;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
}
.promo{
    display: inline-block;
}
.promo-group{
    display: flex;
    text-align: center;
    justify-content: center;
}
.promo-text{
    font-weight: bold;
    font-size: 14px;
}
.plus-sign{
    padding-right: 5px;
}
.zimm-filter-wrapper{
    display: flex;
    justify-content: center;
}
.zimm-filter{
    width: 100%;
    max-width: 350px;
}
.blue-sub{
    color: #0055a5;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
}
.grey-sub{
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3em;
}
.unit-card{
    max-width: 360px;
    margin: 0 auto;
}
.unit-info{
    display: block;
}
.unit-name{
    font-size: 24px;
}
.unit-pricing{
    max-width: 300px;
}
.unit-price-line:nth-of-type(3){
    border-bottom: 2px solid #616161;
    padding-bottom: 5px;
    margin-bottom: 5px;
}
.unit-price-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.unit-price-line p{
    margin: 0;
}
.unit-price{
    color: #0055a5;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2em;
}

/* Media Queries */

/* Small Devices and up */
@media screen and (min-width: 600px){
    .price{
        font-size: 40px;
        line-height: 40px;
    }
    .promo-text{
        font-size: 16px;
    }
    .plus-sign{
        padding-right: 20px;
    }
    .filter-promo p{
        font-size: 23px;
        margin-bottom: 30px;
    }
    .filter-promo p:nth-child(2){
        margin-bottom: 5px;
    }
}
/* Medium Devices and up */
@media screen and (min-width: 960px){
    .promo-group{
        justify-content: start;
    }
    .unit-name{
        font-size: 20px;
    }
    .filter-promo p{
        font-weight: 400;
        letter-spacing: -1px;
        line-height: 1.1em;
        font-size: 28px;
    }
    p.blue-sub{
        font-weight: bold;
    }
}

@media screen and (min-width: 1200px){
    .filter-promo p{
        margin-bottom: 40px;
    }
    .break{
        /* display: none; */
    }
}
</style>