<template>
  <div class="main">
    <div class="m_head defuWidth">
      <div class="h_pic">
        <img src="./img/bg.png">
      </div>
    </div>
    <div class="m_body">
      <ul class="defuWidth fbox ct s18">
        <li v-for="(item,index) in items" :key="index">
          <p><img :src="item.pic"></p>
          <p class="c6">{{item.name}}</p>
          <p>
            <span class="c2">HK</span>
            <span class="c3">${{item.money}}</span>
          </p>
          <p>
            <a class="c1 b5 s16" href="javascript:void(0);" @click="addCart(item.id,1)">
              <b>{{$t("加入購物車")}}</b>
            </a>
          </p>
          <p>
            <router-link class="c6 s14" :to="`/productInfo?type=${type}&id=${item.id}`" tag="a">{{$t("了解詳情")}}>></router-link>
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
      items: []
    };
  },
  computed: {
    type() {
      return this.$route.query.type;
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
    }
  },
  created() {
    const type = this.type;
    const name = this.$route.query.searchTxt;
    let data = {
      name,
      sort: 0,
      no: 1,
      size: -1,
      dir: 0
    };
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
    this.ajax({
      apiName: "commoditys",
      data
    }).then(res => {
      console.log(res);
      this.items = res.data.items;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .m_head .h_pic {
  margin-bottom: 30px;
}
.main .m_body ul {
  flex-wrap: wrap;
}
.main .m_body ul li:nth-child(n + 5) {
  margin-top: 30px;
}
.main .m_body ul li {
  margin-right: 30px;
  border: 1px solid #ccc;
}
.main .m_body ul li:nth-child(4n) {
  margin-right: 0;
}
.main .m_body ul li:hover {
  border-color: #4ca9cd;
}
.main .m_body ul li img {
  width: 274px;
  height: 220px;
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
