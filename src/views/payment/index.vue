<template>
  <div>
    <div class="w1200">
      <h2>{{$t('填寫并核對訂單信息')}}</h2>
      <div class="sur">
        <h3>{{$t('收貨方式')}}</h3>
        <select style="margin-bottom:40px;height:30px;padding:0 0.5em;" v-model="deliveryWay">
          <option value="0">{{$t('到店自提')}}</option>
          <option value="1">{{$t('物流收貨')}}</option>
        </select>
        <h3>{{$t('收貨人信息')}}</h3>
        <p v-if="!address.length" class="c7">
          {{$t('暫無收貨地址信息')}}，
          <a class="c6" href="../member/index.html#/user/addresses">{{$t('先去添加')}}</a>
        </p>
        <ul :class="ulswitch?'info':'info close'">
          <li v-for="(item,index) in address" :key="index" @click="activeI=index">
            <span :class="activeI==index?'choose':''">
              {{item.contact}}
            </span>
            <p>
              {{deliveryWay==1?(item.seat||'')+(item.address||''):''}} &nbsp;&nbsp;&nbsp;
              <span>{{item.mobile}}</span>
              &nbsp;&nbsp;&nbsp;
              <em v-if="item.setting">{{$t('默認地址')}}</em>
            </p>
          </li>
        </ul>
        <span class="more" @click="ultoggle()" v-if="address.length">
          {{$t(switchTxt)}}
          <i :class="ulswitch?'open':'close'"></i>
        </span>
        <h3>{{$t('送貨清單')}}</h3>
        <div class="m_item c7">
          <div class="fbox i_title i_col">
            <p></p>
            <p class="flex">{{$t('商品')}}</p>
            <p class="posct">{{$t('單價')}}</p>
            <p class="posct">{{$t('數量')}}</p>
            <p class="posct">{{$t('總額')}}</p>
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
                    <span class="c6">{{item.name}}</span>
                    <!-- <span class="c3">
										<b class="s16">snowkids 美白套装</b>
									</span>
									<span>0.17 FL. OZ. / 5 ML</span> -->
                  </span>
                </p>
                <p class="posct">
                  <span>HK</span>&nbsp;
                  <span class="c6">${{item.money}}</span>
                </p>
                <p class="posct">{{item.amount}}</p>
                <p class="posct">
                  <span>HK</span>&nbsp;
                  <span class="c6">${{item.money*item.amount}}</span>
                </p>
                <p class="posct">
                </p>
              </li>
            </ul>
          </div>
        </div>
        <h3 style="margin-top:30px;">{{$t('備註信息')}}</h3>
        <div>
          <textarea style="padding:1em;width:100%;box-sizing:border-box;resize:none;" name="" id="" rows="10" v-model="remark"></textarea>
        </div>
      </div>
      <div class="total">
        <ul>
          <li>
            <span>{{allNumber*1+$t('件商品，总商品金额')}}：</span>
            <span>${{total}}</span>
          </li>
          <!-- <li>
						<span>{{$t('返現')}}：</span>
						<span>$12.00</span>
					</li>
					<li>
						<span>{{$t('運費')}}：</span>
						<span>$1.00</span>
					</li>
					<li>
						<span>{{$t('折扣')}}：</span>
						<span>$1324.00</span>
					</li> -->
        </ul>
      </div>
      <div class="totalInfo">
        <p>{{$t('應付總額')}}：
          <span>${{total}}</span>
        </p>
        <p>
          <span>{{$t('寄送至')}}：{{address[activeI]?(address[activeI].seat+address[activeI].address):''}}</span>
          <span>{{$t('收貨人')}}：{{address[activeI]?address[activeI].contact:''}}</span>
          <span>{{address[activeI]?address[activeI].mobile:''}}</span>
        </p>
      </div>
      <div class="submit">
        <span @click="addOrder">{{$t('提交訂單')}}</span>
      </div>
    </div>
    <!--弹窗 -->
    <div :class="pis?'position':'position hide'">
      <div>
        <h3>
          {{$t('請選擇您的支付方式')}}
          <i @click="hidePis()"></i>
        </h3>
        <div>
          <div class="payType">
            <span :class="epSwitch?'':'check'" @click="ep1()">EP1</span>
            <span :class="!epSwitch?'':'check'" @click="ep2()">EP2</span>
          </div>
          <div class="payTypeCheck">
            <span>{{$t('支付方式')}}：</span>
            <span>{{!epSwitch?'EP1':'EP2'}}</span>
          </div>
          <p>{{$t('應付金額')}}：
            <span class="sum">${{total}}</span>
            <span class="c4 s12" style="margin-left:1em;" v-if="userInfo&&total>(epSwitch?userInfo.money:userInfo.reward)">
              {{$t('餘額不足，請選擇其他支付方式')}}
              <!-- <a class="c6" href="../member/index.html#/user/recharge">{{$t('請先充值')}}</a> -->
            </span>
          </p>
          <div class="pwd" v-if="userInfo&&total<=(epSwitch?userInfo.money:userInfo.reward)">
            <p>{{$t('請輸入您的支付密碼')}}：</p>
            <input type="password" v-model="password" />
            <span @click="pay" v-if="password">{{$t('確定')}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 支付成功弹窗 -->
    <div :class="`position ${popIsShow?'':'hide'}`">
      <div>
        <h3>{{$t('支付狀態')}}
          <i @click="popIsShow=0"></i>
        </h3>
        <div>
          <div style="width: 100px;margin:0 auto 10px"><img style="width: 100%" src="./img/success.png"></div>
          <p style="text-align: center;">{{$t('支付成功')}}</p>
          <div class="button">
            <span>
              <a href="../member/index.html#/user/order" style="display:block;">{{$t('查看訂單')}}</a>
            </span>
            <router-link to="/product" tag="span">{{$t('繼續購物')}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      pis: 0,
      epSwitch: 0,
      ulswitch: 0,
      switchTxt: "更多地址",
      address: [],
      activeI: 0,
      items: [],
      password: "",
      orderNumber: "",
      popIsShow: 0,
      deliveryWay: 0,
      remark: ""
    };
  },
  computed: {
    allNumber() {
      let number = 0;
      this.items.forEach(v => (number += v.amount));
      return number;
    },
    total() {
      let money = 0;
      this.items.forEach(v => (money += v.checked ? v.money * v.amount : 0));
      return money;
    },
    cartsLen() {
      return this.$store.state.app.cartsLen;
    },
    userInfo() {
      return this.$store.state.app.userInfo;
    },
    lang() {
      return this.$store.state.app.language;
    }
  },
  methods: {
    ultoggle() {
      this.ulswitch = !this.ulswitch;
      this.switchTxt = this.ulswitch ? "收起" : "更多地址";
    },
    ep1() {
      this.epSwitch = 0;
    },
    ep2() {
      this.epSwitch = 1;
    },
    hidePis() {
      this.pis = 0;
    },
    showPis() {
      this.pis = 1;
    },
    addOrder() {
      const source = this.total;
      let cids = [];
      let amounts = [];
      if (!this.address.length) {
        this.$message.success({
          message:
            this.lang == "zh" ? "請先添加地址！" : "Please add an address first!"
        });
        return;
      }
      const theAddress = this.address[this.activeI];
      const address = theAddress.seat + theAddress.address;
      const mobile = theAddress.mobile;
      const contact = theAddress.contact;
      const deliveryWay = this.deliveryWay;
      const remark = this.remark;

      this.items.forEach(v => {
        if (v.checked) {
          cids.push(v.cid || v.id);
          amounts.push(v.amount);
        }
      });
      console.log(this.userInfo);

      this.ajax({
        apiName: "addOrder",
        data: {
          source,
          cids,
          amounts,
          deliveryWay,
          address,
          mobile,
          contact,
          remark
        }
      }).then(res => {
        console.log("addOrder", res);
        this.orderNumber = res.data.orderNumber;
        this.showPis();

        let userStorage = JSON.parse(sessionStorage.getItem("userStorage"));
        this.ajax({
          apiName: "login",
          data: {
            uid: userStorage.uid,
            password: userStorage.password
          }
        }).then(res => {
          console.log(res);
          this.$store.dispatch("setUserInfo", res.data);
        });
      });
    },
    pay() {
      let orderNumber = this.orderNumber;
      let payWay = this.epSwitch;
      let password = this.password;
      this.ajax({
        apiName: "pay",
        data: {
          payWay:payWay ? 1 : 0,
          orderNumber,
          password
        }
      }).then(res => {
        console.log("pay", res);
        this.hidePis();
        this.$store.dispatch("setCartsLen", this.cartsLen - this.items.length);
        // this.items.forEach(v => this.removeCart(v.id));
        this.popIsShow = 1;
      });
    },
    removeCart(id) {
      this.ajax({
        apiName: "removeCart",
        data: {
          id
        }
      }).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    let items = [];
    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "全部產品", isI18n: true, src: "/product" }
    ]);

    this.ajax({
      apiName: "address",
      data: {
        no: 1,
        size: -1
      }
    }).then(res => {
      console.log("address", res);
      this.address = res.data.items;
      let index;
      this.address.forEach((v, i) => (v.setting ? (index = i) : ""));
      let defuAddress = this.address.splice(index, 1);
      this.address = defuAddress.concat(this.address);
    });

    this.items = JSON.parse(this.$route.query.items);
    this.items.forEach(v => (v.checked ? items.push(v) : ""));
    this.items = items;
    console.log(this.items);
  }
};
</script>

