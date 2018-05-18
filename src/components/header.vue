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
						<a class="navbar-brand" href="#">MrZhou</a>
					</div>
				
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="nav_active"><a href="#"><i class="glyphicon glyphicon-home"></i>首页</a></li>
							<li><a href="#"><i class="glyphicon glyphicon-user"></i>关于我</a></li>
						</ul>
					
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
		</header>
    </div>
</template>

<script>
    export default {
        
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
.navbar-nav .nav_active a{color:#CC6666;}
.navbar-default .navbar-brand{background-color: #CC6666;color: #fff;}
</style>