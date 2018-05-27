<template>
    <div>
    	<nav-header></nav-header>
        <div class="container">
			<div class="row">
				<div class="left  col-md-8">
					
					<div class="con">
						<div class="tit">关于我</div>
						<div class="section">
							<dl>
								<dt><i class="fa fa-snowflake-o"></i>关于我</dt>
								<dd><i class="fa fa-mortar-board"></i>2017年6月，毕业于广西玉林师范学院，专业为软件工程</dd>
								<dd><i class="fa fa-address-card-o"></i>现工作于广州，任职web前端开发工程师</dd>
								<dd><i class="fa fa-envelope-o"></i>联系邮箱374147621@qq.com</dd>
							</dl>
						</div>
						<div class="section">
							<dl>
								<dt><i class="fa fa-snowflake-o"></i>关于博客</dt>
								<dd><i class="fa fa-hand-o-right"></i>博客主要采用vue2.0+ElementUi+Bootstrap搭建，也是学习vue的一个成果吧</dd>
								<dd><i class="fa fa-hand-o-right"></i>博客的内容是记录自己工作遇到的各种问题及解决方法，以及收藏一些大牛的经典文章，以便以后工作中遇到此类问题能及时定位解决方法。</dd>
								
							</dl>
						</div>
						<div class="section">
							<dl>
								<dt><i class="fa fa-snowflake-o"></i>GitHub账号</dt>
								<dd><i class="fa fa-github"></i><a href="https://github.com/zhoufight">我的gitHub</a></dd>
								
							</dl>
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
.tit{text-align: center;padding: 10px 0;font-size: 18px;}
.section i{padding-right: 6px;}
.section dd{padding-left: 20px;color: #999;line-height: 24px;}
.section a{text-decoration: none;}
</style>