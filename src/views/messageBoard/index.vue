<template>
	<div>
		<div class="w1200">
			<div><img src="./img/board.jpg"></div>
			<div class="bannerTxt">
				<span>{{$t('留言板')}}</span>
			</div>
			<div class="qAndA">
				<h2>{{$t('相關問答')}}</h2>
				<div style="margin-left: 20px;" v-for="(item,index) in items" :key="index">
					<h3>
						<i>{{$t('問')}}</i>{{item.name}}
						<span>&nbsp;&nbsp;&nbsp;&nbsp;{{item.createTime}}</span>
					</h3>
					<p>{{item.content}}</p>
					<div class="answer" v-if="item.reply">
						<i>{{$t('答')}}</i>
						<ul>
							<li>
								<p>{{item.reply}}</p>
								<!-- <span>雷猴啊&nbsp;&nbsp;&nbsp;&nbsp;2018-02-30 19:10</span> -->
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="mesBox">
				<div>
					<div>
						<i></i>
						<input type="text" :placeholder="$t('用戶全名')" v-model="data.name" disabled="disabled" style="background:transparent;">
					</div>
					<div>
						<i></i>
						<input type="text" :placeholder="$t('手機號')" v-model="data.mobile">
					</div>
					<div>
						<i></i>
						<input type="text" :placeholder="$t('郵箱')" v-model="data.email">
					</div>
				</div>
				<div class="mesBox1">
          <p v-if="!userInfo">暫無用戶信息，請先<span @click="login">登錄</span></p>
          <textarea v-model="data.content" :placeholder="content"></textarea>
        </div>
			</div>
			<span class="submit" @click="addQuestion" v-if="userInfo">{{$t('發送')}}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: "messageBoard",
  data() {
    return {
      items: [],
      content:"",
      data: {
        name: "",
        mobile: "",
        email: "",
        content: ""
      }
    };
  },
  computed:{
    userInfo() {
      return this.$store.state.app.userInfo;
    },
    lang() {
      return this.$store.state.app.language;
    }
  },
  methods: {
    init() {
      this.ajax({
        apiName: "questions",
        data: {
          no: 1,
          size: -1
        }
      }).then(res => {
        console.log("questions", res);
        this.items = res.data.items;
      });
    },
    addQuestion() {
      const data = JSON.parse(JSON.stringify(this.data));
      if(!data.content)data.content="留言內容";
      this.ajax({
        apiName: "addQuestion",
        data
      }).then(res => {
        console.log("addQuestion", res);
        this.init();
        // this.data.name = "";
        // this.data.mobile = "";
        // this.data.email = "";
        this.data.content = "";
        this.$message.success({
          message:
            this.lang == "zh" ? "留言成功" : "Message success"
        });
      });
    },
    login() {
      window.sessionStorage.setItem("inMellToLogin", 1);
      window.location.href = "../member/index.html";
    },
    setdata(){
      if(this.userInfo){
        this.data.name = this.userInfo.nickname;
        this.data.mobile = this.userInfo.mobile;
        this.data.email = this.userInfo.email;
      }
    }
  },
  watch:{
    userInfo: {
      handler() {
        this.setdata();
      },
      deep: true
    }
  },
  created() {
    this.setdata();
    this.$store.dispatch("setMenuI", 0);
    this.$store.dispatch("setBreadCrumbs", [{ label: "留言板", isI18n: true }]);
    this.init();
    this.content=this.lang=="zh"?"請輸入留言內容":"Please enter the message content";
  }
};
</script>

<style scoped>
.mesBox1{
  position:relative;
}
.mesBox1 p{
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  border-radius: 5px;
  background: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.mesBox1 p span{
  color: #4ca9cd;
  cursor: pointer;
}

.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.bannerTxt {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background: url(./img/Messageboard.png) no-repeat;
  background-size: 70%;
  background-position: 50%;
}
.bannerTxt > span {
  font-size: 32px;
  color: #4ca9cd;
  padding-top: 10px;
  border-top: 3px solid;
}
.qAndA {
  margin-bottom: 30px;
}
.qAndA > div {
  margin-bottom: 20px;
}
.qAndA > h2 {
  font-size: 18px;
  color: #292e32;
  font-weight: 600;
  padding-left: 25px;
  background: url(./img/mes.png) no-repeat;
  background-size: 18px;
  background-position: 0 80%;
  margin-bottom: 20px;
}
.qAndA > div > h3 {
  display: flex;
  align-items: center;
  color: #4ca9cd;
}
.qAndA > div > h3 > span {
  margin-right: 0;
  margin-left: auto;
  font-size: 14px;
  color: #999999;
}
.qAndA > div > h3 > i {
  font-size: 12px;
  font-style: initial;
  color: #fff;
  background: #4ca9cd;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
.qAndA > div > h3 {
  margin-bottom: 10px;
}
.qAndA > div > p {
  margin-left: 30px;
  color: #666;
  line-height: 30px;
  margin-bottom: 10px;
}
/*.qAndA>div>ul>li{
	display: flex;
	align-items: center;
}*/
.answer {
  display: flex;
}
.answer > ul {
  width: calc(100% - 30px);
}
.answer > ul > li {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.answer > ul > li:last-child {
  border-bottom: 0;
}
.answer > i {
  font-size: 12px;
  font-style: initial;
  color: #fff;
  background: #71cf43;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
.answer > ul > li > span {
  font-size: 14px;
  color: #999999;
  display: block;
  text-align: right;
}
.mesBox {
  margin-bottom: 20px;
}
.mesBox > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.mesBox > div > div {
  width: 30%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  border-radius: 4px;
  height: 40px;
}
.mesBox > div > div > i {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-right: 10px;
}
.mesBox > div > div > input {
  width: calc(100% - 32px);
  height: 100%;
  border: 0;
  outline: medium;
  font-size: 16px;
}
.mesBox > div > div:nth-child(1) > i {
  background: url(./img/name.png) no-repeat;
  background-size: 16px;
  background-position: 50%;
}
.mesBox > div > div:nth-child(2) > i {
  background: url(./img/tel.png) no-repeat;
  background-size: 14px;
  background-position: 50%;
}
.mesBox > div > div:nth-child(3) > i {
  background: url(./img/email.png) no-repeat;
  background-size: 16px;
  background-position: 50%;
}
.mesBox >div> textarea {
  width: 100%;
  resize: none;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: medium;
  box-sizing: border-box;
  padding: 15px;
  font-size: 18px;
  font-family: "微软雅黑";
}
.submit {
  display: block;
  height: 50px;
  line-height: 50px;
  background: #4ca9cd;
  font-size: 18px;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}
</style>