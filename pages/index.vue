<template>
  <div>
	
    <div class="apge pad" v-if="$route.name=='index'">
	
		<div class="__nuxt-error-page"><div class="error"><svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">This page could not be found</div> <p class="description"><a href="/" class="error-link nuxt-link-active">Back to the home page</a></p> <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt</a></div></div></div>
		
	<!-- <div class="flex-box center marLeft marTop padTop" v-show="$route.name=='index'"><span class="padRig"> this page is 404</span>   </div> -->
    </div>
	<nuxt  v-else> </nuxt>
  </div>

</template>

<script nuxt-no-cache>
export default {
  name: 'IndexPage',
  data(){
    return {
      nav:{
        index:{icon:'el-icon-s-home',name:'首页'},
        userWxId:{icon:'el-icon-s-custom',name:'个人中心'}
      },
      loading:false,
	  page:1,
	  total:0,
      isTrue:false
    }
  },
  created(){
	if(this.$route.name!=='index'){
		this.isTrue  = !!this.$route.params.wxid
    }
  },
  mounted(opt){
	
    
    // this.getCount(1)
    this.getData(1)
  },
  methods:{
   async getData(i){
    this.state = i
    this.loading = true
    let url = `/index/index/get_user_list?page=${this.page}`
    console.log("sdfs",url)
     let res =  await this.$axios.get(url)
     this.loading = false
     if(res){
      this.member =  res.data
      this.total = res.total
	  this.isTrue =  res.data.find(ele=>ele.wxid==this.$route.params.wxid).wxid
	  console.log("wxid apge",res.data,this.$route.params.wxid)
     }

    
    }
  }
}
</script>
<style>
:root{
	--color:#555;
    --colora:#0097FF;
    --colorb:#FFFDEC;
    --colorc:#FF9A50;
    --colord:#14A0FF;
    --coloraa: #1EA3FF;
    --color-odd-a:#0097FF;
    --color-odd-b:#FF0000;
    --bordera:1px solid rgba(112, 112, 112, 20%);
    --basePx:15px;
    --xs_basePx:8px;
}
.cusor{
  cursor: pointer;
}
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}
html{
    font-size: 10px;
}

body {
    /* margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    width: 100%;
    max-width: 540px; */
    padding: 0;
    background: #f6f6f6;
}
.title{
	margin: 20px 10px 15px;
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
}
.show{
    display: block !important;
}

.flex{
    display: flex;

}

.bold {
	font-weight: bold;
	//font-family: 'Bold Source HanSans CN'
}

.heavy {
	font-weight: 900;
	//font-family: 'Heavy Source HanSans CN';
}

.line {
	text-decoration: line-through;
	color: #333 !important;
}

.white {
	color: white;
}

.gray {
	color: gray;
}


.ov {
	overflow: hidden;
}

