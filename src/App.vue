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
#app{
  font-family: freight-sans-pro, sans-serif;
  font-style: normal;
}
</style>
