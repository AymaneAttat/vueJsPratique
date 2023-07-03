<template>
  <div>
    <p>{{ t("hello") }}</p>
    <p>{{ t("message", {name}) }}</p>
    <p>{{ t("goodbye") }}</p>
    <p>{{ t("car", 2) }}</p>
    <p>{{ t("person", 5) }}</p>

    <p>{{ d(new Date(), "short") }}</p>
    <p>{{ d(new Date(), "long") }}</p>

    <p>{{ n(100, "currency") }}</p>

    <i18n-n tag="span" :value="4000.45" format="currency">
      <template #currency="slotProps">
        <span style="color: green">{{ slotProps.currency }}</span>
      </template>
      <template #integer="slotProps">
        <span style="font-weight: bold; color: green;">{{ slotProps.integer }}</span>
      </template>
      <template #fraction="slotProps">
        <span style="font-size: small">{{ slotProps.fraction }}</span>
      </template>
    </i18n-n>

    <i18n-t keypath="terms" tag="p">
      <template v-slot:termsURL>
        <a href="/url" target="_blank">{{ t("termsURL") }}</a>
      </template>
    </i18n-t>
    <button @click="setLocale('en')" class="btn btn-sm btn-primary">English</button>
    <button @click="setLocale('es')" class="btn btn-sm btn-success">Spanish</button>
    <button @click="setLocale('de')" class="btn btn-sm btn-info">German</button>
    <button @click="setLocale('fr')" class="btn btn-sm btn-info">français</button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { onMounted, onUpdated } from 'vue';

export default {
  name: 'HelloWorld',
  setup() {
    const { t, d, n, locale } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    });

    const name = "Aymane";

    const setLocale = function(local){
      locale.value = local;
      localStorage.setItem("locale", local)
    }

    onMounted(() => {
      console.log('One Post Mounted')
      const local = localStorage.getItem("locale");
      if(local){
        locale.value = local;
      }else if(navigator.language){
        //we can check what the users preferred language is and serve the page in their preferred language (navigator.language)
        locale.value = navigator.language.substring(0, 2);
        localStorage.setItem("locale", locale.value)
      }
    });

    return { t, d, n, locale, name, setLocale }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
