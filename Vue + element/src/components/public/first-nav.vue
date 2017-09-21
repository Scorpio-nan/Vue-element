<template>
	<div id="first-nav">
		<ul class="nav">
			<li v-for="(item ,i ) in datas">
				<a href="javascript:;" :class="index == i ? 'active': ''">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			datas:Array
		},
		data(){
			return{
				index:0
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import 'static/css/global.scss';
	$lin-height:40px;
	#first-nav{
		height: $lin-height;
		background: #01133b;
		.nav{
			li{
				float: left;
				line-height:$lin-height;
				@extend .clerfix;
				a{
					&:hover{
						color:#fff;
					}
					font-size:16px;
					color: #bfbfbf;
					padding:9px 22px;
				}
				.active{
					color: #fff;
					background: #f00;
					box-shadow: inset 0 0 10px 25px rgba(205,0,14,1);
				}
			}
		}
	}
</style>