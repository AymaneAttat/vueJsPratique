import { createI18n } from 'vue-i18n'


const numberFormats = {
  en: {
    currency: {
      style: "currency",
      currency: 'EUR'
    }
  },
  es: {
    currency: {
      style: "currency",
      currency: 'EUR',
      currencyDisplay: 'code'
    }
  },
  fr: {
    currency: {
      style: "currency",
      currency: 'EUR'
    }
  },
  de: {
    currency: {
      style: "currency",
      currency: 'EUR',
      currencyDisplay: 'name'
    }
  }
}

const setDateTimeFormat = {
  short: {
    //   year: "2-digit",
    //   month: "short",
    //   day: "2-digit"
    // }
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    long: {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric"
    }
};

const datetimeFormats = {
  en: setDateTimeFormat,
  es: setDateTimeFormat,
  fr: setDateTimeFormat,
  de: setDateTimeFormat
  
};

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

export default createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
  datetimeFormats,
  numberFormats
})
