<template>
  <div class="accessories">
    
    <v-container fluid fill-height class="accessory-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Accessories and <br class="hidden-sm-and-up"> replacement parts</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <div class="accessory-bkgd">

      <v-container>

        <v-layout row wrap>
          <v-flex>
            <v-breadcrumbs :items="items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md5>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
            <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro" :key="index">{{ para }}</p>
          </v-flex>

          <v-flex xs12 md7 class="right-col">
            <h1 class="sub-head grey--text text--darken-2 py-3">Learn more about accessories and upgrades</h1>
            <div class="py-2" v-for="(point,index) in points" :key="index">
              <h2 class="grey--text text--darken-2">{{ point.title }}</h2>
              <p class="point basic-text grey--text text--darken-2 pb-1">{{ point.text }}</p>
            </div>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="pt-4">
          <v-flex xs12 sm6 md4 class="pa-2" v-for="(brand, index) in brands" :key="index">
            <v-card hover class="text-center card-bkgd" router :to="{ name: 'accessory-child', params: { accessory_slug: brand.slug }}">
              <img :src="getPicUrl(brand.img)" width="100%">
              <v-card-title class="white--text justify-center title card-title pt-2 pb-0">
                {{ brand.title }}
              </v-card-title>
              <v-card-text class="pa-0 text-xs-center">
                <p class="white--text basic-text pb-2">click to see more</p>
              </v-card-text>
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
      return{
        items: [],
        points: [],
        intro: [],
        brands: []
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('accessories').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          let page = doc.data()
          page.id = doc.id
          this.intro = page.intro
          this.points = page.points
          this.items = page.items
          this.brands = page.brands
        })
      })
    },
    methods: {
      getPicUrl(img){
          var images = require.context('../assets/', true, /\.png$/)
          return images('./' + img)
      }
    }
  }
</script>

<style>
.accessory-banner{
  background-image: url("../assets/accessory-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.accessory-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  /* background-size: cover; */
  background-repeat: no-repeat;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
}
.sub-head{
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -1px;
  line-height: 1;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .accessory-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .accessory-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .accessory-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
  .accessory-bkgd{
    background-image: none;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .accessory-banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .right-col{
    padding-left: 20px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .accessory-banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .right-col{
    padding-left: 20px;
  }
}
</style>
