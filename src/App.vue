<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/translate">Translate</router-link> |
    <router-link to="/translateI18n">Translate with I18n</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { onMounted, onUpdated } from 'vue';

export default {
  setup(){
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    });

    // onUpdated(() => {
    //   console.log('One Post Mounted')
    //   const local = localStorage.getItem("locale");
    //   if(local){
    //     locale.value = local;
    //   }
    // });


    return {t, locale}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
