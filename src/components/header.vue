<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        data () {
          return {
            searchValue:'',
            value:''
          };
        },
        created(){

        },
        props:['keywords'],
        mounted(){
        	
        },
        methods:{
        	searchFun:function(){
        		var that=this;
        		if (this.$data.searchValue == '') {
        			return false;
        		}else{
        			this.$router.push({ name: 'search', params: { keywords: this.$data.searchValue }})
        			
        		}

        	}
        }

    }
</script>

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
</style>