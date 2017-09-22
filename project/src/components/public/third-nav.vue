<template>
	<div id="third-nav">
		<ul class="child-nav">
			<li v-for="(item,i) in datas">
				<a href="javascript:;" :class="index == i ? 'active':''" @click="tabIndex(i)">{{item}}</a>
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
			return {
				index:0
			}
		},
		methods:{
			tabIndex(index){
				this.index = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/global.scss';
	#third-nav{
		height: 40px;
		background: #e9eef5;
		.child-nav{
			height: 100%;
			margin-left: $margin-left;
			@extend .minddlewidth;
			@extend .clerfix;
			li{
				float: left;
				padding:5px;
				a{
					font-size:13px;
					color: #333;
					display: inline-block;
					vertical-align: middle;
					padding:6px 10px;
					border-radius: 4px;
					&:hover{
						border: 1px solid #FF0000;
						padding:5px 9px;
						color: #f00;
					}
				}
				.active{
					color: #fff;
					@include nav-linner(rgb(255,0,0),rgb(195,0,17),'#ff0000','#c30011');
					&:hover{
						color: #fff;
					}
				}
			}
		}
	}
</style>