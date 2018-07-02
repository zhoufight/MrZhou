<template>
	<div class="">
		<header class="header">
			<nav class="navbar navbar-default">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<router-link class="navbar-brand" to="/index"><img src="../assets/logo.png" height="90" width="285" alt=""></router-link>
					</div>
				
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li><router-link to="/index"><i class="glyphicon glyphicon-home"></i>首页</router-link></li>
							<li><router-link to="/about"><i class="glyphicon glyphicon-user"></i>关于我</router-link></li>
						</ul>
						<form class="navbar-form navbar-right">
					        <div class="form-group">
					          	<input type="text" v-model="searchValue" class="form-control" placeholder="Search"  >
					        	<span class="search-icon"><i @click="searchFun" class="el-icon-search"></i></span>
					        </div>
					    </form>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
		</header>
		<div class="container">
			<p>搜索<span class="search-tip"> "{{keywords}}"</span> 文章</p>
			<div class="row" v-if="listData.length >0">
				<div class="left  col-md-8" v-loading.fullscreen.lock="loading">
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
								<router-link :to="{ name: 'detail',params:{id:item.id}}">阅读全文</router-link>
								
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
			<div class="txt-tip" v-else >{{txt}}</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>

<script>
    
    import commonFooter from './footer'
	import sideNav from './sideNav'
	
	
    export default {
        name: 'index',
        data() {
            return {
				listData:[],//文章列表
				pageTotal:0,//文章总数
				keywords:'',//搜索关键词
				txt:'',
				searchValue:'',
				loading: true
            }
        },
        components: {
            commonFooter: commonFooter,
            sideNav: sideNav
		},
		created(){
			
		},
		watch:{
            '$route':function(to,from){
                document.body.scrollTop = '0';
                console.log(1)
            }
        },
		mounted(){
			
			this.searchFun(1,this.$route.params.keywords);
		},
		methods:{
			pageFun:function(val){
				this.searchFun(val,this.$data.keywords)
			},
			searchFun:function(pageNum,keywords){
				const url=this.URL+'public/index.php/index/search/index';
				const that=this;
				var words=''
				
				if(this.$data.keywords !=''){
					words=this.$data.searchValue
				}else{
					words=keywords;
				}

				this.$http.get(url,{params:{page:pageNum,keywords:words}}).then(function(res){
					that.$data.listData=res.data.searchres.data;
					that.$data.pageTotal=res.data.searchres.total;
					that.$data.keywords=res.data.keywords;
					
					if (res.data.searchres.data.length == 0) {
						that.$data.txt="sorry,没有search到你想的~~~"
					}
					that.$data.loading=false;
				}).catch(function(error){alert(error)})
			},
			
		}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{box-shadow: 1px 1px 5px rgba(0,0,0,.1);margin-bottom: 10px;}
.navbar-nav{font-size: 16px;}
.navbar-default .navbar-nav>li>a:focus{color:#777;}
.navbar-default .navbar-nav>li>a:hover{color: #CC6666}
.navbar-nav{padding-left: 20px;}
@media (max-width: 767px) {
	.navbar-nav{padding-left: 0;}
}
/* .navbar-nav li{padding:0 10px;} */
.navbar-nav li i{margin-right: 8px;}
.navbar-nav  a.nav_active{color:#CC6666;}
.navbar-default .navbar-brand{background-color: #CC6666;color: #fff;}
.navbar-brand img{max-height: 100%;width: 100px;}
input{outline: none;color: #999;}
.form-control:focus{border-color:#e7e7e7;-webkit-box-shadow:none;box-shadow: none;}
.form-group{position: relative;}
.search-icon{position: absolute;right: 10px;top:0;bottom: 0;font-size: 18px;color: #999;line-height: 34px;cursor: pointer;}
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
.search-tip{color: #CC6666;}
.txt-tip{min-height: 300px;text-align: center;font-size: 16px;}
/*common*/
</style>