<template>
  <div class="systems">
    
    <v-container fluid fill-height class="install-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Central vacuum systems  <br>to fit every home and business</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <div class="systems-bkgd">
      <v-container>

        <v-layout row wrap>
          <v-flex>
            <v-breadcrumbs :items="items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 sm6 md8>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
            <div v-for="(section, index) in intro" :key="index">
              <h2 class="grey--text text--darken-2 font-weight-bold" v-if="section.subhead">{{ section.subhead }}</h2>
              <p class="basic-text grey--text text--darken-2">{{ section.paragraph }}</p>
            </div>
          </v-flex>

          <v-flex xs12 sm6 md4 class="right-col">
            <img src="../assets/cv-logo.png" alt="cv-logo" width="100%" class="cv-logo pt-3">
            <p class="basic-text grey--text text--darken-2">Cyclo Vac was introduced in 1960 and meets the highest standards for quality and reliability.</p>
            <div v-for="type in types" :key="type.title" class="py-2">
              <v-card hover class="text-center card-bkgd" router :to="{ name: 'systems-child', params: { systems_slug: type.slug }}">
                <img :src="getPicUrl(type.btnImg)" width="100%">
                <v-card-title class="white--text justify-center title card-title pt-2">
                  {{ type.title }}
                </v-card-title>
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
        intro: [],
        types: [],
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('systems').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          let systems = doc.data()
          systems.id = doc.id
          this.items = systems.items
          this.intro = systems.intro
          this.types = systems.types
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
.install-banner{
  background-image: url("../assets/systems-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.systems-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.card-bkgd{
  background-image: url("../assets/nav-gradient.png");
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
  .install-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .systems-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .install-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
  .systems-bkgd{
    background-image: none;
  }
  .right-col{
    padding-left: 10px;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .install-banner{
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
  .install-banner{
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

