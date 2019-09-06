<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="white font-weight-bold primary--text contact-button text">
            CONTACT ZIMM'S
        </v-btn>
        <v-card class="text-xs-center">
            <v-card-title class="justify-center pb-0">
                <h1 class="primary--text">Contact Zimm's</h1>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Name" prepend-icon="person" v-model="name"></v-text-field>
                    <v-text-field label="Email" prepend-icon="email" v-model="email"></v-text-field>
                    <v-text-field label="Phone" prepend-icon="phone" v-model="phone"></v-text-field>
                    <v-textarea label="Your Message" prepend-icon="edit" v-model="msg"></v-textarea>
                    <v-btn flat class="primary mx-0 mt-3 font-weight-bold" @click="submit">Send message</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            email: '',
            phone: '',
            msg: ''
        }
    },
    methods: {
        submit() {
            console.log("submitted!")
        }
    }
}
</script>

<style>
.contact-button{
    width: 250px;
}
.text {
    font-size: 16px;
}

/* extra small devices */
@media (max-width: 599px){
    .contact-button{
        width: 230px;
    }
}
/* medium devices and up */
@media (min-width: 960px){
    .text{
        font-size: 18px;
    }
}
</style>
