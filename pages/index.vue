<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
:root{
    --colora:#0097FF;
    --colorb:#FFFDEC;
    --colorc:#FF9A50;
    --colord:#14A0FF;
    --coloraa: #1EA3FF;
    --color-odd-a:#0097FF;
    --color-odd-b:#FF0000;
    --bordera:1px solid rgba(112, 112, 112, 20%);
    --basePx:15px;
    --xsbasePx:8px;
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
    background: var(--colorb);
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
	width: 5px;
	height:  5px !important;
	/* background-color: rgba(240, 240, 240, 1);*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
	box-shadow: inset 5px 5px 5pxpx rgba(240, 240, 240, .5);
	border-radius: 10px;
	background-color: rgba(218, 218, 218, 0.5);
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	box-shadow: inset 5px 5px 5pxpx rgba(240, 240, 240, .5);
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

</style>
