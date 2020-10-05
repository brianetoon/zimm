<template>
  <div class="about">
    
    <v-container fluid fill-height class="about-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Zimm’s – over 30 years serving <br>Michigan and northern Ohio</h2>
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

          <v-flex xs12 md5>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
            <div>
              <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro" :key="index">
                {{ para }}
              </p>
            </div>
          </v-flex>

          <v-flex xs12 md7 class="right-col text-xs-center">
            <img src="../assets/service-map.png" alt="map" class="map" width="100%">
          </v-flex>

        </v-layout>

        <v-layout row wrap fill-height align-center class="py-4">

          <v-flex xs12 sm5 class="py-4">
            <v-card flat class="transparent dan-card">
              <img src="../assets/dans-photo.png" alt="dan" width="100%" class="dan-photo">
              <v-card-text class="pa-0">
                <p class="basic-text grey--text text--darken-2 font-weight-bold ma-0">Dan Zimmerman,</p>
                <p class="basic-text grey--text text--darken-2 font-weight-bold ma-0">Owner, Zimm’s Central Vacuum</p>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm7 class="right-col pt-2">
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text pb-3">The Zimm’s story</h2>
            <div>
              <p class="basic-text grey--text text--darken-2" v-for="(para, index) in story" :key="index">
                {{ para }}
              </p>
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
        intro: [],
        story: []
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('about').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          let page = doc.data()
          page.id = doc.id
          this.intro = page.intro
          this.items = page.items
          this.story = page.story
        })
      })
    },
  }
</script>

<style>
.about-banner{
  background-image: url("../assets/banners/about-banner.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
}
.about .sub-head{
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -1px;
  line-height: 1;
}
.map{
  max-width: 500px;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .about-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .about-bkgd{
    background-image: none;
  }
  .dan-photo{
    max-width: 300px;
  }
  .dan-card{
    text-align: center;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .about-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
  .about-bkgd{
    background-image: none;
  }
  .about .right-col{
    padding-left: 30px;
  }
  .dan-photo{
    max-width: 300px;
  }
  .dan-card{
    text-align: center;
  }
  
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .about-banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .about .right-col{
    padding-left: 40px;
  }
  .dan-photo{
    max-width: 300px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .about-banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .about .right-col{
    padding-left: 40px;
  }
  .dan-photo{
    max-width: 300px;
  }
}
</style>

