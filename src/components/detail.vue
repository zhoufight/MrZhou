<template>
    <div>
    	<nav-header></nav-header>
        <div class="container">
			<div class="row">
				<div class="left  col-md-8">
					<div class="con">
						<div class="title">如何获取元素相对窗口位置</div>
						<div class="date">发表于2018-5-27</div>
						<div class="article">
							<p>JS 获取元素的 offsetTop, offsetLeft 等属性，可以通过 offsetTop 和 offsetLeft 属性获取元素相对窗口的位置，但 offsetTop 和 offsetLeft 属性都是相对于父元素定位的，而通常需要获取位置的元素都不是在最外层，所以需要遍历上级元素的 offset，递归实现如下。</p>
						</div>

					</div>
				</div>
				<div class="right col-md-4">
					<side-nav></side-nav>
				</div>
			</div>
		</div>
		<common-footer></common-footer>
    </div>
</template>

<script>
  	import header from './header'
    import commonFooter from './footer'
	import sideNav from './sideNav'

    export default {
         data() {
            return {
				
            }
        },
        components: {
            navHeader: header,
            commonFooter: commonFooter,
            sideNav: sideNav
		},
		created(){
			
		},
		mounted(){

		},
		methods:{
			
		}
    }
</script>

<style scoped>
.con{background-color: #fff;padding:  20px 20px;min-height: 640px;}
.title{text-align: center;font-size: 18px; padding: 10px 0;}
.date{font-size: 14px;color: #999;text-align: center;padding: 10px 0;}
.article{}
</style>