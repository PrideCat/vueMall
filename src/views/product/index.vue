<template>
  <div class="main">
    <div class="m_head defuWidth">
      <div class="h_pic">
        <img src="./img/bg.png">
      </div>
    </div>
    <div class="m_body">
      <ul class="defuWidth fbox f_jc_sb">
        <router-link class="cursor-p" :to="`/products?type=${item.type}`" tag="li" v-for="(item,index) in $store.state.app.productCategories" :key="index">
          <p><img src="./img/bg.png"></p>
          <p class="fbox f_jc_sb f_si_c">
            <span class="c3 s22">{{$t(item.name)}}</span>
            <b class="s16 c6 b1" href="javascript:void(0);">{{$t("查看分類")}}></b>
          </p>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    document.title = this.$store.state.app.language == "zh" ? "產品" : "Product";
    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "全部產品", isI18n: true }
    ]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .m_breadCrumbs {
  border-bottom: 1px solid #f1f1f1;
  line-height: 53px;
  margin-bottom: 39px;
}
.main .m_body ul {
  flex-wrap: wrap;
  margin-top: 40px;
}
.main .m_body ul li {
  margin-bottom: 60px;
}
.main .m_body ul li:nth-child(2n) {
  margin-left: 28px;
}
.main .m_body ul li img {
  width: 586px;
  height: 300px;
}
.main .m_body ul li:hover img {
  box-shadow: 0 0 5px 1px #4ca9cd;
}
.main .m_body ul li p:last-child {
  margin-top: 20px;
}
.main .m_body ul li p:last-child b {
  padding: 0 24px;
  line-height: 38px;
  border-radius: 3px;
  border: 1px solid #4ca9cd;
  white-space:nowrap;
}
.main .m_body ul li:hover p:last-child b {
  background: #4ca9cd;
  color: #fff;
}
</style>
