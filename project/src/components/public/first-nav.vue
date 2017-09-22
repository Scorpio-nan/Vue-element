<template>
	<div id="first-nav">
		<ul class="nav">
			<li v-for="(item ,i ) in datas">
				<a href="javascript:;" :class="index == i ? 'active': ''" @click="tabChange(i)">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			datas:Array
		},
		data(){
			return{
				index:0
			}
		},
		methods:{
			tabChange(i){
				this.index = i;
				this.$store.dispatch('changeCount',i)
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
			@extend .minddlewidth;
			height:100%;
			margin-left:$margin-left;
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
					padding:8px 22px;
				}
				.active{
					color: #fff;
					@include bg-img(btn-bg);
				}
			}
		}
	}
</style>