.cl {
	clear: both;
}
.scrollLeft{
	overflow-x: scroll;
    white-space: nowrap;
	width: 100%;
}
/* 定义滚动条样式  不要这样设置 会影响我的样式*/
::-webkit-scrollbar {
	width: 5px !important;
	height:  5px !important;
	/* background-color: rgba(240, 240, 240, 1);*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
	box-shadow: inset 5px 5px 5px rgba(240, 240, 240, .5);
	border-radius: 5px;
	background-color: rgba(218, 218, 218, 0.5);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
	border-radius: 5px;
	box-shadow: inset 5px 5px 5px rgba(240, 240, 240, .5);
	background-color: rgba(155, 155, 155, .5);

}

.t-left {
	text-align: left
}

.t-right {
	text-align: right;
}

.t-center {
	text-align: center;
}

[block] {
	display: block;
	width: 100%;
	min-width: auto;
	max-width: auto;
}

[inline-block] {
	display: inline-block;
}

/* flBox */


/*flex-box  */
.coll {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: flex;
	width: 100%;
	align-items: center;
	flex: 1;
}

.flex-box.text-left {
	text-align: left;
}

.flex-box>.flex {
	flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	-o-flex: 1;
}

.flex-box {
	 display: -webkit-flex;
	 display: -moz-flex;
	 display: -ms-flex;
	 display: flex;
	 align-items: center;

	 /* flex-flow:  column; */
	 justify-content: flex-start;
}

.flex-box.column {
	flex-flow: column;
	flex-direction: column;
}

.flex-box.row {
	flex-flow: row;
	flex-direction: row;
}

[class*="flex-box "][class*="flex-end"] {
	justify-content: flex-end;
}

.flex-box.between {
	justify-content: space-between;
}
.flex-box.evenly {
	justify-content: space-evenly;
}
.flex-box.item-end {
	align-items: flex-end;
}

.flex-box.item-start {
	align-items: flex-start;
}

.flex-box.center {
	justify-content: center;
}

.flex-box.wrap {
	flex-wrap: wrap;
	flex-direction: row;
}

.coll_25 {
	width: 25%;

	text-align: center;

}

.coll_80 {
	width: 80%;
	text-align: center;

}

.coll_20 {
	width: 20%;
	text-align: center;

}

.coll_70 {
	width: 70%;
	text-align: center;

}

.coll_30 {
	width: 30%;
	text-align: center;

}

.coll_33 {
	width: 33.3%;
	text-align: center;

}

.coll_40 {
	width: 40%;
	text-align: center;

}

.coll_60 {
	width: 60%;
	text-align: center;

}

.coll_50 {
	width: 50%;
	text-align: center;

}

.coll_100 {
	width: 100%;
	text-align: center;

}

.pad {
	padding: var(--basePx);
}

.padRig {
	padding-right: var(--basePx);
}

.padTop {
	padding-top: var(--basePx);
}

.padBtm {
	padding-bottom: var(--basePx);
}

.padLeft {
	padding-left: var(--basePx);
}

.mar {
	margin: var(--basePx);
}

.marRig {
	margin-right: var(--basePx);
}

.marTop {
	margin-top: var(--basePx);
}

.marBtm {
	margin-bottom: var(--basePx);
}

.marLeft {
	margin-left: var(--basePx);
}

.xs_pad {
	padding: var(--xs_basePx);
}

.xs_padLeft {
	padding-left: var(--xs_basePx);
}

.xs_padTop {
	padding-Top: var(--xs_basePx);
}

.xs_padBtm {
	padding-bottom: var(--xs_basePx);
}

.xs_padRig {
	padding-right: var(--xs_basePx);
}
.xs_mar{
	margin: var(--xs_basePx);;
}
.xs_marTop {
	margin-top: var(--xs_basePx);
}

.xs_marBtm {
	margin-bottom: var(--xs_basePx);
}

.xs_marLeft {
	margin-left: var(--xs_basePx);
}

.xs_marRig {
	margin-right: var(--xs_basePx);
}

.xs_marTop {
	margin-top: var(--xs_basePx);
}

.xs_marBtm {
	margin-bottom: var(--xs_basePx);
}

.clPad {
	padding: 0 !important;
}

.clPadBtm {
	padding-bottom: 0 !important;
}

.clPadTop {
	padding-top: 0 !important;
}

.clPadLeft {
	padding-left: 0 !important;
}

.clPadRight {
	padding-right: 0 !important;
}

.clMar {
	margin: 0 !important;
}

.clMarBtm {
	margin-bottom: 0 !important;
}

.clMarTop {
	margin-top: 0 !important;
}

.clMarLeft {
	margin-left: 0 !important;
}

.clMarRight {
	margin-right: 0 !important;
}

.posRea {
	overflow: hidden;
	position: relative;
}

.posAb {
	position: absolute;
	z-index: 2;
}

.posTopRig {
	right: 0px;
	top: 0px;
}

.posTopLft {
	left: 0px;
	top: 0px;
}

.posFixed {
	position: fixed;z-index: 50;

}
.fixTop{
	top:0;left:0;right:0;
}
.posBtmLft {
	left: 0px;
	bottom: 0px;
}

.posCenter{
	left: 50%;
    transform: translateX(-50%);
}
.posBtmRig {
	right: 0px;
	bottom: 0px;
}

.posRig {
	right: 0px;
}

.posLeft  {
	left: 0px;
}

.posTop {
	top: 0px;
}

.posBtm {
	bottom: 0px;
}

.fr {
	float: right;
}

.fl {
	float: left;
}

.v-modal {
	opacity: .7;
}

.red {
	color: #fb6b6c;
}

.xs_mainClor {
	color: var(--colorb);

}
.xs_act{
	color: var(--colora);
}

.mainClor {
	color: var(--colora)
}

.green {
	color: #23B72E;
}

.yellow {
	color: #DBA222;
}

.black {
	color: black;
}

.gray-btn {
	background: gray;
	color: #fff;
}
.borderBtm{
	border-bottom: 1px solid gray;
}
.borderBox{
	border: 1px solid gray;
}

li{
	list-style: none;
}



.sub-float-l:after {
  display: block;
  content: "";
  clear: both;
  width: 0px;
}

.sub-float-l > div {
  float: left;
}


.jc-sb{
  display: flex;
  justify-content: space-between;
  align-items: center;
}



.textOv{
	overflow: hidden;
	display: -webkit-inline-box;
    
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.titl{
  /* min-width: 100px;
  flex:1; */
  overflow: hidden;
    /* line-height: 1.5; */
    /* text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; */

  /* max-width:30%; */
  padding:15px 5px;
}
.tables{
	background:#f5f5f5;
}
.tables .sqbox{
	background:#aac8e1;
}
 .tables .sqbox:nth-child(2n-1){
  background:#fff;
  
}
.tables *{
  font-size:13px;
}
.el-loading-mask{
	background:rgba(255,255,255,.55)
}
.loadingText{
	/* color:var(--coloraa); */
	margin:10% auto;
	/* transform:translate(-50%); */
}
.tableDiv {
	padding:10px;
}
.tableBox{
  /* width:calc(100% - 50px); */
  border-radius:5px;
  margin:5px 0;
  background:#e2eef7;
  overflow: hidden;
  /* border:1px solid #f5f5f5; */
}
.tabsWrap{
	width:100%;
	border-bottom:.5px solid #f3f3f3;
}
.tables{
  max-height:70vh;
  /* min-height:500px; */
   overflow-y: scroll; 
   overflow-x: hidden;

}
.isCli{
  color:var(--colora)
}
.transform{

    transform: rotate(180deg);
    animation: rotation 6s linear infinite;
    
}
@keyframes rotation {
 0% {
  transform:rotateY(0deg);
  transform:rotateZ(0deg)
 }
 100% {
  transform:rotateY(360deg);
  transform:rotateZ(360deg)
 }
}
.icon, path{
width:50px !important;
height:50px !important;
color:var(--colora);
/* margin-right:20px; */
}
.Page >.poolPage_title{
  background:#55abf2;
}
.poolPage_title{

  font-size:25px;
  margin-bottom:10px;
}
.poolPage{
  overflow: hidden;
  line-height:1.5;
  max-width:1450px;
  min-width: 320px;
  margin:0 auto;
  width:100%;
  /* min-height:40vh; */
  
  background:#c1d8e8;/*#c1d8e8;*/
  border-radius:10px;
}
*{
  font-size:18px;
}
.xp-label{
	/* color:#f5f5f5; */
}
.act{
  /* color:vwhite */
  padding-left:5px;
}
.names{
  padding:8px 0;
}
.xp-act{
	color:var(--colora);
}
.xp-name{

  color:var(--color);
  /* color:#f5f5f5;  */

}




.navIcon{
  font-size:30px
}
 @media screen  and (max-width:780px){
  /* .tableBox,.tables,.tableBox >.sqbox {
 overflow-x:scroll !important;
 .   
}   */
body .icon{
  width:30px !important;
  height:30px !important;
}
body .poolPage_title {
  font-size:20px;
  background:#aacae5 !important;
}
body  .navIcon{
  font-size:24px
}
body .tableDiv.pools{
  overflow-x:scroll !important;
}
body .tableDiv.pools .tableBox{
  width:550px;
  margin:0;
}

body .tableDiv .isSamll{
  width:70px;
}
.tabsWrap{

}
body .tableDiv {
  width:100%;
  padding:0;
   /* overflow-x:scroll; */
}
body .sqbox.center{
  justify-content:initial;

}
.nav >.xp-box{
  border-radius:5px;
  margin:0 8px;
  padding:0 5px;
}
.nav .xp-act1{
  background:rgba(85 ,171, 242,.5);
}
.nav .name{
  padding:5px;
}

body .titl{
 width:135px;


}

.xp-box{
  /* width:40%; */
  padding:0 5px;
  
  min-width: 80px;
  
}
html *{
  font-size:14px;
}
.Page{
  /* padding:10px; */
}
.poolPage{
  padding:0 !important;
}

.poolPage >div{
  padding:10px;
}
}
</style>
