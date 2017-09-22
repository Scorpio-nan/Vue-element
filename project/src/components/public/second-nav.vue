<template>
	<div id="second-nav">
		<ul class="nav-child">
			<li v-for="(item , i ) in datas">
				<a href="javascript:;" :class="active == i ? 'active' : ''" @click="tabActive(i)">
					{{item.data.PARA_NAME}}
					<div class="out-line">
						<p class="online"></p>
					</div>
					<span>{{overtime}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			datas:Array,
			index:Number,
		},
		data(){
			return {
				active:0,
				overtime:'04:30'
			}
		},
		methods:{
			tabActive(index){
				this.active = index;
			}
		},
		watch:{
			index:function(val){
				console.log(val);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'static/css/global.scss';
	#second-nav{
		height: 70px;
		@include nav-linner(rgb(21,49,164),rgb(12,27,91),'#1531a4','#0c1b5b');
		.nav-child{
			@extend .minddlewidth;
			height: 100%;
			@extend .clerfix;
			margin-left:$margin-left;
			overflow:hidden;
			li{
				float: left;
				height: 100%;
				a{
					text-align: center;
					height: 100%;
					display: inline-block;
					padding: 14px 16px;
					color: #f5f5f5;
					font-size: 14px;
					box-sizing: border-box;
					span{
						display:inline-block;
					}
					&:hover{
						border-bottom: 4px solid #f00;
					}
				}
				.active{
					@include nav-linner(rgb(255,0,0),rgb(184,0,20),'#ff0000','#b80014');
					color: #fff;
					.online{
						height: 1px;
						@include line-linner(rgb(255,255,255),rgb(201,210,223),'#2e4399','#2e4399');
					}
				}
				
			}
			.out-line{
				padding: 3px 0;
				.online{
					height: 1px;
					@include line-linner(rgb(46,67,153),rgb(149,160,203),'#2e4399','#2e4399');
				}
			}
		}
	}
</style>