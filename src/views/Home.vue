<template>
  <div class="home">
    <v-container fluid fill-height class="home-banner banner pa-0">
      <v-container fill-height class="banner-content-container">
      <v-layout align-end justify-start row fill-height>
        <v-flex xs6>
          <img class="logo" src="../assets/horiz-logo.png" alt="logo">
        </v-flex>
      </v-layout>
      </v-container>
    </v-container>

    <div class="body-bkgd">
      <v-container>
            <v-layout row wrap class="pt-2">
              <v-flex xs12>
                <div class="home-intro">
                  <h2 class="sub-head-bold text-uppercase grey--text text--darken-2">
                    WHY CHOOSE ZIMM’S CENTRAL VACUUM FOR YOUR HOME?
                  </h2>
                  <p class="basic-text grey--text text--darken-2 ma-0 pt-2" v-for="(para, index) in intro" :key="index">
                    {{ para }}
                  </p>
                </div>
              </v-flex>
            </v-layout>

            <v-layout row wrap class="py-3">
              
              <v-flex xs6 xl5 class="featured-col">
                
                <div class="featured">
                  <h2 class="grey--text text--darken-2 featured-text">
                    Zimm’s – Michigan’s largest Hide-A-Hose dealer 
                  </h2>
                  <p class="basic-text grey--text text--darken-2 ma-0 py-2">
                    4 out of 5 homeowners choose Hide-A-Hose fully-retractable hose systems for their homes.
                  </p>
                  <router-link flat class="featured-link" router :to="{ name: 'system-upgrades'}">
                    LEARN MORE ABOUT HIDE-A-HOSE 
                  </router-link>
                </div>

                <div class="featured">
                  <h2 class="grey--text text--darken-2 featured-text">
                    Trade in and save on an upgraded central vac system 
                  </h2>
                  <p class="basic-text grey--text text--darken-2 ma-0 py-2">
                    Save on a new power unit and installation.
                  </p>
                  <router-link flat class="featured-link" router :to="{ name: 'trade-in'}">
                    LEARN HOW TO UPGRADE AND SAVE
                  </router-link>
                </div>

              </v-flex>
              
              <v-flex xs6 class="text-xs-center lady-box pt-4">
                <img src="../assets/new-lady-sweeps.png" class="lady" alt="lady sweeping" width="200px">
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
        intro: [],
        featured: []
      }
    },
    created(){
      db.collection('home').get()
      .then(snapshot =>{
        snapshot.forEach(doc => {
          let page = doc.data()
          page.id = doc.id
          this.intro = page.intro
          this.featured = page.featured
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
  background-image: url("../assets/banners/home-banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
div.home{
  overflow: hidden;
}
.logo{
  width: 200px;
}
.featured-link{
  color: #0055a5;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.2;
  text-decoration: none;
}
.featured{
  padding: 20px 0;
}
.featured-text{
  font-size: 23px;
  line-height: 1;
  font-weight: 500;
}
.lady{
  width: 300px;
}
.banner-content-container{
  padding-bottom: 0;
}

/* Media Queries */

/* small devices */
@media screen and (min-width: 600px){
  .featured{
    padding: 30px 0;
  }
  .featured-text{
    font-size: 30px;
  }
  .lady{
    width: 350px;
  }
}
/* Medium Devices */
@media screen and (min-width: 960px){
  .logo{
    width: 250px;
  }
  .featured-col{
    padding-top: 25px;
  }
  .featured{
    padding: 30px 0; 
  }
  .featured-text{
    font-size: 36px;
  }
  .lady{
    width: 400px;
  }
  .featured-link{
    font-size: 24px;
  }
}
/* Large Devices */
@media screen and (min-width: 1264px){
  .featured-col{
    padding-top: 50px;
  }
  .featured{
    padding: 30px 0; 
  }
  .featured-text{
    font-size: 36px;
  }
  .lady{
    width: 500px;
  }
}
/* Extra Large Devices */
@media screen and (min-width: 1450px){
  .home-banner{
    height: 760px;
  }
}
</style>

