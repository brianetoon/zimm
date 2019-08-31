<template>
  <div class="about">
    <v-container fluid fill-height class="grey lighten-4 banner">

        <!-- <v-layout row wrap align-center>
            <v-flex class="text-xs-center">
                <v-btn>test</v-btn>
            </v-flex>
        </v-layout> -->

        <!-- <v-layout row wrap align-content-space-between>
            <v-flex xs12 md6>
            <v-btn outline block class="primary">1</v-btn>
            </v-flex>
            <v-flex xs4 md2>
            <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
            <v-btn outline block class="primary">2</v-btn>
            </v-flex>
            <v-flex xs4 md2>
            <v-btn outline block class="primary">2</v-btn>
            </v-flex>
        </v-layout> -->

        <!-- <v-layout row wrap align-content-end>
            <v-flex xs4 md3>
            <v-btn outline block class="success">1</v-btn>
            </v-flex>
            <v-flex xs4 md3>
            <v-btn outline block class="success">2</v-btn>
            </v-flex>
        </v-layout> -->

        <v-layout row wrap> 

          <v-flex xs5>
            <v-card>
              <v-layout row>
                <v-flex xs4>
                  <div class="text-xs-center">
                    <img class="unit" src="../assets/gs-135.png">
                  </div>
                </v-flex>
                <v-flex xs8>
                  <v-card-title primary-title>
                    <div>
                      <h2>CompactvGS 133</h2>
                      <p>blah blah blah</p>
                      <p>blah blah blah</p>
                      <p>blah blah blah</p>
                      <p>blah blah blah</p>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

        </v-layout>


    </v-container>
  </div>
</template>

<script>
 

  export default {

  }
</script>

<style>
.unit{
  width: 100%;
  max-width: 120px;
}

</style>

