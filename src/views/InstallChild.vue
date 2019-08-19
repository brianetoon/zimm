<template>
    <div v-if="child" class="install-child">
        

        <div class="body-bkgd">
            <v-container>
                <v-layout row wrap>
                    <v-flex>
                        <v-breadcrumbs :items="child.items" divider="/" large class="font-weight-bold px-0"></v-breadcrumbs>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
import db from '@/fb'

export default {
    name: 'InstallChild',
    data(){
        return{
            child: null
        }
    },
    created(){
        let ref = db.collection('installChildren').where('slug', '==', this.$route.params.install_slug)
        ref.get().then(snapshot =>{
            snapshot.forEach(doc => {
                // console.log(doc.data())
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

</style>
