<template>
    <div>
        <!-- 关于我 -->
        <div class="aboutMe section bx">
            <div class="tit">about Me</div>
            
        </div>
        <!-- 优秀资源 -->
        <div class="goodSource section bx">
            <div class="tit">优秀资源</div>
            <div class="con">
                <ul>
                    <li><a href="http://f2er.club/" target="_bank">醉牛前端</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                </ul>
            </div>
        </div>
        <!-- 友情链接 -->
        <div class="link section bx">
            <div class="tit">友情链接</div>
            <div class="con">
                <ul>
                    <li><a href="http://f2er.club/" target="_bank">醉牛前端</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                    <li><a href="https://www.qdfuns.com/" target="_bank">前端网</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@media screen and (max-width:767px){
    .aboutMe{margin-top: 20px;}
}
.section{background-color: #fff;min-height: 200px;margin-bottom: 20px;}
.tit{font-size: 16px;padding: 10px 10px;border-bottom: 1px solid #ebebeb;position: relative;}
.tit:after{position:absolute;left:0;bottom:0;display: block;content: "";width: 30%;border-bottom: 1px solid #CC6666;}
.con{padding:10px 10px;}
.con li{float: left;margin-bottom: 10px;}
.con a:hover{background-color: #CC6666;color: #fff;border: 1px solid #CC6666;}
.con a{color: #959595;font-size: 12px;border: 1px solid #ebebeb;padding: 4px 8px;margin: 0 5px;text-decoration: none;}
</style>