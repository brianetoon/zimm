<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
/* General Styles */
#app{
  font-family: freight-sans-pro, sans-serif;
  font-style: normal;
  background: #fff;
}
.banner{
  height: 350px;
}
.banner-text{
  font-size: 32px;
}
.sub-head{
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -1px;
  line-height: 1;
}
.sub-head-bold{
  line-height: 1.2;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
}
.point{
  margin: 0;
}
.body-bkgd{
  background: white;
}
.v-breadcrumbs{
  padding-top: 0;
}


/* Media Queries */

/* Small Devices */
@media screen and (min-width: 600px){
  .banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
}
/* Medium Devices */
@media screen and (min-width: 960px){
  .banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .body-bkgd{
    background-image: url("./assets/blue-dots.png");
    background-position: center;
    background-size: 1200px;
    background-repeat: no-repeat;
  }
}
/* Large Devices */
@media screen and (min-width: 1264px){
  .banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .sub-head{
    font-size: 40px;
  }
}
/* Extra Large Devices */
@media screen and (min-width: 1460px){
  .banner{
    height: 760px;
  }
  div.container div.container{
    max-width: 1185px;
  }
div.body-bkgd div.container{
    max-width: 1185px;
  }
}
</style>
