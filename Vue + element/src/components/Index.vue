<template>
	<div id="Index">
		<div class="container">
			<FirstNav :datas = "topnav"></FirstNav>
		</div>
		<div id="footer">
			
		</div>
	</div>
</template>

<script>
	import FirstNav from './public/first-nav.vue';
	export default {
		components: {
			FirstNav
		},
		data() {
			return {
				topnav:['时时彩','pk10','快乐十分','十一选五','快8','快3']
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	@import 'static/css/global.scss';
	$footer-height:198px;
	#Index {
		width: 100%;
		height: 100%;
		.container {
			height: auto;
			min-height: 100%;
			.main{
				padding-bottom: $footer-height;
			}
		}
		#footer{
			height: $footer-height;
			background: #282828;
			margin-top: -$footer-height;
			position: relative;
			clear: both;
		}
	}
</style>