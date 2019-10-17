<template>
  <div class="sldrcrsl">
    <no-ssr>
      <carousel
        :autoplay="true"
        :perPage="2.3"
        :loop="true"
        :navigationEnabled="true"
        :navigationClickTargetSize="20"
        :paginationSize="20"
      >
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
        <slide>Slide {{ msg }}</slide>
      </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'about',
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
      msg: 'about'
    }
  },
  components: {},
  methods: {}
}
</script>

<style>
</style>