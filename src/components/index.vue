<template>
	<div class="">
		<header>
			
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
						<a class="navbar-brand" href="#">Brand</a>
					</div>
				
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
							<li><a href="#">Link</a></li>
							<li><a href="#">Link</a></li>
						</ul>
					
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
			<!-- <div class="container">
				<div class="bannerImg"><img src="./banner.jpg" alt="" /></div>
			</div> -->
				
		</header>
	</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {
			
		}
	}
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerImg{height:400px;border:1px solid red;}
.bannerImg img{max-height:100%;}
</style>
