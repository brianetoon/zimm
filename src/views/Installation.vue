<template>
  <div class="installation">
    
    <v-container fluid fill-height class="install-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Central vacuum installation <br>for home and business</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <div class="inst-bkgd">
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
            <h1 class="sub-head grey--text text--darken-2 py-1">Why install a central vacuum system?</h1>
            <div class="pb-2" v-for="point in points" :key="point.category">
              <h2 class="text-uppercase grey--text text--darken-2">{{ point.category }}</h2>
              <p class="point basic-text grey--text text--darken-2 pb-1" v-for="bullet in point.bullets" :key="bullet">{{ bullet }}</p>
            </div>
          </v-flex>

        </v-layout>

        <v-layout row wrap class="pt-2">
          <v-flex xs12 sm6 md4 class="pa-2" v-for="type in types" :key="type.title">
            <v-card hover class="text-center card-bkgd" router :to="{ name: 'install-child', params: { install_slug: type.slug }}">
              <img :src="getPicUrl(type.btnImg)" width="100%">
              <v-card-title class="white--text justify-center title card-title pt-2">
                {{ type.title }}
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
      return{
        items: [],
        intro: [],
        points: [],
        types: []
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('installation').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id)
          let page = doc.data()
          page.id = doc.id
          this.intro = page.intro
          this.points = page.points
          this.items = page.items
          this.types = page.types
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

<style scoped>
.install-banner{
  background-image: url("../assets/install-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.inst-bkgd{
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
.sub-head{
  font-weight: 500;
}
.point{
  margin: 0;
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
  .inst-bkgd{
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
  .inst-bkgd{
    background-image: none;
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

