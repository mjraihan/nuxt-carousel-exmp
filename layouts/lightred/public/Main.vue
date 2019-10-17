<template>
  <div>
    <div @click="test">{{testx}}</div>
    <nuxt />
    <mainFooter />
  </div>
</template>
<script>
import Config from '~/Config.js'
import mainFooter from '~/components/lightred/public/Footer.vue'
export default {
  name: 'Main',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.public}/style.css`)
        },
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.public}/ega.css`)
        },
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.public}/raihan.css`)
        }
      ]
    }
  },
  data() {
    return {
      testx: this.$config
    }
  },

  methods: {
    test() {
      let post = this.lib().ajax.fetch(
        'POST',
        `${this.$config.apiBaseUrl}/v1/customer/forgot-password`
      )
      postRegisterLib
        .then(response => {
          console.log(response)
          if (response.isSuccess === true) {
          } else {
          }
        })
        .catch(e => {})
    }
  },
  components: {
    mainFooter
  },
  props: {},
  computed: {}
}
</script>
<style>
</style>