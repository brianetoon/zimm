<template>
  <div class="tune-up">
    
    <v-container fluid fill-height class="tune-up-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Tune-up and repair services</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <div class="tune-up-bkgd">

      <v-container>

        <v-layout row wrap>
          <v-flex>
            <v-breadcrumbs :items="items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
          </v-flex>
        </v-layout>

        <v-layout row wrap>

          <v-flex xs12 sm6 md8>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
            <h2 class="special-headline primary--text pb-4">We service ALL <br>makes and models.</h2>
            <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro1" :key="index">
              {{ para }}
            </p>
            <div class="repairs pt-2 pb-4">
              <h2 class="grey--text text--darken-2">REPAIRS</h2>
              <p class="basic-text grey--text text--darken-2 ma-0" v-for="(repair, index) in repairs" :key="index">
                {{ repair }}
              </p>
            </div>
            <div class="pb-3">
              <p class="basic-text grey--text text--darken-2" v-for="para in intro2" :key="para">
                {{ para }}
              </p>
            </div>
          </v-flex>

          <v-flex xs12 sm6 md4 class="right-col">

            <div class="pb-3">
              <h2 class="grey--text text--darken-2">BRANDS WE SERVICE INCLUDE</h2>
              <p class="basic-text grey--text text--darken-2 ma-0" v-for="(brand, index) in brands" :key="index">
                {{ brand }}
              </p>
            </div>
            
            <div v-for="type in types" :key="type.title" class="py-4">
              <v-card hover class="text-center card-bkgd" router :to="{ name: 'tune-up-child', params: { tuneup_slug: type.slug }}">
                <img :src="getPicUrl(type.img)" width="100%">
                <v-card-title class="white--text justify-center title card-title pt-2 pb-0">
                  {{ type.title }}
                </v-card-title>
                <v-card-text class="pa-0 text-xs-center">
                  <p class="white--text basic-text pb-2">click to see more</p>
                </v-card-text>
              </v-card>
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
      return{
        items: [],
        intro1: [],
        intro2: [],
        repairs: [],
        brands: [],
        types: []
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('tuneup').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          let tuneup = doc.data()
          tuneup.id = doc.id
          this.items = tuneup.items
          this.intro1 = tuneup.intro1
          this.intro2 = tuneup.intro2
          this.repairs = tuneup.repairs
          this.brands = tuneup.brands
          this.types = tuneup.types
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
.tune-up-banner{
  background-image: url("../assets/tune-up-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.special-headline{
  font-size: 36px;
  line-height: 1;
  font-weight: 600;
}
.tune-up-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.card-bkgd{
  background-image: url("../assets/card-bkgd.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.card-title{
  font-family: freight-sans-pro, sans-serif !important;
  font-weight: 500;
  font-size: 24px !important;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
}
.cv-logo{
  max-width: 250px;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .tune-up-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .tune-up-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .tune-up-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
  .tune-up-bkgd{
    background-image: none;
  }
  .tune-up .right-col{
    padding-left: 20px;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .tune-up-banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .tune-up .right-col{
    padding-left: 40px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .tune-up-banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .tune-up .right-col{
    padding-left: 40px;
  }
}
</style>

