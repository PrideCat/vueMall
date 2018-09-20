<template>
  <div class="main defuWidth">
    <div class="m_title">
      <p class="s24">{{info.name}}</p>
      <p class="s14 c6">PLANTSCRIPTION</p>
    </div>
    <div class="m_head fbox">
      <div class="h_pic">
        <div><img :src="info.pic"></div>
        <div>
          <ul class="fbox">
            <li><img :src="info.pic"></li>
          </ul>
        </div>
      </div>
      <div class="h_info flex">
        <div class="i_txt">
          <p>{{info.content}}</p>
          <!-- <p>價值 $1,330</p>
          <p>套裝包括︰</p>
          <p>PLANTSCRIPTION™ 悅肌再生逆齡抗皺精華 30ml</p>
          <p>PLANTSCRIPTION™ 悅肌再生潔面乳 150ml</p>
          <p>PLANTSCRIPTION™ 悅肌再生緊緻塑顏霜 15ml</p>
          <p>MEGA MUSHROOM 靈芝菇菌抗逆健膚紓緩水 30ml</p>
          <p>PLANTSCRIPTION™ 悅肌再生眼部修護霜 5ml</p> -->
        </div>
        <div class="i_content">
          <div class="c_inputBox fbox s16 f_jc_sb">
            <div class="fbox f_si_c flex">
              <p class="flex fbox f_jc_sb c6">
                <span>
                  <span class="c2">HK:</span>${{money}}
                </span>
                <span>{{$t('數量')}}:</span>
              </p>
              <p><input class="ct b5 c1 s16" type="text" v-model="info.amount"></p>
            </div>
            <p class="fbox">
              <a class="posct c6" href="javascript:void(0);" @click="addCart(info.id,info.amount)">{{$t('加入購物車')}}</a>
              <router-link class="posct b5 c1" :to="`/payment?items=${encodeURIComponent(JSON.stringify([info]))}`" tag="a">{{$t('立即購買')}}</router-link>
            </p>
          </div>
          <div class="c_psTxt fbox f_jc_sb f_si_c">
            <p class="s16 c6 fbox f_si_c">
              <i class="s14">i</i>
              <b>{{$t('購買此商品可以獲得')+' '+info.integral+' '+$t('積分')}}</b>
            </p>
            <p class="fbox f_si_c">
              <a href="javascript:void(0);" @click="addFavorite(info.id)">
                <span class="fbox f_si_c">
                  <img src="./img/icon1.jpg">{{$t('收藏')}}
                </span>
              </a>
              <a href="javascript:void(0);">
                <span class="fbox f_si_c">
                  <img src="./img/icon2.jpg">{{$t('推介')}}
                </span>
              </a>
            </p>
          </div>
          <div class="c_tag c2">
            <div class="fbox">
              <p class="fbox f_si_c">
                <img src="./img/icon3.jpg">
                <span>{{$t('正品保障')}}</span>
              </p>
              <p class="fbox f_si_c">
                <img src="./img/icon4.jpg">
                <span>{{$t('天然萃取')}}</span>
              </p>
            </div>
            <!-- <div>
              <p class="fbox f_si_c">
                <img src="./img/icon5.jpg">
                <span>{{$t('微信分享')}}</span>
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="m_body defuWidth b7">
      <p class="s16">{{$t('產品介紹')}}</p>
      <div class="fbox">
        <ul style="width:100%;">
          <li v-for="(item,index) in details" :key="index">
            <img style="max-width:100%;" :src="item.pic" />
          </li>
        </ul>
        <!-- <div class="c2">
          <p>
            ageLOC®專屬淨膚露 / 霜的研製，是為了在 LumiSpa申請專利中的導頭與皮膚接觸時提供精確的緩衝、清潔，增強抗衰老效益。
          </p>
          <p>
            水(Aqua)、碳酸二辛酯、蘋果酸二異硬脂酸、Tribehenin PEG-20 Esters、甘油、甘油醇26、角鯊烷、鯨蠟醇、矽靈、辛 酸/癸酸/肉豆蔻酸/硬脂酸甘油三酯、木鲁星果棕油酸钠、水 稻(米)提取物、五味子果實提取物、葉黃素、歐洲水仙花球提 取物、丙烯酸酯/丙烯酸C 10-30烷基酯交聯聚合物、烟酰胺、 尿素、Methylsilanol Hydroxyproline Aspartate、 聚氧乙烯 (40)氫化蓖麻油、乳酸鈉、Sodium PCA、植物油、 黃原膠、 鯊肝醇、丁二醇、戊二醇、植物甾醇/辛基十二醇月桂醯谷氨酸 酯、麥芽糊精、芸薹油醯胺丙基二甲基胺、羥苯基丙醯胺苯 甲酸、水楊醯植物鞘氨醇、果糖、甘氨酸、肌醇、乳酸、卵磷 脂、苯氧乙醇、羥基苯乙酮、Disodium EDTA, Sodium Hydroxide、香味(香水)
          </p>
        </div>
        <div>
          <ul class="fbox">
            <li><img src="./img/bg.png"></li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productInfo",
  data() {
    return {
      info: {},
      details: []
    };
  },
  computed: {
    money() {
      return this.info.money * this.info.amount;
    },
    lang() {
      return this.$store.state.app.language;
    }
  },
  watch: {
    info: {
      handler(val) {
        if (val.amount <= 0) this.info.amount = 1;
      },
      deep: true
    }
  },
  methods: {
    addCart(cid, amount) {
      this.ajax({
        apiName: "addCart",
        data: {
          cid,
          amount
        }
      }).then(res => {
        this.$store.dispatch("setCartsLen", this.$store.state.app.cartsLen + 1);
        console.log(res);
      });
    },
    addFavorite(cid) {
      this.ajax({
        apiName: "addFavorite",
        data: {
          cid
        }
      }).then(res => {
        console.log(res);
        this.$message.success(
          this.lang == "zh" ? "收藏成功" : "Successful collection"
        );
      });
    }
  },
  created() {
    let type = this.$route.query.type;
    const id = this.$route.query.id;
    let breadCrumbs = [{ label: "全部產品", isI18n: true, src: "/product" }];

    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", breadCrumbs);

    this.ajax({
      apiName: "commodityInfo",
      data: {
        id
      }
    }).then(res => {
      console.log(res);
      res.data.checked = true;
      res.data.amount = 1;
      this.info = res.data;
      this.details = res.details;

      if (this.info) type = this.info.type;
      if (type !== undefined)
        breadCrumbs.push({
          label: this.$store.state.app.productCategories.filter(
            v => v.type == type
          )[0].name,
          isI18n: true,
          src: `/products?type=${type}`
        });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .m_title {
  line-height: 30px;
}
.main .m_head .h_pic div img {
  border: 1px solid #ccc;
}
.main .m_head .h_pic div:first-child img {
  width: 526px;
  height: 324px;
}
.main .m_head .h_pic div:last-child {
  width: 528px;
  overflow: auto;
}
.main .m_head .h_pic div:last-child ul {
  margin-top: 20px;
}
.main .m_head .h_pic div:last-child ul li img:hover {
  border-color: #4ca9cd;
}
.main .m_head .h_pic div:last-child ul li + li {
  margin-left: 20px;
}
.main .m_head .h_pic div:last-child ul li img {
  width: 98px;
  height: 98px;
}
.main .m_head .h_info {
  margin-left: 70px;
}
.main .m_head .h_info .i_txt {
  line-height: 24px;
}
.main .m_head .h_info .i_content {
  margin-top: 25px;
}
.main .m_head .h_info .i_content .c_inputBox > div {
  border: 1px solid #ccc;
  height: 44px;
  margin-right: 30px;
}
.main .m_head .h_info .i_content .c_inputBox > div p:first-child {
  padding: 0 20px;
}
.main .m_head .h_info .i_content .c_inputBox > div p input {
  width: 45px;
  height: 44px;
  border: 0;
}
.main .m_head .h_info .i_content .c_inputBox > p a {
  border: 2px solid #4ca9cd;
  min-width: 87px;
  height: 42px;
  margin: 0 5px;
  padding: 0 10px;
  white-space: nowrap;
}
.main .m_head .h_info .i_content .c_psTxt {
  margin-top: 18px;
  margin-bottom: 50px;
}
.main .m_head .h_info .i_content .c_psTxt p:first-child i {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid;
  font: initial;
  text-align: center;
  line-height: 16px;
  border-radius: 50%;
  transform: rotate(180deg);
  margin-right: 0.8em;
}
.main .m_head .h_info .i_content .c_psTxt p:last-child img {
  width: 16px;
  height: 16px;
}
.main .m_head .h_info .i_content .c_psTxt p span {
  margin-right: 18px;
}
.main .m_head .h_info .i_content .c_psTxt p span img {
  margin-right: 4px;
}
.main .m_head .h_info .i_content .c_tag p {
  margin-right: 30px;
}
.main .m_head .h_info .i_content .c_tag div:last-child p {
  margin-top: 18px;
  text-decoration: underline;
}
.main .m_head .h_info .i_content .c_tag p img {
  margin-right: 10px;
}
.main .m_body {
  margin-top: 40px;
  padding: 40px;
  box-sizing: border-box;
}
.main .m_body > p {
  margin-bottom: 25px;
  position: relative;
}
.main .m_body > p:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 4px solid #4ca9cd;
  top: 0;
  bottom: 0;
  margin: auto;
  left: -24px;
}
.main .m_body > div > div:first-child {
  width: 485px;
  min-width: 485px;
  margin-right: 70px;
  line-height: 30px;
}
.main .m_body > div > div:first-child p {
  margin-bottom: 10px;
}
.main .m_body > div > div:last-child {
  width: 605px;
  overflow: auto;
}
.main .m_body > div > div:last-child ul li + li {
  margin-left: 30px;
}
.main .m_body > div > div:last-child ul li img {
  width: 338px;
  height: 348px;
}
::-webkit-scrollbar-track-piece {
  background-color: #f8f8f8;
}
::-webkit-scrollbar {
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
</style>
