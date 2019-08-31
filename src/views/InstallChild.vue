<template>
    <div v-if="child" class="install-child">
        
        <v-container fluid fill-height class="install-child-banner" :style="{ backgroundImage: 'url('+ getPicUrl(child.banner) +')'}">
            <v-container fill-height>
                <v-layout row wrap align-end fill-height>
                    <v-flex>
                        <h2 class="font-weight-regular grey--text text--darken-2 banner-text">{{ child.bannerText}}</h2>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>

        <div class="inst-child-bkgd">
            <v-container>
                
                <v-layout row wrap>
                    <v-flex>
                        <v-breadcrumbs :items="child.items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <img class="logo" src="../assets/horiz-logo.png" alt="logo" width="200px">
                        <p class="basic-text grey--text text--darken-2" v-for="(para, index) in child.intro" :key="index">{{ para }}</p>
                        <div class="hidden-sm-and-down">
                            <p class="basic-text grey--text text--darken-2 font-weight-bold" v-if="child.boldText">{{ child.boldText }}</p>
                            <h2 class="grey--text text--darken-2 font-weight-bold" v-if="child.subhead">{{ child.subhead }}</h2>
                            <p class="point basic-text grey--text text--darken-2" v-for="point in child.points" :key="point">{{ point }}</p>
                        </div>
                    </v-flex>

                    <v-flex xs12 md6 class="right-col">
                        <img :src="getPicUrl(child.bodyImg)" width="100%">
                        <div class="hidden-md-and-up">
                            <p class="basic-text grey--text text--darken-2 font-weight-bold" v-if="child.boldText">{{ child.boldText }}</p>
                            <h2 class="grey--text text--darken-2 font-weight-bold" v-if="child.subhead">{{ child.subhead }}</h2>
                            <p class="point basic-text grey--text text--darken-2" v-for="point in child.points" :key="point">{{ point }}</p>
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
    name: 'install-child',
    data(){
        return{
            child: null
        }
    },
    created(){
        let ref = db.collection('installChildren').where('slug', '==', this.$route.params.install_slug)
        ref.get().then(snapshot =>{
            snapshot.forEach(doc => {
                this.child = doc.data()
                this.child.id = doc.id
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
.install-child-banner{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.install-child .banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.inst-child-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
}
.point{
  margin: 0;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .install-child-banner{
    height:350px;
  }
  .install-child .banner-text{
    font-size: 32px;
  }
  .inst-child-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .install-child-banner{
    height: 450px;
  }
  .install-child .banner-text{
    font-size: 38px;
  }
  .inst-child-bkgd{
    background-image: none;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .install-child-banner{
    height: 550px;
  }
  .install-child .banner-text{
    font-size: 42px;
  }
  .right-col{
    padding-left: 20px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .install-child-banner{
    height: 700px;
  }
  .install-child .banner-text{
    font-size: 55px;
  }
  .right-col{
    padding-left: 20px;
  }
}
</style>
