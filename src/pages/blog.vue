<template>
	<section class="container">
		<div>
			<h1 class="title">
				Blog
			</h1>
			<p class="render">
				Rendered on {{ renderSource }}
			</p>
			<ul>
				<li v-for="post in posts" :key="post.id">
					{{ post.title }}
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'

	export default {
		async asyncData(context) {
			console.log(context.route.query)
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			const posts = response.data
			console.log(posts)
			return {
				posts: posts,
				renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
			}
		}
	}

</script>

<style>
ul>li {
	list-style-type: none;
	padding-bottom: 1rem;
}
.render {
	text-align: center;
	font-size: 2rem;
	margin-bottom: 2rem;
}
</style>
