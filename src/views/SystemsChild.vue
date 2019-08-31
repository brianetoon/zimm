<template>
  <div v-if="child" class="systems-child">
    <div class="systems-child-bkgd">

        <v-container>
            <v-layout row wrap>
                <v-flex>
                    <v-breadcrumbs :items="child.items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="pt-3">
                <v-flex xs12>
                    <h2 class="font-weight-regular grey--text text--darken-2 banner-text">{{ child.title }}</h2>
                    <img src="../assets/cv-logo.png" alt="cv-logo" class="cv-logo py-4">
                </v-flex>
            </v-layout>

            <!-- Cyclo Vac Units -->

            <v-layout row wrap v-for="(type, index) in units" :key="index" class="py-3">
                <v-flex xs12>
                    <h2 class="font-weight-regular grey--text text--darken-2 pb-2 class-head">{{ type.class }}</h2>
                    <p class="grey--text text--darken-2 basic-text">{{ type.blurb }}</p>
                </v-flex>

                <v-flex xs12 sm12 md6 v-for="(item, index) in type.items" :key="index">
                    <v-card flat class="transparent py-3">
                        <v-layout row>
                            <v-flex xs4 class="text-xs-center">
                                <img :src="getPicUrl(item.img)" width="100px">
                            </v-flex>
                            <v-flex xs8 class="pl-4 bullet-section">
                                <v-card-title class="py-0">
                                    <h2 class="grey--text text--darken-2">{{ item.title }}</h2>
                                </v-card-title>
                                <v-card-text class="py-0">
                                    <ul>
                                        <li v-for="(bullet, index) in item.bullets" :key="index" 
                                            class="grey--text text--darken-2 basic-text bullet">
                                            {{ bullet }}
                                        </li>
                                    </ul>
                                </v-card-text>
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
    name: 'systems-child',
    data(){
        return{
            child: null,
            units: []
        }
    },
    created(){
        let ref = db.collection('systemsChildren').where('slug', '==', this.$route.params.systems_slug)
        ref.get().then(snapshot =>{
            snapshot.forEach(doc => {
                this.child = doc.data()
                this.child.id = doc.id
                this.units = this.child.units
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
.class-head, .banner-text{
    letter-spacing: -1.5px;
    line-height: 1;
}
.blurb, .bullet{
    line-height: 1.1;
}
.systems-child-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  /* background-size: cover; */
  background-repeat: no-repeat;
}
/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .banner-text{
    font-size: 32px;
  }
  .class-head{
      font-size: 32px;
  }
  .systems-child .cv-logo{
    width: 225px;
  }
  .systems-child-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .banner-text{
    font-size: 38px;
  }
  .class-head{
      font-size: 32px;
  }
  .systems-child .cv-logo{
    width: 250px;
  }
  .systems-child-bkgd{
    background-image: none;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .banner-text{
    font-size: 42px;
  }
  .class-head{
      font-size: 36px;
  }
  .systems-child .cv-logo{
    width: 250px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .banner-text{
    font-size: 55px;
  }
  .class-head{
      font-size: 36px;
  }
  .systems-child .cv-logo{
    width: 300px;
  }
}
</style>

