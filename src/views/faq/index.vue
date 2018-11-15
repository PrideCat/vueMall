<template>
	<div>
		<div class="w1200 flex">
			<div class="content">
				<div>
					<h2>
						<i></i>{{$t(arr[id].name)}}</h2>
            <div v-if="id==0">
              <div v-if="lang=='zh'">
                <p>&nbsp;</p>
                <p style="text-indent:2em;">翊豐國際集團有限公司（下稱「本公司」）在本網站所載的資料只供參考之用。雖然本公司已盡力確保本網頁的資料準確，但本公司不會明示或隱含保證或擔保該等資料均準確無誤。本公司對於因資訊內容或因使用資訊所引致的任何損失或損毀，一概不負任何責任。</p>
                <p style="text-indent:2em;">本公司不會對使用或無法使用本網頁所載資料或就使用本網頁或其中任何資料所採取的任何行動或作出的決定引起合約上、侵權法或其他方面損害（包括但不限於業務損失或溢利損失）承擔賠償。</p>
                <p style="text-indent:2em;">如使用人把本公司網頁連接至其他機構所提供的網頁，必須知悉該等網頁是由那些機構編製及提供。本公司不會對連結本網頁的超文本的內容負責，及不會對因使用該超文本而引致的損失或損害承擔責任。</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>版權</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">本公司網站內的資訊，可供發布或複製作非牟利用途，但必須註明有關資訊是由本公司提供的。除非事先得到本公司的書面授權，否則嚴禁複製、改編、分發、發布或提供本網站內的資訊作牟利用途。直銷商在發放或複製本公司網站所提供的資訊或圖片時，亦必須遵守翊豐約法及營業守則的各項指引。本公司對於因本網站的資訊，或因複製或發布本網站的資訊而引致的任何損失或損毀，一概不負任何責任。</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>第三者內容</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">本網站所載列或連結的部分資訊，是由第三者擬備或提供的。這些資訊只代表其擁有人或與其有關機構的意見。本公司對於資訊內容的機構不作任何保證，對於在確保有關內容正確及有效方面也不負任何責任。</p>
                <p style="text-indent:2em;">如使用人為第三方提交任何訂單和/或代表第三方訂購，必須事先獲得第三方的同意和/或授權。通過本網站為第三方下單，即表示使用人已向翊豐國際保證，在下單前已獲得了所需的同意和/或授權。</p>
                <p style="text-indent:2em;">本公司雖已盡力確保本網站的資訊內容正確，但對於本網站所載列或連結的內容之準確性及實用性，不作任何擔保或保證。本公司對於因資訊內容或因使用資訊所引致的任何損失或損毀，一概不負任何責任。</p>
              </div>
              <div v-else>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">The information contained in this website of Yifeng International Group Co., Ltd. (hereinafter referred to as "the Company") is for reference only. Although the Company has made every effort to ensure the accuracy of the information on this website, the Company does not expressly or implicitly guarantee or guarantee that such information is accurate. The company is not responsible for any loss or damage caused by the content of the information or the use of the information.</p>
                <p style="text-indent:2em;">The Company will not infringe on contractual, tortious or otherwise (including but not limited to business loss or any action or decision taken on the use of this webpage or any use of this webpage or any of its materials. Profit loss) is responsible for compensation.</p>
                <p style="text-indent:2em;">If the user connects the company's webpage to a webpage provided by another institution, it must be aware that the webpage is compiled and provided by those institutions. The Company is not responsible for the content of the hypertext linked to this website and will not be liable for any loss or damage caused by the use of the hypertext.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>copyright</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">The information on the company's website may be published or copied for non-profit use, but it must be stated that the information is provided by the company. Reproduction, adaptation, distribution, distribution or provision of the information on this website for the sole purpose of profit is strictly prohibited unless prior written authorization is obtained from the company. Distributors must also comply with the guidelines of the HSBC Law and the Code of Practice when distributing or copying the information or images provided on the Company's website. The company is not responsible for any loss or damage caused by the information on this website or the reproduction or distribution of information on this website.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>Third party content</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">Some of the information listed or linked on this website is prepared or provided by a third party. This information is solely for the opinions of its owner or its related agencies. The company does not guarantee the organization of the information content and is not responsible for ensuring that the content is correct and effective.</p>
                <p style="text-indent:2em;">If the user submits any order for a third party and/or orders on behalf of a third party, prior third party consent and/or authorization must be obtained. By placing a third party order through this website, the user has assured the company that he has obtained the required consent and/or authorization before placing the order.</p>
                <p style="text-indent:2em;">While the Company has made every effort to ensure that the information content of this website is correct, no warranty or guarantee is given as to the accuracy and usefulness of the contents listed or linked on this website. The company is not responsible for any loss or damage caused by the content of the information or the use of the information.</p>
              </div>
            </div>
            <div v-if="id==1">
              <div v-if="lang=='zh'">
                <p>&nbsp;</p>
                <p style="text-indent:2em;">翊豐國際集團有限公司（下稱「本公司」）每位人員均以保障個人資料私隱為己任。我們尊重個人資料，並且全力執行及遵守保障資料原則，以及《個人資料（私隱）條例》的各項有關規定。</p>
                <p style="text-indent:2em;">本公司不會於客戶瀏覽本網站時收集任何足以識辨個人身份之資料（「個人資料」）。當客戶瀏覽我們之網站時，我們僅將其瀏覽記錄為一次「按動次數」，並不收集任何個人資料。</p>
                <p>&nbsp;</p>
                <p>本公司有的個人資料類別</p>
                <p style="text-indent:2em;">概括而言，本公司持有的個人資料有兩大類，分別記載在下列記錄內：</p>
                <p>&nbsp;</p>
                <p>意見及查詢記錄： </p>
                <p style="text-indent:2em;">當中包括資料使用者提供的資料、就查詢及有關意見收集的資料。目的是要就查詢及收集之意見作出回應及採取跟進工作。</p>
                <p>&nbsp;</p>
                <p>購貨登記記錄： </p>
                <p style="text-indent:2em;">零售會員/優惠用戶/ IBO 創業會員使用購貨服務時，只需輸入編號及密碼，便可於翊豐互聯網上進行網上購貨。翊豐互聯網只會根據你預先提供的地址送上貨物；這樣，即使有人非法使用你的編號及密碼，亦無法獲取貨品。然而，你必須妥善保存你的戶口名稱及密碼。</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>翊豐國際集團有限公司</p>
                <p>保障資料及私隱政策</p>
                <p style="text-indent:2em;">此通知乃說明翊豐國際集團有限公司（以下簡稱「翊豐」）就保障資料及私隱政策而履行的責任及政策。</p>
                <p>&nbsp;</p>
                <p>收集個人資料的目的</p>
                <p style="text-indent:2em;">你提交給翊豐的個人資料，將作以下用途：</p>
                <p style="text-indent:2em;">．處理優惠用戶/ IBO 創業會員申請</p>
                <p style="text-indent:2em;">．如優惠用戶/ IBO 創業會員需要上傳個人証明文件的話，需要承擔一定的風險。所以翊豐主張是親身到翊豐國際集團有限公司辦理申請。</p>
                <p style="text-indent:2em;">．優惠用戶/ IBO 創業會員服務及推薦計劃之運作、管理或發展</p>
                <p style="text-indent:2em;">．籌辦研討會、訓練或市場發展活動</p>
                <p style="text-indent:2em;">．於有需要時，評估及修訂你、你的合伙人、推薦人或其他優惠用戶/ IBO 創業會員的銷售業績、獎金、售貨額，以及任何相關事項</p>
                <p style="text-indent:2em;">．出版任何翊豐刊物或推廣資料</p>
                <p style="text-indent:2em;">．推行或推廣翊豐服務、產品或有關性質之活動</p>
                <p style="text-indent:2em;">．與上述事項有關之用途</p>
                <p>&nbsp;</p>
                <p>個人資料之轉移</p>
                <p style="text-indent:2em;">你提交給翊豐的個人資料可能會轉達至翊豐國際集團有限公司。個人資料亦會於有需要時提供給下列有關人士：</p>
                <p style="text-indent:2em;">1  任何向翊豐提供服務的代理商、承造商或提供相關服務之第三者，有關服務涉及以下方面：</p>
                <p style="text-indent:4em;">．行政</p>
                <p style="text-indent:4em;">．公司營運、發展</p>
                <p style="text-indent:4em;">．產品或服務推廣</p>
                <p style="text-indent:4em;">．其他直接有關之服務</p>
                <p style="text-indent:2em;">2  與上述事項有關的香港或海外推薦人、IBO 創業會員/ 優惠用戶或有關人士</p>
                <p style="text-indent:2em;">3  根據有關法律，任何與翊豐有關之海外公司</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">如閣下不希望翊豐公司轉移或使用閣下的個人資料作上述推廣用途，請透過翊豐諮詢熱線 3743 0668、傳真號碼 3743 0700 或電郵 info@headwind.hk 通知翊豐公司業務部辦理。</p>
                <p>&nbsp;</p>
                <p>查閱及更改個人資料</p>
                <p style="text-indent:2em;">你有權確定翊豐是否持有你的個人資料、向翊豐索取個人資料之副本，以及要求更改不準確的資料。如有上述要求，請聯絡翊豐國際集團有限公司。</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">地址：香港九龍尖沙咀廣東道30號新港中心第一座6樓612室</p>
                <p style="text-indent:2em;">翊豐諮詢熱線：3743 0668</p>
                <p style="text-indent:2em;">對於上述要求，翊豐將收取港幣 $30之手續費。</p>
              </div>
              <div v-else>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">Each of the staff of Fufeng International Group Co., Ltd. (hereinafter referred to as "the Company") is responsible for protecting the privacy of personal data. We respect personal data and fully implement and comply with the data protection principles and the relevant provisions of the Personal Data (Privacy) Ordinance.</p>
                <p style="text-indent:2em;">The Company will not collect any personally identifiable information ("Personal Data") when customers visit this website. When a customer visits our website, we only record their browsing as a "number of clicks" and do not collect any personal data.</p>
                <p>&nbsp;</p>
                <p>The personal data category of the company</p>
                <p style="text-indent:2em;">In summary, there are two main categories of personal data held by the company, which are recorded in the following records:</p>
                <p>&nbsp;</p>
                <p>Comments and inquiry records:</p>
                <p style="text-indent:2em;">This includes information provided by data users, information collected on enquiries and relevant opinions. The purpose is to respond to and follow up on the enquiries and opinions collected.</p>
                <p>&nbsp;</p>
                <p>Purchase registration record:</p>
                <p style="text-indent:2em;">Retail Members/Offer Users/IBO Entrepreneur members can use the purchase service to enter the online purchase on the Internet. HSBC Internet will only deliver the goods according to the address you provided in advance; this way, even if someone illegally uses your number and password, you will not be able to obtain the goods. However, you must keep your account name and password in a safe place.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>Yifeng International Group Co., Ltd.</p>
                <p>Data protection and privacy policy</p>
                <p style="text-indent:2em;">This notice describes the responsibilities and policies of HSBC International Holdings Limited ("HYF") for the protection of data and privacy policies.</p>
                <p>&nbsp;</p>
                <p>Purpose of collecting personal data</p>
                <p style="text-indent:2em;">The personal information you submit to Fufeng will be used for the following purposes:</p>
                <p style="text-indent:2em;">. Dealing with preferential users / IBO entrepreneur membership application</p>
                <p style="text-indent:2em;">. If the preferential user / IBO entrepreneur member needs to upload a personal identification document, it needs to bear certain risks. Therefore, Fufeng advocates to apply in person to Yifeng International Group Co., Ltd.</p>
                <p style="text-indent:2em;">. Operation, Management or Development of Preferred Users / IBO Entrepreneurial Member Services and Referral Programs</p>
                <p style="text-indent:2em;">. Organize seminars, training or market development activities</p>
                <p style="text-indent:2em;">. Assess and revise the sales performance, bonuses, sales amount, and any related matters of you, your partners, referees, or other preferential users/ IBO entrepreneurs when necessary</p>
                <p style="text-indent:2em;">. Publish any HSBC publications or promotional materials</p>
                <p style="text-indent:2em;">. Promote or promote HSBC services, products or activities of a relevant nature</p>
                <p style="text-indent:2em;">. Use in connection with the above matters</p>
                <p>&nbsp;</p>
                <p>Transfer of personal data</p>
                <p style="text-indent:2em;">The personal data you submit to Fufeng may be transferred to Fufeng International Group Co., Ltd. Personal data will also be provided to the following persons if necessary:</p>
                <p style="text-indent:2em;">1 Any agent, contractor or third party providing services to HSBC shall have the following services:</p>
                <p style="text-indent:4em;">. administrative</p>
                <p style="text-indent:4em;">. Company operation and development</p>
                <p style="text-indent:4em;">. Product or service promotion</p>
                <p style="text-indent:4em;">. Other directly related services</p>
                <p style="text-indent:2em;">2 Hong Kong or overseas referees, IBO entrepreneurs/privileged users or related persons related to the above matters</p>
                <p style="text-indent:2em;">3 According to relevant laws, any overseas company related to Fufeng</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">If you do not wish to transfer or use your personal data for the above promotional purposes, please inform the HSBC Business Unit through the HSBC Hotline 3743 0668, fax number 3743 0700 or email info@headwind.hk.</p>
                <p>&nbsp;</p>
                <p>Access and change your personal information</p>
                <p style="text-indent:2em;">You have the right to determine whether HSBC holds your personal data, requests a copy of your personal data from HSBC, and requests that you change the inaccurate information. If you have any of the above requirements, please contact Yifeng International Group Co., Ltd.</p>
                <p>&nbsp;</p>
                <p style="text-indent:2em;">Address: Room 612, 6th Floor, Block 1, Newport Centre, 30 Canton Road, Tsim Sha Tsui, Kowloon, Hong Kong</p>
                <p style="text-indent:2em;">Fufeng Consulting Hotline: 3743 0668</p>
                <p style="text-indent:2em;">For the above requirements, HSBC will charge a handling fee of HK$30.</p>
              </div>
            </div>
            <div v-if="id==2">
              <div v-if="lang=='zh'">
                <p>&nbsp;</p>
                <p>在翊豐國際購物，接受哪些付款方式？</p>
                <p style="text-indent:2em;">在翊豐國際購物接受多種熱門的付款方式，包括Visa卡，Master卡，American Express，銀聯卡，EPS，支付寶，微信，Apple Pay，Google Pay，Samsung Pay。</p>
                <p>&nbsp;</p>
                <p>查詢貨品原產地?</p>
                <p style="text-indent:2em;">翊豐國際產品產地於韓國。</p>
                <p>&nbsp;</p>
                <p>如何修改個人資料?</p>
                <p style="text-indent:2em;">客人可致電或電郵到翊豐國際，公司職員會盡快處理。</p>
              </div>
              <div v-else>
                <p>&nbsp;</p>
                <p>What payment methods do you accept at Fufeng International Shopping?</p>
                <p style="text-indent:2em;">We accept a variety of popular payment methods at Fufeng International Shopping, including Visa, Master, American Express, UnionPay, EPS, Alipay, WeChat, Apple Pay, Google Pay, and Samsung Pay.</p>
                <p>&nbsp;</p>
                <p>Check the origin of the goods?</p>
                <p style="text-indent:2em;">The company's products are produced in Korea.</p>
                <p>&nbsp;</p>
                <p>How to modify my profile?</p>
                <p style="text-indent:2em;">Guests can call or email to HSBC International and the company staff will process it as soon as possible.</p>
              </div>
            </div>
				</div>
			</div>
			<div class="date">
				<div class="flex al-c sp-b">
					<div>
						<p>{{$t('問題索引')}}</p>
						<p>Question Index</p>
					</div>
					<i class="down"></i>
				</div>
				<ul>
					<router-link :to="`/faq?id=${ulIndex}`" tag="li" v-for="(item,ulIndex) in arr" :key="ulIndex">
						<i></i>{{$t(item.name)}}
						<!-- <ul :class="item.active?'':'hide'" @click.stop>
							<li v-for="(item,liIndex) in arr[ulIndex].arr" :key="liIndex">{{item.name}}</li>
						</ul> -->
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "faq",
  data() {
    return {
      arr: [
        {name: "免責聲明",enTitle:"Disclaimer"},
        {name: "私隱政策",enTitle:"Privacy Policy"},
        {name: "常見問題",enTitle:"Common Problem"}
      ]
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    lang() {
      return this.$store.state.app.language;
    }
  },
  methods: {
    init(){
      let label=this.arr[this.id].name,enTitle=this.arr[this.id].enTitle;
      this.$store.dispatch("setBreadCrumbs", [
        { label, isI18n: true }
      ]);
      document.title = this.$store.state.app.language == "zh" ? label : enTitle;
    }
  },
  watch: {
    id: {
      handler() {
        this.init();
      },
      deep: true
    }
  },
  created() {
    this.init();
    this.$store.dispatch("setMenuI", 0);
  }
};
</script>

