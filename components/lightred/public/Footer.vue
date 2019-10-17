<template>
	<div class="mainFooter text-center p-3">
		<div class="py-4">
			<img src="~/assets/images/logo.png" class="img-fluid" alt="">
		</div>
		<div>
			UMKMNUSANTARA Adalah Wadah Komunitas Bagi Para Pelaku Ataupun Calon Pelaku Serta Penggiat Di Bidang Usaha Mikro Kecil dan Menengah (UMKM) di Indonesia.  Tujuannya Menciptakan UMKM Yang Sehat Dan Kuat Berstandar Nasional Dan Menyebarkan Semangat Kewirausahaan Demi Mewujudkan Indonesia Yang Sejahtera, Demokratis Dan Berkeadilan.
			Waktunya UMKM Naik Kelas !
		</div>
		<div class="d-inline-flex justify-content-center pt-4">
			<nuxt-link to="#" class="px-3 my-2 text-white border-right-white">ABOUT US</nuxt-link>
			<nuxt-link to="#" class="px-3 my-2 text-white border-right-white">VISI & MISI</nuxt-link>
			<nuxt-link to="#" class="px-3 my-2 text-white border-right-white">KONTAK</nuxt-link>
			<nuxt-link to="#" class="px-3 my-2 text-white">BANTUAN</nuxt-link>
		</div>
		<div class="py-5">
			<nuxt-link to="#">
				<img src="~/assets/images/facebook_icn.svg" class="px-4" alt="">
			</nuxt-link>
			<nuxt-link to="#">
				<img src="~/assets/images/twitter_icn.svg" class="px-4" alt="">
			</nuxt-link>
			<nuxt-link to="#">
				<img src="~/assets/images/instagram_icn.svg" class="px-4" alt="">
			</nuxt-link>
		</div>
		<div>
			Copyright @ 2019 <nuxt-link to="#" class="text-white">UMKM Nusantara</nuxt-link> ALL Right Reserved
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  head () {
  	return {
      link: [
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.public}/style.css`)
        },
        {
          rel: 'stylesheet',
          href: require(`~/assets/themes/${this.$config.theme.public}/raihan.css`)
        }
      ]
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.d-inline-flex {
	flex-wrap: wrap;
}
</style>