<style scoped>
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

.sur {
  border: 1px solid #dedede;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
}
.sur > h3 {
  margin-bottom: 20px;
}
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
.close {
  height: 31px;
  overflow: hidden;
}

.info > li {
  display: flex;
  align-items: center;
  width: 96%;
  margin: 0 auto 20px;
}
.info > li:last-child {
  margin-bottom: 0;
}
.info > li > span {
  width: 120px;
  height: 31px;
  text-align: center;
  line-height: 31px;
  cursor: pointer;
  border: 1px solid #4ca9ce;
  box-sizing: border-box;
  /*margin-right: 20px;*/
}
.info > li > .choose {
  background: url(./img/choose.png) no-repeat;
  background-size: 20px;
  background-position: 100% 100%;
}
.info > li > p {
  height: 31px;
  line-height: 31px;
  width: calc(100% - 120px);
  background: #edfaff;
  text-indent: 20px;
}
.info > li > p > em {
  background: #bbb;
  font-style: initial;
  padding: 2px 8px;
  color: #fff;
}
.more {
  color: #999;
  cursor: pointer;
  margin-left: 2%;
  margin-right: 2%;
  padding-bottom: 20px;
  /*padding-right: 20px;*/
  display: block;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
}
.more i {
  width: 20px;
  height: 20px;
}
.more .close {
  background: url(./img/down.png) no-repeat;
  background-size: 12px;
  background-position: 50%;
}
.more .open {
  background: url(./img/up.png) no-repeat;
  background-size: 12px;
  background-position: 50%;
}
.total {
  margin-bottom: 20px;
}
.total > ul > li {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  font-size: 16px;
}
.total > ul > li > span:nth-child(2) {
  width: 120px;
  text-align: right;
}
.totalInfo {
  background: #ececec;
  color: #999;
  font-size: 16px;
  text-align: right;
  padding: 20px 10px;
  margin-bottom: 20px;
}
.totalInfo > p:nth-child(1) {
  margin-bottom: 20px;
}
.totalInfo > p:nth-child(1) span {
  font-size: 24px;
  margin-left: 20px;
  color: #e94545;
}
.totalInfo > p:nth-child(2) span {
  margin-left: 20px;
}
.submit {
  display: flex;
  justify-content: flex-end;
}
.submit span {
  padding: 10px 35px;
  color: #fff;
  background: #66b0cd;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
}
.position {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #00000021;
  display: flex;
  align-items: center;
  justify-content: center;
}
.position > div {
  background: #fff;
  width: 500px;
  border: 1px solid #ddd;
  font-size: 16px;
}
.position > div > h3 {
  background: #4ca9cd;
  color: #fff;
  padding: 10px 0;
  text-indent: 15px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.position > div > h3 > i {
  width: 15px;
  height: 15px;
  background: url(./img/X.png) no-repeat;
  margin-right: 10px;
  background-size: 100%;
  cursor: pointer;
}
.position > div > div {
  padding: 20px;
  box-sizing: border-box;
}
.position > div > div > * {
  margin-bottom: 30px;
}
.payType {
  display: flex;
  align-items: center;
}
.payType > span {
  margin-right: 80px;
  cursor: pointer;
}
.payType > .check {
  color: #4ca9cd;
  font-weight: 600;
  border-bottom: 2px solid;
}
.payTypeCheck {
  display: flex;
  align-items: center;
}
.payTypeCheck > span:nth-child(2) {
  width: 80px;
  height: 31px;
  text-align: center;
  line-height: 31px;
  border: 1px solid #4ca9ce;
  box-sizing: border-box;
  background: url(./img/choose.png) no-repeat;
  background-size: 20px;
  background-position: 100% 100%;
}
.sum {
  font-size: 20px;
  color: #e94545;
}
.pwd {
  display: flex;
  align-items: center;
}
.pwd > input {
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 200px;
  outline: medium;
  height: 30px;
  font-size: 20px;
}
.pwd > span:last-child {
  background: #4ca9cd;
  color: #fff;
  width: 80px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
}
.hide {
  display: none !important;
}
.button {
  display: flex;
  justify-content: center;
}
.button span {
  width: 35%;
  text-align: center;
  border: 1px solid #4ca9cd;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: #4ca9cd;
  cursor: pointer;
}
.button span:first-child {
  margin-right: 20px;
  background: #fff;
  color: #4ca9cd;
}
</style>