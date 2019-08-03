<template>
  <div class="home white">
    <v-container fluid fill-height class="home-banner">
      <v-layout row wrap align-content-space-between>
        <v-flex xs6>
          <img class="logo" src="../assets/horiz-logo.png" alt="">
        </v-flex>
        <v-flex xs7>
          <h2 class="hidden-sm-and-down font-weight-light grey--text text--darken-2 banner-text">Discover central vacuum <br>for a cleaner, healthier home</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>

      <v-layout row wrap class="hidden-md-and-up">
        <v-flex xs12 class="pa-2">
          <h2 class="font-weight-light grey--text text--darken-2 body-text">Discover central vacuum for a cleaner, healthier home</h2>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center class="pt-3">
        <v-flex xs12 sm6 md4 class="pa-2" v-for="card in cards" :key="card.id">
          <v-card class="text-xs-center">
            <img :src="card.img" width="100%">
            <v-card-text>
              <div class="title grey--text text--darken-2"> {{ card.text1 }} <br class="hidden-xs-only"> {{ card.text2 }} </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      
      <v-layout row wrap class="my-2">
        <v-flex xs12 class="pa-2">
          <h2 class="font-weight-light grey--text text--darken-2 body-text">Zimm's - the best in central vacuum installation and service</h2>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
 

  export default {
    data(){
      return{
        cards:[
          { img: '/pup.png', text1: 'Five times the power of', text2: 'a traditional vacuum', id: '1'},
          { img: '/ltweight.png', text1: 'Lightweight and', text2: 'easy to handle', id: '2'},
          { img: '/family.png', text1: 'Dust-free for a', text2: 'healthier home', id: '3'},
          { img: '/man-van.png', text1: 'Second generation', text2: 'family-owned business', id: '4'},
          { img: '/service.png', text1: 'Full-service installation,', text2: 'repair and accessories', id: '5'},
          { img: '/30-year-nozzle.png', text1: '30 years experience in', text2: 'central vacuum service', id: '6'},
        ]
      }
    }
  }
</script>

<style>
.home-banner{
  background-image: url("../assets/home-banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .home-banner{
    height:350px;
  }
  .logo{
    width: 160px;
  }
  .body-text{
    font-size: 30px;
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
  .body-text{
    font-size: 32px;
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
    font-size: 30px;
    padding-left: 150px;
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
    font-size: 35px;
    padding-left: 230px;
  }
  .body-text{
    font-size: 35px;
  }
}
</style>

