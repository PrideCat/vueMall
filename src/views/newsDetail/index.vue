<template>
  <div>
    <div class="w1200 flex">
      <div class="content">
        <div class="contentHead">
          <h2>{{itemInfo.name}}</h2>
          <div>
            <span>{{itemInfo.createTime}}</span>
            <span>
              <!-- 叽叽叽叽 -->
            </span>
          </div>
        </div>
        <div class="contentTxt">
          <p v-html='itemInfo.content'></p>
        </div>
      </div>
      <div class="date">
        <div class="flex al-c sp-b">
          <div>
            <p>{{$t('年份索引')}}</p>
            <p>Vintage Index</p>
          </div>
          <i class="down"></i>
        </div>
        <ul>
          <router-link :to="`/${$route.name.replace('Detail','')}?year=2018`" tag="li">
            <i></i>2018
          </router-link>
          <router-link :to="`/${$route.name.replace('Detail','')}?year=2019`" tag="li">
            <i></i>2019
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsDetail",
  data() {
    return {
      itemInfo: JSON.parse(this.$route.query.itemInfo)
    };
  },
  methods: {
    fetchDate() {
      const routeName = this.$route.name;
      let menuI;
      let label;
      switch (routeName) {
        case "newsDetail":
          menuI = 1;
          label = "最新資訊";
          break;
        case "careDetail":
          menuI = 1;
          label = "關愛社會";
          break;
        case "companyDetail":
          menuI = 1;
          label = "公司事件";
          break;
      }
      this.$store.dispatch("setMenuI", menuI);
      this.$store.dispatch("setBreadCrumbs", [
        { label, isI18n: true, src: `/${routeName.replace("Detail", "")}` }
      ]);
    }
  },
  watch: {
    $route: "fetchDate"
  },
  created() {
    console.log(this.itemInfo);
    this.fetchDate();
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
.contentHead h2 {
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
}
.contentHead div {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}
.contentHead div span:last-child {
  border-left: 1px solid #999;
  margin-left: 20px;
  padding-left: 20px;
}
.contentTxt {
  font-size: 16px;
  line-height: 40px;
}
.contentHead {
  border-bottom: 1px solid #ededed;
  margin-bottom: 20px;
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
}
.date > ul > li:hover {
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
</style>