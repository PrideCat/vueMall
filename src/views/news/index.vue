<template>
  <div>
    <div class="w1200 flex">
      <div class="content">
        <div v-for="(item,index) in items" :key="index">
          <h3>
            <i></i>{{$t(item.month+'月')}}</h3>
          <ul>
            <li v-for="(items,indexs) in item.children" :key="indexs">
              <span>{{items.createTime.toTimes().format("yyyy-MM-dd")}}</span>
              <router-link :to="`/${$route.name}Detail?itemInfo=${encodeURIComponent(JSON.stringify(items))}`" tag="p">{{items.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="date">
        <div class="flex al-c sp-b">
          <div>
            <p>{{$t('年份索引')}}</p>
            <p>Year Index</p>
          </div>
          <i class="down"></i>
        </div>
        <ul>
          <li @click="init(type,'2018')">
            <i></i>2018
          </li>
          <li @click="init(type,'2019')">
            <i></i>2019
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      items: [],
      type: 0
    };
  },
  methods: {
    init(type, year) {
      this.ajax({
        apiName: "news",
        data: {
          type,
          year,
          no: 1,
          size: -1
        }
      }).then(res => {
        console.log(res);

        let items = [];

        res.data.items.forEach(v => {
          let month = v.createTime.toTimes().format("MM");
          if (
            !items.some(v => {
              return v.month == month;
            })
          )
            items.push({ month, children: [] });
          items[items.length - 1].children.push(v);
        });
        this.items = items;
      });
    },
    fetchDate() {
      const routeName = this.$route.name;
      const year = this.$route.query.year;
      let type = this.type;
      let menuI;
      let label;
      switch (routeName) {
        case "news":
          type = 0;
          menuI = 1;
          label = "最新資訊";
          break;
        case "care":
          type = 2;
          menuI = 1;
          label = "關愛社會";
          break;
        case "company":
          type = 1;
          menuI = 1;
          label = "公司事件";
          break;
      }
      this.init(type, year || "2018");
      this.$store.dispatch("setMenuI", menuI);
      this.$store.dispatch("setBreadCrumbs", [{ label, isI18n: true }]);
    }
  },
  watch: {
    $route: "fetchDate"
  },
  created() {
    document.title = this.$store.state.app.language == "zh" ? "最新資訊" : "Latest News";
    const todate = new Date();
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
.content > div {
  margin-bottom: 30px;
}
.content > div > h3 {
  font-size: 18px;
  color: #000;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 2px solid #a5d4e6;
}
.content > div > h3 > i {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  border: 3px solid #85c5dd;
  margin-right: 8px;
}
.content > div > ul > li {
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px dashed #ddd;
  color: #666;
}
.content > div > ul > li > span {
  margin: 0 20px;
}
.content > div > ul > li > p {
  color: #4ca9cd;
}
.content > div > ul > li > p:hover {
  text-decoration: underline;
  cursor: pointer;
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