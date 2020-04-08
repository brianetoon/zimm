<template>
  <div class="systems">
    
    <v-container fluid fill-height class="system-upgrades-banner">
      <v-container fill-height>
        <v-layout row wrap align-end fill-height>
          <v-flex>
            <h2 class="font-weight-regular grey--text text--darken-2 banner-text">System Upgrades</h2>
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
          <v-flex xs12  lg3>
            <img src="../assets/horiz-logo.png" alt="logo" width="200px">
          </v-flex>
          <v-flex xs12  lg9>
            <p class="basic-text grey--text text--darken-2">{{ newintro }}</p>
          </v-flex>
        </v-layout>

      <v-layout row wrap class="mt-2">

        <v-flex xs12 sm12 md6 class="my-1" v-for="(upgrade, index) in upgrades" :key="index">
            <v-card flat color="transparent" class="piece-of-shit pa-1 my-1">
              <v-layout row>
                <v-flex xs6 sm6>
                  <img
                    :src="getPicUrl(upgrade.img)"
                    width="100%"
                    contain
                  />
                </v-flex>
                <v-flex xs6 sm6 class="pa-0 pl-2" height="100%">
                  <v-layout column justify-space-between fill-height>
                    <div>
                      <h2 class="grey--text text--darken-2">{{ upgrade.name }}</h2>
                      <p class="card-text grey--text text--darken-2 mb-0">{{ upgrade.info }}</p>
                    </div>
                    <div class="mb-2">
                      <v-btn color="primary font-weight-bold ma-0">See the Video</v-btn>
                    </div>
                    
                  </v-layout>
                </v-flex>
                
              </v-layout>
            </v-card>
          </v-flex>

        <v-flex>

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
        newintro: [],
        upgrades: [],
      }
    },
    created(){
      // fetch data from the firestore
      db.collection('systems').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data(), doc.id)
          let systems = doc.data()
          systems.id = doc.id
          this.items = systems.items
          this.newintro = systems.newintro
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
  background-image: url("../assets/system-upgrades-banner.png");
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
.piece-of-shit{
  max-width: 480px;
}
.vid-btn{
  background: 
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .system-upgrades-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .systems-bkgd{
    background-image: none;
  }
  .card-text{
    font-size: 17px;
    font-weight: 500;
    line-height: 1.3em;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .system-upgrades-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
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
  .system-upgrades-banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .card-text{
    font-size: 17px;
    font-weight: 500;
    line-height: 1.3em;
  }
}
/* large devices */
@media (min-width: 1264px){
  .system-upgrades-banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .card-text{
    font-size: 18px;
    font-weight: 500;
  }
}
</style>

