<template>
    <div class="tune-up-child" v-if="child">

        <v-container fluid fill-height class="tune-up-child-banner" :style="{ backgroundImage: 'url('+ getPicUrl(child.banner) +')'}">
            <v-container fill-height>
                <v-layout row wrap align-end fill-height>
                    <v-flex>
                        <h2 class="font-weight-regular grey--text text--darken-2 banner-text" 
                        v-for="(line, index) in child.title" :key="index">
                            {{ line }}
                        </h2>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>

        <div class="tune-up-child-bkgd">

            <v-container>

                <v-layout row wrap>
                    <v-flex>
                        <v-breadcrumbs :items="child.items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                    </v-flex>
                </v-layout>

                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <img src="../assets/horiz-logo.png" alt="logo" width="200px">
                        <p class="basic-text grey--text text--darken-2 py-2">{{ child.intro }}</p>
                        <img :src="getPicUrl(child.coupon)" width="100%" class="py-2">
                    </v-flex>

                    <v-flex xs12 sm6 class="right-col py-3">
                        <h2 class="grey--text text--darken-2 font-weight-bold">TUNE-UPS INCLUDE</h2>
                        <p class="basic-text grey--text text--darken-2 ma-0"
                        v-for="(tuneup, index) in child.tuneups" :key="index">
                        {{ tuneup }}</p>
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
            child: null
        }
    },
    created(){
        let ref = db.collection('tuneupChildren').where('slug', '==', this.$route.params.tuneup_slug)
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
.tune-up-child-banner{
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
}
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.tune-up-child-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.basic-text{
  font-size: 18px;
  font-weight: 500;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .tune-up-child-banner{
    height:350px;
  }
  .banner-text{
    font-size: 32px;
  }
  .tune-up-child-bkgd{
    background-image: none;
  }
}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .tune-up-child-banner{
    height: 450px;
  }
  .banner-text{
    font-size: 38px;
  }
  .tune-up-child-bkgd{
    background-image: none;
  }
  .tune-up-child .right-col{
    padding-left: 30px;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .tune-up-child-banner{
    height: 550px;
  }
  .banner-text{
    font-size: 42px;
  }
  .tune-up-child .right-col{
    padding-left: 40px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .tune-up-child-banner{
    height: 700px;
  }
  .banner-text{
    font-size: 55px;
  }
  .tune-up-child .right-col{
    padding-left: 50px;
  }
}
</style>

