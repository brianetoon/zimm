<template>
    <div class="accessory-child accessory-child-bkgd" v-if="child">
        <!-- <v-container>

            <v-layout row wrap>
                <v-flex xs12>
                    <v-breadcrumbs :items="child.items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                    <h2 class="font-weight-regular grey--text text--darken-2 banner-text">{{ child.title }}</h2>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="pt-3">
                <v-flex xs12 md8>
                    
                    <v-layout row wrap class="py-4">
                        <v-flex xs6>
                            <img src="../assets/horiz-logo.png" alt="logo" class="zimm-logo" width="200px">
                        </v-flex>
                        <v-flex xs6 hidden-xs-only class="py-4 text-xs-center" v-if="child.hahLogo">
                            <img src="../assets/hah-logo.png" alt="logo" class="hah-logo" width="225px">
                        </v-flex>
                        <v-flex>
                            <p class="basic-text grey--text text--darken-2" v-for="(para, index) in child.intro" :key="index">{{ para }}</p>
                        </v-flex>
                        <v-flex xs12 hidden-sm-and-up class="pt-3 text-xs-center" v-if="child.hahLogo">
                            <img src="../assets/hah-logo.png" alt="logo" class="hah-logo" width="225px">
                        </v-flex>
                        <v-flex class="py-3 text-xs-center" v-if="child.video">
                            <p class="basic-text grey--text text--darken-2 font-weight-bold">Watch a quick Hide-A-Hose demonstration!</p>
                            <video width="100%" controls>
                                <source src="../assets/hah.mp4" type="video/mp4">
                            </video>
                        </v-flex>
                    </v-layout>

                </v-flex>

                <v-flex xs12 md4 class="right-col">
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md12 class="img1-padding">
                            <img :src="getPicUrl(child.img1)" width="100%" v-if="child.img1">
                            <p class="basic-text grey--text text--darken-2 font-weight-bold" v-if="child.caption">{{ child.caption }}</p>
                        </v-flex>
                        <v-flex xs12 sm6 md12 hidden-xs-only class="img2-padding">
                            <img :src="getPicUrl(child.img2)" width="100%" v-if="child.img2">
                        </v-flex>
                    </v-layout>
                
                </v-flex>

            </v-layout>

            <div v-if="child.products">
                
                <v-layout row wrap class="py-4" v-for="(product, index) in child.products" :key="index">
                    <v-flex xs12>
                        <h2 class="product-subhead">{{ product.type }}</h2>
                    </v-flex>
                    <v-flex xs6 sm6 md4 lg3 v-for="(item, index) in product.items" :key="index">
                        <v-card flat class="transparent py-2">
                            <img :src="getPicUrl(item.img)" width="100%">
                            <v-card-text class="py-0">
                                <p class="price-info ma-0">{{ item.text }}</p>
                                <p class="price-info ma-0" v-if="item.text2">{{ item.text2}}</p>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                </v-layout>

            </div>

        </v-container> -->

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
        let ref = db.collection('accessoryChildren')
        // .where('slug', '==', this.$route.params.accessory_slug)
        .where('slug', '==', 'shop-accessories')
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
.banner-text{
  letter-spacing: -1.5px;
  line-height: 1;
}
.accessory-child-bkgd{
  background-image: url("../assets/blue-dots.png");
  background-position: top;
  background-repeat: no-repeat;
}
.product-subhead{
    color: #0055a5;
    font-size: 28px;
}
.price-info{
    color: #0055a5;
    font-weight: 500;
    font-size: 16px;
}

/* Media Queries */

/* extra small devices */
@media (max-width: 599px){
  .accessory-child .banner-text{
    font-size: 32px;
  }
  .accessory-child-bkgd{
    background-image: none;
  }

}
/* small devices */
@media (min-width: 600px) and (max-width: 959px){
  .accessory-child .banner-text{
    font-size: 38px;
  }
  .accessory-child-bkgd{
    background-image: none;
  }
  .img1-padding{
      padding-right: 10px;
  }
  .img2-padding{
      padding-left: 10px;
  }
}
/* medium devices */
@media (min-width: 960px) and (max-width: 1263px){
  .accessory-child .banner-text{
    font-size: 42px;
  }
  .right-col{
    padding-left: 20px;
  }
}
/* large devices */
@media (min-width: 1264px){
  .accessory-child .banner-text{
    font-size: 55px;
  }
  .right-col{
    padding-left: 20px;
  }
}
</style>