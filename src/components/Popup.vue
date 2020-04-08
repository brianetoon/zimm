<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="white font-weight-bold primary--text contact-button text">
            CONTACT ZIMM'S
        </v-btn>
        <v-card class="text-xs-center">
            <v-card-title class="justify-center pb-0">
                <h1 class="primary--text font-weight-regular">Contact Zimm's</h1>
            </v-card-title>
            <!-- dialog content -->
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Name" prepend-icon="person" v-model="form.name" :rules="nameRules"></v-text-field>
                    <v-text-field label="Email" prepend-icon="email" v-model="form.email" :rules="emailRules"></v-text-field>
                    <v-text-field label="Phone" v-mask="mask" prepend-icon="phone" v-model="form.phone" :rules="phoneRules"></v-text-field>
                    <v-textarea label="Your Message" prepend-icon="edit" v-model="form.message" :rules="messageRules"></v-textarea>
                    <v-btn flat class="primary mx-0 mt-3 submit-button" :loading="submitting" @click="submit">Send message</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
import { mask } from 'vue-the-mask'

export default {
    directives: {
        mask
    },
    data(){
        return{
            form:{
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            mask: '(###) ###-####',
            nameRules:[
                v => !!v || 'Your name is required',
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid',
            ],
            phoneRules:[
                v => !!v || 'Phone number is required',
                v => v.length == 14 || 'Phone number must be valid'
            ],
            messageRules:[
                v => !!v || 'Your message is required',
                v => v.length >= 20 || 'Please enter a longer message'
            ],
            submitting: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                this.submitting = true;
                axios.post('mail.php', this.form).then(() => {
                    this.submitting = false;
                    this.dialog = false;
                    this.$emit('messageSent')
                })
            }
        }
    }
}
</script>

<style>
.contact-button{
    width: 250px;
}
.submit-button{
    font-weight: 600;
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
