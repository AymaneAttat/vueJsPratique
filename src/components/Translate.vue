<template lang="">
    <div>
        <button @click="activeLocale='en'" class="btn btn-sm btn-success">English</button>
        <button @click="activeLocale='es'" class="btn btn-sm btn-success">Spanish</button>
    </div>
    <h2>{{ localised('hello') }}</h2>
    <h2>{{ localised('goodbye') }}</h2>

    <hr>
    <HelloWorld />
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            activeLocale: 'en',
            messages: {
                en: {
                    hello: 'Hello',
                    goodbye: 'Goodbye'
                },
                es: {
                    hello: 'Hola',
                    goodbye: 'Adios'
                }
            }
        }
    },
    methods:{
        localised(key){
            return this.messages[this.activeLocale][key];
        }
    }
}
</script>
<style>
    
</style>