<template>
    <div>
    	<nav-header></nav-header>
        <div class="container">
			<div class="row">
				<div class="left  col-md-8">
					<div class="con">
						<div class="title">{{articleDetial.title}}</div>
						<div class="date" v-if="!loading">发表于{{articleDetial.time|time}}</div>
						<div class="article">
							<div v-html="articleDetial.content">
								

							</div>
							
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
				articleDetial:{},
				loading:true,
            }
        },
        components: {
            navHeader: header,
            commonFooter: commonFooter,
            sideNav: sideNav,

		},
		watch:{
            '$route':function(to,from){
                document.body.scrollTop = '0';
            }
        },
		created(){
			const url=this.URL+'public/index.php/index/article/getArticleDetail';
			const that=this;
			let _arid=this.$route.query.id;

			this.$http.get(url,{params:{arid:_arid}}).then(function(res){
				that.$data.articleDetial=res.data;
				that.$data.loading=false;
				
			}).catch(function(error){alert(error)})
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
>>>.article p>img{max-width: 100%!important;}
</style>