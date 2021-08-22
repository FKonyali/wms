<template>
	<div id="app">
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
	name: 'App',
	components: {
		Header
	}
}
</script>


<style lang="sass">
	*
		margin: 0
		padding: 0
		box-sizing: border-box
		text-decoration: none
		list-style: none

	body
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif
		color: #333

	.container
		width: 960px
		max-width: 100%
		margin: 0 auto
		padding: 30px
</style>
