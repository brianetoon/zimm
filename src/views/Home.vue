<template>
  <div class="home white">
    <v-container fluid fill-height class="home-banner pa-0">
      <v-container fill-height class="xs-home">
        <v-layout row wrap align-content-space-between>
        <v-flex xs6>
          <img class="logo" src="../assets/horiz-logo.png" alt="logo">
        </v-flex>
        <v-flex xs12 sm10>
          <h2 class="font-weight-regular grey--text text--darken-2 banner-text">Discover central vacuum <br>for a cleaner, healthier home</h2>
        </v-flex>
      </v-layout>
      </v-container>
    </v-container>

    <div class="home-bkgd">
      <v-container>

        <v-layout row wrap>
          
          <v-flex xs12 md8>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="py-3" v-for="(section, index) in intro" :key="index">
                  <h2 class="grey--text text--darken-2 font-weight-bold subhead" v-if="section.subhead">{{ section.subhead }}</h2>
                  <p class="basic-text grey--text text--darken-2 ma-0 pt-2" v-for="(point, index) in section.points" :key="index">
                    {{ point }}
                  </p>
                </div>
              </v-flex>

              <v-flex xs12>
                <h2 class="font-weight-regular grey--text text--darken-2 banner-text py-4">
                  Zimm’s - the best in central vacuum installation and service
                </h2>
              </v-flex>
              
            </v-layout>
          </v-flex>

          <v-flex xs12 md4 class="py-4">
            <v-layout row wrap>
              <v-flex xs12 sm4 md12 class="hidden-xs-only">
                <img width="100%" src="../assets/pup.png" alt="pup">
              </v-flex>
              <v-flex xs12 sm4 md12 class="hidden-xs-only">
                <img width="100%" src="../assets/ltweight.png" alt="vacuum">
              </v-flex>
              <v-flex xs12 sm4 md12>
                <img width="100%" src="../assets/man-van.png" alt="van">
              </v-flex>
            </v-layout>
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
        intro: []
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('home').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id)
          let page = doc.data()
          page.id = doc.id
          this.intro = page.intro
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
.home-banner{
  background-image: url("../assets/home-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.home-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.home .subhead{
  line-height: 1.2;
}
/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .home-banner{
    height:350px;
  }
  .logo{
    width: 150px;
  }
  .home .banner-text{
    font-size: 30px;
  }
  .body-text{
    font-size: 28px;
  }
  .home-bkgd{
    background-image: none;
  }
  .xs-home{
    padding-bottom: 5px;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .home-banner{
    height: 450px;
  }
  .logo{
    width: 200px;
  }
  .banner-text{
    font-size: 38px;
  }
  .body-text{
    font-size: 32px;
  }
  .home-bkgd{
    background-image: none;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .home-banner{
    height: 550px;
  }
  .logo{
    width: 250px;
  }
  .banner-text{
    font-size: 42px;
  }
  .body-text{
    font-size: 30px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .home-banner{
    height: 700px;
  }
  .logo{
    width: 275px;
  }
  .banner-text{
    font-size: 55px;
  }
  .body-text{
    font-size: 55px;
  }
}
</style>

