<template>
	<div>
		<div class="w1200">
			<div><img src="./img/board.jpg"></div>
			<div class="bannerTxt"><span>{{$t('聯繫我們')}}</span></div>
			<div class="companyInfo">
				<div>
					<h2>聯繫方式</h2>
					<p>電話: (852)3743-0668</p>
					<p>傳真: (852)3743-0600</p>
					<p>電郵: info@headwind.hk</p>
					<p>地址: 香港九龍尖沙咀廣東道30號新港中心第一座6樓612室</p>
				</div>
				<div style="width: 327px;">
					<h2>辦公時間：</h2>
					<p>上午10:00至下午6:00(星期一至五)</p>
					<p>上午10:00至下午1:00(星期六)</p>
					<p>星期日及法定假期休息</p>
					<p>顧客服務熱線：(852)3743-0668</p>
				</div>
			</div>
			<div class="companyInfo" style="border-bottom: 0">
				<div>
					<h2>Contact Us</h2>
					<p class="flex"><span style="width: 35px;">Tel: </span><span>(852)3743-0668</span></p>
					<p class="flex"><span style="width: 35px;">Fax: </span><span>(852)3743-0600</span></p>
					<p>E-Mail: info@headwind.hk</p>
					<p>Address: Suite 612,6/F,Tower 1,Silvercord,30 Canton Road,Tsim Sha Tsui,Kowloon,Hong Kong</p>
				</div>
				<div>
					<h2>Office Hours：</h2>
					<p class="flex"><span span style="width: 136px;">Monday to Firday</span><span>10:00 - 18:00</span></p>
					<p class="flex"><span span style="width: 136px;">Saturday</span><span>10:00 - 13:00</span></p>
					<p>Sunday & Public Holiday: Day Off</p>
					<p>Customer service hotline: (852)3743-0668</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'joinUs',
	created() {
	    document.title = this.$store.state.app.language == "zh" ? "加入我們" : "Join Us";
	    this.$store.dispatch("setMenuI", 6);
	    this.$store.dispatch("setBreadCrumbs", [
	      { label: "加入我們", isI18n: true }
	    ]);
	  }
}
</script>

<style scoped>
.flex{
	display: flex;
}
.jst-sp{
	justify-content: space-between;
}
.w1200{
	width: 1200px;
	margin:0 auto;
}
.bannerTxt{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 150px;
	background: url(./img/CONTACTUS.png)no-repeat;
	background-size: 70%;
	background-position: 50%;
}
.bannerTxt>span{
	font-size: 32px;
	color: #4ca9cd;
	padding-top: 10px;
	border-top: 3px solid
}
.companyInfo{
	font-size: 16px;
	line-height: 36px;
	/*width: 40%;
	margin:0 auto;*/
	display: flex;
	/*align-items: center;*/
	justify-content: space-between;
	flex-wrap: wrap;
	border-bottom: 1px dashed #ddd;
	padding-bottom: 20px;
	margin-bottom: 20px;
}
.companyInfo>div>h2{
	margin-bottom: 20px;
}
.companyInfo>div:nth-child(1){
	margin-right: 60px;
}
</style>