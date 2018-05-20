<template>
	<div class="">
		<nav-header></nav-header>
		<div class="container">
			<div class="row">
				<div class="left  col-md-8">
					<ul class="list">
						<li class="clearfix bx" v-for="(item,index) in listData" :key="item.articelId">
							<div class="list-tit"><span class="tit-icon">web技术<i class="glyphicon glyphicon-triangle-right"></i></span><span>{{item.title}}</span></div>
							<span class="push">发表于{{item.pushTime}}</span>
							<div class="list-con fx">
								<div class="icon"><img :src="item.imgPath" alt=""></div>
								<div class="subtit">
									<p>{{item.subTitle}}</p>
								</div>

							</div>
							<div class="view">
								<router-link to="">阅读全文</router-link>
								
							</div>
							
						</li>
					</ul>
					<div class="page-div">
						<el-pagination
							background
							@current-change="pageFun"
							layout="prev, pager, next"
							:total="20">
						</el-pagination>
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
        name: 'index',
        data() {
            return {
				listData:[
					{"articleId":"11","imgPath":require("./1.jpg"),"title":"vue2.0从安装到打包发布、Stylus安装","pushTime":"2018-5-20","subTitle":"在vue文件中的style标签上，有一个特殊的属性：scoped。当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。"},
					{"articleId":"11","imgPath":require("./1.jpg"),"title":"vue2.0从安装到打包发布、Stylus安装","pushTime":"2018-5-20","subTitle":"在vue文件中的style标签上，有一个特殊的属性：scoped。当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。"},

				]
            }
        },
        components: {
            navHeader: header,
            commonFooter: commonFooter,
            sideNav: sideNav
		},
		methods:{
			pageFun:function(val){
				console.log(val)
			}
		}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{padding: 0;margin: 0;}
.container {max-width: 1180px;}
.left {height: 100%;min-height: 100%;padding: 0;}

.list li{padding: 10px 10px;margin-bottom: 20px;background-color: #fff;}
.list-tit{font-size: 20px;color: #00a67c;}
.list-tit span.tit-icon{font-size: 12px;position: relative;;color: #fff;background-color: #CC6666;padding: 4px 6px;display: inline-block;margin-right: 20px;vertical-align: text-top;}
.list-tit i{position: absolute;right: -8px;top: 0;bottom: 0;color: #CC6666;margin: auto;width: 12px;height: 14px;}

.list-con{margin-top: 20px;}
.list-con .icon{margin-right: 10px;}
.icon img{width: 80px;height: 80px}
.list-con .subtit{flex: 1;color: #999;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow: hidden;height: 80px;}
.view{color: #999;float: right;}
.view{margin-top: 10px;}
.view a{display: inline-block;color: #fff;background-color: #CC6666;padding: 10px 20px;}
.view a:hover{text-decoration: none;}
.push{color: #999;padding-top: 10px;display: inline-block;}
.page-div{text-align: center;}

@media screen and (max-width:767px) {
	.right{padding: 0;}
}
/*common*/
</style>