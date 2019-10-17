<template>
  <div>
    <div @click="test">{{testx}}</div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.dashboard}/style.css`)
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
      post
        .then(response => {
          if (response.isSuccess === true) {
          } else {
          }
        })
        .catch(e => {})
    }
  },
  components: {},
  props: {},
  computed: {}
}
</script>
<style>
</style>