<template>
	<div>
		<div class="w1200 flex">
			<div class="content">
				<div>
					<h2>
						<i></i>{{$t('如何下單')}}</h2>
					<p>影片中，安迪锒铛入狱，身陷囹圄，生活从此受到束缚，夜晚由此变得漫长。百无聊赖之中，自由的宣言被判官扼杀，清白的人格被监狱活埋。在武断的判决面前，他找不到申诉的理由，找不到陈辞的借口。心酸是他最好的态度，无奈是他最棒的心情。因为在肖申克，没有最坏，只有更坏。无罪之身，进入黑暗之地，让步就是希望，抵抗就是死亡。狱友死的那一夜他明白了，获得救赎唯一的方式便是自救。宁肯在尝试中失败，绝不在苟且中成功。与其在监狱里混吃等死，不如抓住机会背水一战!</p>
					<p>影片中，安迪锒铛入狱，身陷囹圄，生活从此受到束缚，夜晚由此变得漫长。百无聊赖之中，自由的宣言被判官扼杀，清白的人格被监狱活埋。在武断的判决面前，他找不到申诉的理由，找不到陈辞的借口。心酸是他最好的态度，无奈是他最棒的心情。因为在肖申克，没有最坏，只有更坏。无罪之身，进入黑暗之地，让步就是希望，抵抗就是死亡。狱友死的那一夜他明白了，获得救赎唯一的方式便是自救。宁肯在尝试中失败，绝不在苟且中成功。与其在监狱里混吃等死，不如抓住机会背水一战!</p>
					<p>影片中，安迪锒铛入狱，身陷囹圄，生活从此受到束缚，夜晚由此变得漫长。百无聊赖之中，自由的宣言被判官扼杀，清白的人格被监狱活埋。在武断的判决面前，他找不到申诉的理由，找不到陈辞的借口。心酸是他最好的态度，无奈是他最棒的心情。因为在肖申克，没有最坏，只有更坏。无罪之身，进入黑暗之地，让步就是希望，抵抗就是死亡。狱友死的那一夜他明白了，获得救赎唯一的方式便是自救。宁肯在尝试中失败，绝不在苟且中成功。与其在监狱里混吃等死，不如抓住机会背水一战!</p>
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
					<li v-for="(item,ulIndex) in arr" :key="ulIndex" @click="openLi(ulIndex)">
						<i></i>{{item.name}}
						<ul :class="item.active?'':'hide'" @click.stop>
							<li v-for="(item,liIndex) in arr[ulIndex].arr" :key="liIndex">{{item.name}}</li>
						</ul>
					</li>
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
        {
          name: "新手上路",
          active: false,
          arr: [
            { name: "如何注册" },
            { name: "如何注册2" },
            { name: "如何注册3" }
          ]
        },
        {
          name: "新手上路2",
          active: false,
          arr: [
            { name: "如何注册3" },
            { name: "如何注册4" },
            { name: "如何注册5" }
          ]
        },
        {
          name: "新手上路3",
          active: false,
          arr: [
            { name: "如何注册6" },
            { name: "如何注册7" },
            { name: "如何注册8" }
          ]
        }
      ]
    };
  },
  methods: {
    openLi(ulIndex) {
      if (this.arr[ulIndex].active) {
        this.arr[ulIndex].active = false;
      } else {
        this.arr[ulIndex].active = true;
      }
    }
  },
  created() {
    this.$store.dispatch("setMenuI", 0);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "如何下單", isI18n: true }
    ]);
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
.content > div > p {
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