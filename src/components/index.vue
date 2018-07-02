<template>
	<div class="">
		<nav-header></nav-header>
		<div class="container">
			<div class="row"  v-loading.fullscreen.lock="loading">
				<div class="left  col-md-8">
					<ul class="list">
						<li class="clearfix bx"  v-for="(item,index) in listData" :key="item.id">
							<div class="list-tit"><span class="tit-icon">web技术<i class="glyphicon glyphicon-triangle-right"></i></span><span>{{item.title}}</span></div>
							<span class="push">发表于{{item.time|time}}</span>
							<div class="list-con fx">
								<div class="icon"><img :src="'http://mydandan.com//public/static/'+[item.pic !=''?item.pic:'index/images/error.png']" alt=""></div>
								<div class="subtit">
									<p>{{item.desc}}</p>
								</div>

							</div>
							<div class="view">
								<router-link :to="{ name: 'detail',query:{id:item.id}}">阅读全文</router-link>
								
							</div>
							
						</li>
					</ul>
					<div class="page-div" v-show="listData.length > 0">
						<el-pagination
							background
							@current-change="pageFun"
							layout="prev, pager, next"
							:total="pageTotal">
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
				listData:[],//文章列表
				pageTotal:0,//文章总数
				loading: true
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
			this.getArticleData(1);
		},
		methods:{
			pageFun:function(val){
				this.getArticleData(val)
			},
			getArticleData:function(pageNum){
				const url=this.URL+'public/index.php/index/index/getList';
				const that=this;

				this.$http.get(url,{params:{page:pageNum}}).then(function(res){
					that.$data.listData=res.data.data;
					that.$data.pageTotal=res.data.total;
					that.$data.loading=false;
					
				}).catch(function(error){alert(error)})
			},
			
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