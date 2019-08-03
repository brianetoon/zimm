<template>
    <div class="footer">
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
                    <v-btn flat large class="white font-weight-bold light-blue--text text--darken-3 contact-button" width="300px">CONTACT ZIMM'S</v-btn>
                    <span  class="text white--text font-weight-bold pl-4 hidden-sm-and-down">Learn more about Zimm’s Central Vacuum Systems</span>
                </v-flex>
                <v-flex xs3 sm2 md1 class="logo">
                    <v-img src="round-logo.png" height="75" width="75"></v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            contacts: [
               {icon: 'phone', line1: 'Office', line2: '866-829-0021'},
               {icon: 'alternate_email', line1: 'email', line2: 'info@zimmscentralvac.com'},
               {icon: 'email', line1: 'PO Box 776', line2: 'Farmington, Michigan 48332'},
            ]
        }
    }
}
</script>

<style>
.footer{
    background-image: url("../assets/nav-gradient.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.wrapper{
    display: inline-block;
}
.contact-button{
    width: 250px;
}
.logo{
    width: 100px;
}
@media (min-width: 600px){
    .text{
        font-size: 16px;
    }
}
</style>
