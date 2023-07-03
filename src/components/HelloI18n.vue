<template>
  <p>{{ t('hello', {name: "Aymane"}) }}</p>
  <p>{{ t('message') }}</p>
  <p>{{ t('goodbye') }}</p>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloI18n',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    return { t }
  }
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "es": {
    "hello": "Hola"
  },
}
</i18n>
