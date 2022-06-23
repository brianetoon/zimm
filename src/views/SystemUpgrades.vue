<template>
  <div class="systems">
    
    <v-container fluid fill-height class="system-upgrades-banner banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">
              Add power and convenience <br>with system upgrades
            </h2>
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
          <v-flex xs12 md4 lg3 xl2>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
          </v-flex>
          <v-flex xs12 md8 lg9 xl10>
            <p class="basic-text grey--text text--darken-2" v-for="(para, index) in intro" :key="index">
              {{ para }}
            </p>
          </v-flex>
        </v-layout>

      <v-layout row wrap class="mt-2">

        <v-flex xs12 sm12 md6 class="my-1" v-for="(upgrade, index) in upgrades" :key="index">
            <v-card flat color="transparent" class="upgrade-card pa-1 my-1">
              <v-layout row>
                <v-flex xs6 sm6>
                  <img
                    :src="getPicUrl(upgrade.img)"
                    width="100%"
                    contain
                  />
                </v-flex>
                <v-flex xs6 sm6 class="pa-0 pl-3" height="100%">
                  <v-layout column justify-space-between fill-height>
                    <div>
                      <h2 class="grey--text text--darken-2">{{ upgrade.name }}</h2>
                      <p class="basic-text grey--text text--darken-2 mb-0">{{ upgrade.info }}</p>
                    </div>
                    <div class="mb-2">
                      <a :href="upgrade.video" target="_blank">
                        <v-btn color="primary" class="font-weight-bold ma-0 mt-3">
                          <img class="mr-2" src="https://img.icons8.com/material/24/ffffff/youtube-play--v1.png"/>
                          See the Video
                        </v-btn>
                      </a>
                    </div>
                    
                  </v-layout>
                </v-flex>
                
              </v-layout>
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
        upgrades: [],
      }
    },
    created(){
      db.collection('systems').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let systems = doc.data()
          systems.id = doc.id
          this.items = systems.items
          this.intro = systems.intro
          this.upgrades = systems.upgrades
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
.system-upgrades-banner{
  background-image: url("../assets/banners/system-upgrades-banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
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
.upgrade-card{
  max-width: 480px;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .systems-bkgd{
    background-image: none;
  }
  .card-text{
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .systems-bkgd{
    background-image: none;
  }
  .card-text{
    font-size: 18px;
    font-weight: 500;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .card-text{
    font-size: 17px;
    font-weight: 500;
    line-height: 1.3em;
  }
}
/* large devices */
@media (min-width: 1264px){
  .card-text{
    font-size: 18px;
    font-weight: 500;
  }
  .upgrade-card{
    max-width: 500px;
  }
}
</style>

