<template>
	<section class="container">
		<div>
			<app-logo/>
			<h1 class="title">
				Vue.js Vienna
			</h1>
			<h2 class="subtitle">
				A Nuxt.js project
			</h2>
			<div class="links">
				<nuxt-link to="about" class="button--green">About</nuxt-link>
				<nuxt-link to="blog" class="button--green">Blog</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
	import AppLogo from '~/components/AppLogo.vue'

	export default {
		components: {
			AppLogo
		}
	}

</script>

<style>


</style>
