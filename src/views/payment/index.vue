<template>
	<div>
		<div class="w1200">
			<h2>填写并核对订单信息</h2>
			<div class="sur">
				<h3>收货人信息</h3>
				<ul :class="ulswitch?'info':'info close'">
					<li v-for="(item,index) in arr" :key="index">
						<span :class="item.active?'choose':''" @click="chooseAdress(index)">{{item.name}}</span>
						<p>{{item.adress}}&nbsp;&nbsp;&nbsp;<span>{{item.tel}}</span>&nbsp;&nbsp;&nbsp;<em v-if="item.def">默认地址</em></p>
					</li>
				</ul>
				<span class="more" @click="ultoggle()">{{switchTxt}}<i :class="ulswitch?'open':'close'"></i></span>
				<h3>送货清单</h3>
				<div>
					<!-- 这里放列表-->
				</div>
			</div>
			<div class="total">
				<ul>
					<li>
						<span>2件商品，总商品金额：</span>
						<span>$132.00</span>
					</li>
					<li>
						<span>返现：</span>
						<span>$12.00</span>
					</li>
					<li>
						<span>运费：</span>
						<span>$1.00</span>
					</li>
					<li>
						<span>折扣：</span>
						<span>$1324.00</span>
					</li>
				</ul>
			</div>
			<div class="totalInfo">
				<p>应付总额：<span>$92.00</span></p>
				<p>
					<span>寄送至：{{defAdress}}</span>
					<span>收货人：{{defName}}</span>
					<span>{{defTel}}</span>
				</p>
			</div>
			<div class="submit">
				<span @click="showPis()">提交订单</span>
			</div>
		</div>
		<!--弹窗 -->
		<div :class="pis?'position':'position hide'">
			<div>
				<h3>请选择您的支付方式<i @click="hidePis()"></i></h3>
				<div>
					<div class="payType">
						<span :class="epSwitch?'':'check'" @click="ep1()">EP1</span>
						<span :class="!epSwitch?'':'check'" @click="ep2()">EP2</span>
					</div>
					<div class="payTypeCheck">
						<span>支付方式：</span>
						<span>{{!epSwitch?'EP1':'EP2'}}</span>
					</div>
					<p>应付金额：<span class="sum">$92</span></p>
					<div class="pwd">
						<p>请输入您的支付密码：</p>
						<input type="password" name="">
						<span>确定</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 支付成功弹窗 -->
		<div class="position hide">
			<div>
				<h3>支付状态<i></i></h3>
				<div>
					<div style="width: 100px;margin:0 auto 10px"><img style="width: 100%" src="./img/success.png"></div>
					<p style="text-align: center;">支付成功</p>
					<div class="button">
						<span>查看订单</span>
						<span>继续购物</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "payment",
	data(){
		return{
			pis:0,
			epSwitch:0,
			ulswitch:0,
			switchTxt:"更多地址",
			arr:[
				{name:"cc",tel:"13212345678",adress:"深圳市南山区科技园飞亚达大厦33楼",active:true,def:true},
				{name:"dd",tel:"13212345678",adress:"深圳市南山区科技园飞亚达大厦33楼",active:false,def:false},
				{name:"ee",tel:"13212345678",adress:"深圳市南山区科技园飞亚达大厦33楼",active:false,def:false}
			],
			defName:"cc",
			defTel:"13212345678",
			defAdress:"深圳市南山区科技园飞亚达大厦33楼"
		}
	},
	methods:{
		chooseAdress(index){
			for(let i  = 0;i<this.arr.length;i++){
				this.arr[i].active = false
			}
			this.arr[index].active = true
			this.defName = this.arr[index].name
			this.defTel = this.arr[index].tel
			this.defAdress = this.arr[index].adress
		},
		ultoggle(){
			if(this.ulswitch){
				this.ulswitch = 0
				this.switchTxt = "更多地址"
			}else{
				this.ulswitch = 1
				this.switchTxt = "收起"
			}
		},
		ep1(){
			this.epSwitch = 0
		},
		ep2(){
			this.epSwitch = 1
		},
		hidePis(){
			this.pis = 0
		},
		showPis(){
			this.pis = 1
		}
	},
	created() {
    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "1234", isI18n: true }
    ]);
  }
}
</script>

<style scoped>
.sur{
	border: 1px solid #dedede;
	padding: 15px;
	box-sizing: border-box;
	margin-top: 20px;
	margin-bottom: 20px;
}
.sur>h3{
	margin-bottom: 20px;
}
.w1200{
	width: 1200px;
	margin:0 auto;
}
.close{
	height: 31px;
	overflow: hidden;
}

