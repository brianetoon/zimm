<template>
    <div class="footer">

        <v-snackbar v-model="snackbar" :timeout="4000" top color="primary" class="pt-4">
            <span class="text">Your message has been sent!</span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-container>
            <v-layout row wrap >
                <v-flex class="border pb-1" lg3 v-for="(contact, index) in contacts" :key="index">
                    <div class="wrapper">
                        <v-icon class="white--text">{{ contact.icon }}</v-icon>
                    </div> 
                    <div class="white--text wrapper font-weight-bold px-2">
                        <p class="ma-0 text">{{ contact.line1 }}</p>
                        <p class="ma-0 text">{{ contact.line2 }}</p>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row justify-space-between align-center class="pt-3">
                <v-flex>
                    <Popup @messageSent="snackbar = true"/>
                    <!-- <v-btn flat large class="white font-weight-bold light-blue--text text--darken-3 contact-button text">CONTACT ZIMM'S</v-btn> -->
                    <span  class="text white--text font-weight-bold pl-4 hidden-sm-and-down">Learn more about Zimm’s Central Vacuum Systems</span>
                </v-flex>
                <v-flex xs3 sm2 md1 class="logo">
                    <img src="../assets/round-logo.png" alt="logo" height="75" width="75" />
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Popup from './Popup'

export default {
    components: { Popup },
    data(){
        return{
            contacts: [
               {icon: 'phone', line1: 'Phone', line2: '248-207-8576'},
               {icon: 'alternate_email', line1: 'Email', line2: 'dan@zimmscentralvac.com'},
               {icon: 'email', line1: 'PO Box 776', line2: 'Farmington, Michigan 48332'},
            ],
            snackbar: false
        }
    }
}
</script>

<style scoped>
.footer{
    background-image: url("../assets/nav-gradient.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.wrapper{
    display: inline-block;
}
.logo{
    width: 100px;
}
.text {
    font-size: 16px;
}

/* medium devices and up */
@media (min-width: 960px){
    .text{
        font-size: 18px;
    }
}
</style>
