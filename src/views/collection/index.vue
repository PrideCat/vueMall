<template>
  <div>
    <div class="defuWidth s_head">
      <p class="fbox f_si_c">
      </p>
      <div class="m_item c7">
        <div class="fbox i_title i_col">
          <p></p>
          <p class="flex">{{$t('商品')}}</p>
          <p class="posct">{{$t('單價')}}</p>
          <p></p>
        </div>
        <div class="i_list">
          <ul>
            <li class="fbox i_col f_si_c" v-for="(item,index) in items" :key="index">
              <p class="posct">
              </p>
              <p class="flex fbox f_si_c">
                <img :src="item.pic">
                <span>
                  <router-link class="c6" style="cursor:pointer;" :to="`/productInfo?id=${item.cid}`" tag="span">{{item.name}}</router-link>
                  <!-- <span class="c3">
                    <b class="s16">snowkids 美白套装</b>
                  </span>
                  <span>0.17 FL. OZ. / 5 ML</span> -->
                </span>
              </p>
              <p class="posct"></p>
              <p class="posct">
              </p>
              <p class="posct">
                <span>HK</span>&nbsp;
                <span class="c6">${{item.money}}</span>
              </p>
              <p class="posct">
                <i @click.stop="removeFavorite(item.id)">×</i>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="s_body c7">
      <div class="defuWidth">
        <div class="fbox f_si_c f_jc_sb">
          <p class="s12">
          </p>
          <p class="fbox f_si_c">
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collection",
  data() {
    return {
      items: []
    };
  },
  computed: {},
  methods: {
    removeFavorite(id) {
      this.ajax({
        apiName: "removeFavorite",
        data: {
          id
        }
      }).then(res => {
        console.log(res);
        this.init();
      });
    },
    init() {
      this.ajax({
        apiName: "favorites",
        data: {
          name: "",
          no: 1,
          size: -1
        }
      }).then(res => {
        this.items = res.data.items;
      });
    }
  },
  watch: {},
  created() {
    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "全部產品", isI18n: true, src: "/product" }
    ]);
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checkBox {
  display: inline-block;
  width: 12px;
  line-height: 12px;
  border: 1px solid #ccc;
  margin: 10px;
  font-style: initial;
  text-align: center;
  color: transparent;
}
.checkBox.checked {
  color: #000;
}
.m_item {
  border: 1px solid #ccc;
  border-top: 2px solid #4ca9ce;
}
.i_col > p:first-child {
  width: 54px;
}
.i_col > p:nth-child(n + 3) {
  width: 150px;
}
.i_col > p:last-child {
  width: 108px;
}
.i_col > p:last-child i {
  font-style: initial;
  font-size: 40px;
  cursor: pointer;
}
.i_col.i_title {
  line-height: 46px;
  border-bottom: 1px solid #ccc;
}
.i_list .i_col {
  padding: 20px 0;
}
.i_list .i_col:hover {
  background: #edfaff;
}
.i_list .i_col + .i_col {
  border-top: 1px solid #f1f1f1;
}
.i_list .i_col p img {
  width: 104px;
  height: 104px;
  border: 1px solid #ccc;
  margin-right: 18px;
}
.i_list .i_col p span {
  display: block;
  margin: 4px 0;
}
.i_list .i_col p input {
  width: 78px;
  height: 34px;
  border: 1px solid #ccc;
  padding: 0 1em;
  box-sizing: border-box;
}
.s_body {
  margin-top: 31px;
  box-shadow: 0 -10px 10px -5px rgba(158, 158, 158, 0.2);
  padding-top: 22px;
}
.s_body div p:first-child a {
  margin-right: 20px;
}
.s_body div p:last-child a {
  min-width: 130px;
  height: 50px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}
.s_body > div > div:last-child > p {
  margin: 40px 0 30px;
}
.s_body ul {
  flex-wrap: wrap;
}
.s_body ul li:nth-child(n + 5) {
  margin-top: 30px;
}
.s_body ul li {
  margin-right: 30px;
  border: 1px solid #ccc;
}
.s_body ul li:nth-child(4n) {
  margin-right: 0;
}
.s_body ul li:hover {
  border-color: #4ca9cd;
}
.s_body ul li img {
  width: 274px;
  height: 220px;
}
.s_body ul li p:nth-child(2) {
  margin-top: 40px;
  text-decoration: underline;
}
.s_body ul li p:nth-child(3) {
  margin: 10px 0 25px;
}
.s_body ul li p:nth-child(4) a {
  line-height: 44px;
  display: inline-block;
  min-width: 45%;
  border-radius: 5px;
  padding: 0 10%;
}
.s_body ul li p:last-child {
  padding: 10px 0 25px;
}
</style>