<style scoped>
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.flex {
  display: flex;
}
.al-c {
  align-items: center;
}
.sp-b {
  justify-content: space-between;
}
.content {
  width: 70%;
}
.content > div > h2 {
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #a5d4e6;
  margin-bottom: 10px;
}
.content > div  p {
  color: #666;
  font-size: 16px;
  line-height: 32px;
}
.content > div > h2 > i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 3px solid #86c5dd;
  margin-right: 8px;
}
.date {
  width: 28%;
  margin-left: 2%;
  /*padding-left: 60px;*/
  box-sizing: border-box;
  border-left: 1px solid #ededed;
}
.date > div {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  box-shadow: 0 7px 5px -3px #ddd;
  padding-left: 20px;
  margin-left: 60px;
}
.date > div > div > p:first-child {
  color: #4ca9cd;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
}
.date > div > div > p:last-child {
  color: #4ca9cd;
  font-size: 18px;
  opacity: 0.5;
}
.date > div > i {
  width: 25px;
  height: 25px;
  background: url(./img/down.png) no-repeat;
  background-size: 100%;
  background-position: 50%;
  margin-right: 20px;
}
.date > ul > li {
  border-bottom: 1px solid #ededed;
  padding: 20px 0;
  padding-left: 60px;
  color: #4ca9cd;
  font-size: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}
/*.date>ul>li:hover{
    text-decoration: underline;
}*/
.date > ul > li > ul {
  width: 100%;
  padding-left: 38px;
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  cursor: auto;
}
.date > ul > li > ul > li {
  padding: 8px 0;
  cursor: pointer;
}
.date > ul > li > ul > li:hover {
  text-decoration: underline;
}
.date > ul > li > i {
  width: 18px;
  height: 18px;
  background: url(./img/right.png) no-repeat;
  background-size: 100%;
  background-position: 50%;
  margin-right: 20px;
}
.hide {
  display: none;
}
</style>