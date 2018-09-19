<template>
	<div>
		<div class="w1200 flex">
			<div class="content">
				<div>
					<h3>
						<i></i>08月</h3>
					<ul>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
					</ul>
				</div>
				<div>
					<h3>
						<i></i>08月</h3>
					<ul>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
					</ul>
				</div>
				<div>
					<h3>
						<i></i>08月</h3>
					<ul>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
						<li>
							<span>2018.08.14</span>
							<p>1234657896412315</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="date">
				<div class="flex al-c sp-b">
					<div>
						<p>年份索引</p>
						<p>Vintage Index</p>
					</div>
					<i class="down"></i>
				</div>
				<ul>
					<li>
						<i></i>2018年</li>
					<li>
						<i></i>2018年</li>
					<li>
						<i></i>2018年</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "news",
  created() {
    this.$store.dispatch("setMenuI", 1);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "最新資訊", isI18n: true }
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