.info>li{
	display: flex;
	align-items: center;
	width: 96%;
	margin:0 auto 20px;
}
.info>li:last-child{
	margin-bottom: 0
}
.info>li>span{
	width: 120px;
	height: 31px;
	text-align: center;
	line-height: 31px;
	cursor: pointer;
	border: 1px solid #4ca9ce;
	box-sizing: border-box;
	/*margin-right: 20px;*/
}
.info>li>.choose{
	background: url(./img/choose.png)no-repeat;
    background-size: 20px;
    background-position: 100% 100%;
}
.info>li>p{
	height: 31px;
	line-height: 31px;
	width: calc( 100% - 120px);
	background: #edfaff;
	text-indent: 20px;
}
.info>li>p>em{
	background: #bbb;
	font-style: initial;
	padding:2px 8px;
	color: #fff
}
.more{
	color: #999;
	cursor: pointer;
	margin-left: 2%;
	margin-right: 2%;
	padding-bottom: 20px;
	/*padding-right: 20px;*/
	display: block;
	border-bottom: 1px solid #ddd;
	font-size: 16px;
	display: flex;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 30px;
}
.more i{
	width: 20px;
	height: 20px;
}
.more .close{
	background: url(./img/down.png)no-repeat;
    background-size: 12px;
    background-position: 50%;
}
.more .open{
	background: url(./img/up.png)no-repeat;
    background-size: 12px;
    background-position: 50%;
}
.total{
	margin-bottom: 20px;
}
.total>ul>li{
    display: flex;
    justify-content: flex-end;
    padding: 8px 0;
    font-size: 16px;
}
.total>ul>li>span:nth-child(2){
	width: 120px;
	text-align: right;
}
.totalInfo{
	background: #ececec;
    color: #999;
    font-size: 16px;
    text-align: right;
    padding: 20px 10px;
    margin-bottom: 20px;
}
.totalInfo>p:nth-child(1){
	margin-bottom: 20px;
}
.totalInfo>p:nth-child(1) span{
	font-size: 24px;
	margin-left: 20px;
	color: #e94545
}
.totalInfo>p:nth-child(2) span{
	margin-left: 20px;
}
.submit{
    display: flex;
    justify-content: flex-end;
}
.submit span{
	padding: 10px 35px;
	color: #fff;
	background: #66b0cd;
	font-size: 20px;
	border-radius: 4px;
	cursor: pointer;
}
.position{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #00000021;
    display: flex;
    align-items: center;
    justify-content: center;
}
.position>div{
	background: #fff;
	width: 500px;
	border: 1px solid #ddd;
	font-size: 16px;
}
.position>div>h3{
	background: #4ca9cd;
	color: #fff;
	padding: 10px 0;
	text-indent: 15px;
	font-size: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.position>div>h3>i{
	width: 15px;
	height: 15px;
	background: url(./img/X.png)no-repeat;
    margin-right: 10px;
    background-size: 100%;
    cursor: pointer;
}
.position>div>div{
	padding: 20px;
	box-sizing: border-box;
}
.position>div>div>*{
	margin-bottom: 30px;
}
.payType{
	display: flex;
	align-items: center;
}
.payType>span{
	margin-right: 80px;
	cursor: pointer;
}
.payType>.check{
	color: #4ca9cd;
	font-weight: 600;
	border-bottom: 2px solid
}
.payTypeCheck{
	display: flex;
	align-items: center;
}
.payTypeCheck>span:nth-child(2){
	width: 80px;
	height: 31px;
	text-align: center;
	line-height: 31px;
	border: 1px solid #4ca9ce;
	box-sizing: border-box;
	background: url(./img/choose.png)no-repeat;
    background-size: 20px;
    background-position: 100% 100%;
}
.sum{
	font-size: 20px;
	color: #e94545
}
.pwd{
	display: flex;
	align-items: center;
}
.pwd>input{
	border: 0;
	border-bottom: 1px solid #ddd;
	width:200px;
	outline:medium;
	height: 30px;
	font-size: 20px;
}
.pwd>span:last-child{
	background: #4ca9cd;
	color: #fff;
	width: 80px;
	text-align: center;
	height: 30px;
	line-height: 30px;
	margin-left: auto;
	margin-right: 0;
	cursor: pointer;
}
.hide{
	display: none !important;
}
.button{
	display: flex;
	justify-content: center;
}
.button span{
	width: 35%;
	text-align: center;
	border: 1px solid #4ca9cd;
	height: 40px;
	line-height: 40px;
	color: #fff;
	background: #4ca9cd;
	cursor: pointer;
}
.button span:first-child{
	margin-right: 20px;
	background: #fff;
	color: #4ca9cd
}
</style>