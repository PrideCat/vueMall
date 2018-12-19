<template>
  <div class="main">
    <div class="m_head defuWidth">
      <div class="h_pic">
        <img src="./img/bg.png">
      </div>
      <div class="h_search fbox">
        <p class="fbox flex">
          <input
            class="flex s16"
            type="text"
            :placeholder="$t('輸入您想要搜索的產品')"
            v-model="data.name"
          >
        </p>
        <p class="b5 c1 fbox">
          <a
            class="flex posct s18"
            href="javascript:void(0);"
            @click="init"
          >{{$t("搜索")}}</a>
        </p>
      </div>
    </div>
    <div class="m_body">
      <p
        class="c2 ct s18"
        style="padding-bottom:200px;"
        v-if="isVip"
      >{{$t(theTxt)}}</p>
      <ul
        class="defuWidth fbox ct s18"
        v-else
      >
        <li
          v-for="(item,index) in items"
          :key="index"
        >
          <router-link
            class="cursor-p"
            :to="`/productInfo?type=${type}&id=${item.id+(userInfo&&userInfo.type===1&&item.type===1?`&uid=${userInfo.uid}`:'')}`"
            tag="p"
          ><img :src="item.pic"></router-link>
          <router-link
            class="c6 cursor-p"
            :to="`/productInfo?type=${type}&id=${item.id+(userInfo&&userInfo.type===1&&item.type===1?`&uid=${userInfo.uid}`:'')}`"
            tag="p"
          >{{item.name}}</router-link>
          <p>
            <span class="c2">USD</span>
            <span class="c3">${{isRetail?item.retail:item.money}}</span>
          </p>
          <p>
            <a
              class="c1 b5 s16"
              href="javascript:void(0);"
              @click="addCart(item.id,1)"
            >
              <b>{{$t("加入購物車")}}</b>
            </a>
          </p>
          <p>
            <router-link
              class="c6 s14"
              :to="`/productInfo?type=${type}&id=${item.id}`"
              tag="a"
            >{{$t("了解詳情")}}>></router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      items: [],
      searchTxt: "",
      data: {
        name: "",
        sort: 0,
        no: 1,
        size: -1,
        dir: 0
      },
      isVip: false,
      theTxt: "當前頁面為會員套餐頁面!",
      isRetail: false
    };
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    lang() {
      return this.$store.state.app.language;
    },
    userInfo() {
      return this.$store.state.app.userInfo;
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
        this.$message.success({
          message:
            this.lang == "zh" ? "加入購物車成功" : "Add to Cart successful"
        });
        console.log(res);
      });
    },
    init() {
      this.ajax({
        apiName: "commoditys",
        data: this.data
      }).then(res => {
        console.log(res);
        this.items = res.data.items;
      });
    },
    init1() {

      this.isVip = false;
      this.isRetail = false;

      if ((!this.userInfo&&this.data.type!=="0") || (this.userInfo && this.userInfo.type !== 1 && this.data.type !== "0")){
        this.isVip = true;
        this.theTxt = "當前頁面為會員套餐頁面!";
      } else if (this.userInfo && this.userInfo.type === 1 && this.data.type === "0"){
        this.isVip = true;
        this.theTxt = "當前頁面為零售套餐頁面!";
      }

      if(!this.userInfo || (this.userInfo.type === 0 && (this.data.type === "0"||this.data.type === "1"))){
        this.isRetail = true;
      }

    }
  },
  created() {

    document.title = this.$store.state.app.language == "zh" ? "產品分類" : "Product Categories";
    const type = this.type;
    let data = this.data;
    let breadCrumbs = [{ label: "全部產品", isI18n: true, src: "/product" }];

    if (type !== undefined) {
      data.type = type;
      breadCrumbs.push({
        label: this.$store.state.app.productCategories.filter(
          v => v.type == type
        )[0].name,
        isI18n: true
      });
    }

    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", breadCrumbs);

    this.init();
    this.init1();

  },
  watch: {
    userInfo: {
      handler() {
        this.init1();
      },
      deep: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .m_head .h_pic {
  margin-bottom: 30px;
}
.main .m_head .h_search {
  margin: 19px 0 40px;
}
.main .m_head .h_search p:first-child {
  position: relative;
}
.main .m_head .h_search p:first-child:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid #ccc;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 20px;
  margin: auto;
}
.main .m_head .h_search p:first-child:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 2px;
  background: #ccc;
  top: 15px;
  bottom: 0;
  left: 31px;
  margin: auto;
  transform: rotate(45deg);
}
.main .m_head .h_search p:first-child input {
  padding-left: 3em;
}
.main .m_head .h_search p:last-child {
  width: 160px;
  height: 65px;
}
.main .m_head .h_search p:last-child a {
  opacity: 0.5;
}
.main .m_head .h_search p:last-child a:hover {
  opacity: 1;
}
.main .m_body ul {
  flex-wrap: wrap;
}
.main .m_body ul li:nth-child(n + 5) {
  margin-top: 30px;
}
.main .m_body ul li {
  width: 274px;
  margin-right: 30px;
  border: 1px solid #ccc;
}
.main .m_body ul li:nth-child(4n) {
  margin-right: 0;
}
.main .m_body ul li:hover {
  border-color: #4ca9cd;
}
.main .m_body ul li p:first-child{
  width: 274px;
  height: 220px;
  line-height: 220px;
  text-align: center;
}
.main .m_body ul li img {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.main .m_body ul li p:nth-child(2) {
  margin-top: 40px;
  text-decoration: underline;
}
.main .m_body ul li p:nth-child(3) {
  margin: 10px 0 25px;
}
.main .m_body ul li p:nth-child(4) a {
  line-height: 44px;
  display: inline-block;
  min-width: 45%;
  border-radius: 5px;
  padding: 0 10%;
}
.main .m_body ul li p:last-child {
  padding: 10px 0 25px;
}
</style>
