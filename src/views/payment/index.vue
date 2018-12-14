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
        <ul :class="ulswitch?'info':'info close'" v-if="address.length">
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
        <span class="more" @click="ultoggle()" v-if="address.length" style="margin-bottom:10px;">
          {{$t(switchTxt)}}
          <i :class="ulswitch?'open':'close'"></i>
        </span>
        <ul class="info" v-if="eidtAddressIsShow">
          <li>
            <span>
              <input type="text" v-model="addAddressItem.contact" :placeholder="$t('收貨人')" style="width: 100%;border: 0px;height: 100%;display: block;padding: 0 1em;box-sizing: border-box;">
            </span>
            <p class="inlineChildCenter" style="line-height:inherit;">
              <select v-if="deliveryWay==1" v-model="addAddressItem.seat" placeholder="收貨人" style="height:100%;">
                <option value="" disabled="disabled">{{$t('所在區域')}}</option>
                <option>{{$t('中西区')}}</option>
                <option>{{$t('东区')}}</option>
                <option>{{$t('南区')}}</option>
                <option>{{$t('湾仔区')}}</option>
                <option>{{$t('九龙区')}}</option>
                <option>{{$t('观塘区')}}</option>
                <option>{{$t('深水埗区')}}</option>
                <option>{{$t('黄大仙区')}}</option>
                <option>{{$t('油尖旺区')}}</option>
                <option>{{$t('离岛区')}}</option>
                <option>{{$t('葵青区')}}</option>
                <option>{{$t('北区')}}</option>
                <option>{{$t('西贡区')}}</option>
                <option>{{$t('沙田区')}}</option>
                <option>{{$t('大埔区')}}</option>
                <option>{{$t('荃湾区')}}</option>
                <option>{{$t('屯门区')}}</option>
                <option>{{$t('元朗区')}}</option>
              </select>
              <input v-if="deliveryWay==1" v-model="addAddressItem.address" type="text" :placeholder="$t('收貨地址')" style="width:120px;height:100%;border:1px solid #aaa;box-sizing:border-box;padding:0 1em;">
              <!-- {{deliveryWay==1?(item.seat||'')+(item.address||''):''}}  -->
              &nbsp;&nbsp;&nbsp;
              <span>
                <input type="text" v-model="addAddressItem.mobile" :placeholder="$t('聯繫號碼')" style="width:120px;height:100%;border:1px solid #aaa;box-sizing:border-box;padding:0 1em;">
              </span>
              <em style="background:#4CA9CE;cursor: pointer;" @click="addAddress">{{$t('確認')}}</em>
            </p>
          </li>
        </ul>
        <p class="c7" style="margin-left: 2%;margin-bottom: 30px;margin-top:10px;cursor: pointer;">
          <!-- {{$t('暫無收貨地址信息')}}， -->
          <!-- <a class="c6" href="../member/index.html#/user/addresses">{{$t('手動添加')}}</a> -->
          <a class="c6" @click="eidtAddressIsShow=true">{{$t('手動填寫')}}</a>
        </p>
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
                  <span>USD</span>&nbsp;
                  <span class="c6">${{!userInfo||(userInfo.type===0&&item.type===1)?item.retail:item.money}}</span>
                </p>
                <p class="posct">{{item.amount}}</p>
                <p class="posct">
                  <span>USD</span>&nbsp;
                  <span class="c6">${{(!userInfo||(userInfo.type===0&&item.type===1)?item.retail:item.money)*item.amount}}</span>
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
          <span v-if="deliveryWay==1">{{$t('寄送至')}}：{{address[activeI]?(address[activeI].seat+address[activeI].address):''}}</span>
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
          {{$t(this.isFee?'購買當前套餐請需支付年費':'請選擇您的支付方式')}}
          <i v-if="!isFee" @click="hidePis()"></i>
        </h3>
        <div style="font-size: 13px;color: rgb(244, 67, 54);text-align: justify;margin-top: 10px;margin-bottom: 20px;padding: 0px 1em;line-height: 1.5;">
          <p style="margin:0;">{{$t('註冊成為會員享受更低價格和積分獎勵！')}}</p>
          <p>{{$t('聯繫電話：852)3743-0668')}}</p>
        </div>
        <div>
          <div class="payType">
            <span v-if="userInfo" :class="isWeChatPay||epSwitch?'':'check'" @click="ep1();isWeChatPay=0">EP1</span>
            <span v-if="userInfo" :class="isWeChatPay||!epSwitch?'':'check'" @click="ep2();isWeChatPay=0">EP2</span>
            <span :class="isWeChatPay?'check':''" @click="isWeChatPay=1">{{$t('微信支付')}}</span>
          </div>
          <div class="payTypeCheck">
            <span>{{$t('支付方式')}}：</span>
            <span>{{isWeChatPay?$t('微信支付'):(!epSwitch?'EP1':'EP2')}}</span>
          </div>
          <p>{{$t('應付金額')}}：
            <span class="sum">${{this.isFee?380:total}}</span>
            <span class="c4 s12" style="margin-left:1em;" v-if="!isWeChatPay&&userInfo&&(this.isFee?380:total)>(epSwitch?userInfo.reward:userInfo.money)">
              {{$t('餘額不足，請選擇其他支付方式')}}
              <!-- <a class="c6" href="../member/index.html#/user/recharge">{{$t('請先充值')}}</a> -->
            </span>
          </p>
          <div class="pwd" v-if="(isWeChatPay||userInfo&&(this.isFee?380:total)<=(epSwitch?userInfo.reward:userInfo.money))">
            <p v-if="!isWeChatPay">{{$t('請輸入您的支付密碼')}}：</p>
            <input type="password" v-if="!isWeChatPay" v-model="password" />
            <span @click="pay" v-if="!QRCode&&(password||isWeChatPay)">{{$t('確定')}}</span>
          </div>
          <div v-if="QRCode" style="margin: -50px 0 0 0;text-align: center;">
            <img :src="QRCode" style="width: 50%;display: inline-block;">
            <p style="color: #9E9E9E;font-size: 13px;">{{$t('請掃描二維碼進行支付操作！')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 支付成功弹窗 -->
    <div :class="`position ${popIsShow?'':'hide'}`">
      <div>
        <h3>{{$t('支付狀態')}}
          <!-- <i @click="popIsShow=0"></i> -->
        </h3>
        <div>
          <div style="width: 100px;margin:0 auto 10px"><img style="width: 100%" src="./img/success.png"></div>
          <p style="text-align: center;">{{$t('支付成功')}}</p>
          <div class="button">
            <span v-show="userInfo">
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
      remark: "",
      isRetail: false,
      eidtAddressIsShow: false,
      isWeChatPay:0,
      addAddressItem:{
        contact:"",
        seat:"",
        address:"",
        mobile:""
      },
      QRCode: "",
      hasAddAddress: false,
      timer: null,
      isFee: false
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
      this.items.forEach(v => (money += v.checked ? (!this.userInfo||(this.userInfo.type===0&&v.type===1)?v.retail:v.money) * v.amount : 0));
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
    addAddress(){
      if(!this.addAddressItem.contact){
        this.$message.error(this.lang=="zh"?"未填寫收貨人！":"The consignee is not filled out!");
        return;
      }
      if(!this.addAddressItem.seat&&this.deliveryWay==1){
        this.$message.error(this.lang=="zh"?"未填寫所在區域！":"Not filled in the area!");
        return;
      }
      if(!this.addAddressItem.address&&this.deliveryWay==1){
        this.$message.error(this.lang=="zh"?"未填寫收貨地址！":"The delivery address is not filled!");
        return;
      }
      if(!this.addAddressItem.mobile){
        this.$message.error(this.lang=="zh"?"未填寫聯繫號碼！":"The contact number is not filled out!");
        return;
      }
      if(!this.ulswitch)this.ultoggle();
      if(!this.hasAddAddress)
        this.address.push(JSON.parse(JSON.stringify(this.addAddressItem)));
      else{
        for(let k in this.addAddressItem){
          this.address[this.address.length-1][k] = this.addAddressItem[k];
        }
      }
      this.hasAddAddress = true;
    },
    ultoggle() {
      this.ulswitch = !this.ulswitch;
      this.switchTxt = this.ulswitch ? "收起" : "更多地址";
    },
    ep1() {
      this.epSwitch = 0;
      clearTimeout(this.timer);
      this.QRCode = '';
    },
    ep2() {
      this.epSwitch = 1;
      clearTimeout(this.timer);
      this.QRCode = '';
    },
    hidePis() {
      this.pis = 0;
      clearTimeout(this.timer);
      this.QRCode = '';
    },
    showPis() {
      this.getUserInfo(_=>{
        this.pis = 1;
      });
    },
    getUserInfo(callback){
      if(this.userInfo){
        this.ajax({
          apiName: "getUserInfo",
          data: {
            uid: this.userInfo.uid
          }
        }).then(res => {
          console.log(res);
          this.$store.dispatch("setUserInfo", res.data);
          if(callback)callback(res);
        });
      }else{
        callback();
      }
    },
    addOrder() {
      const source = this.total;
      let cids = [];
      let amounts = [];
      if (!this.address.length) {
        this.$message.error({
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
      let data = {
        source,
        cids,
        amounts,
        deliveryWay,
        address,
        mobile,
        contact,
        remark
      };
      this.items.forEach(v => {
        if (v.checked) {
          cids.push(v.cid || v.id);
          amounts.push(v.amount);
        }
      });
      console.log(this.userInfo);
      if(this.$route.query.uid)data.uid=this.$route.query.uid;
      this.ajax({
        apiName: "addOrder",
        data
      }).then(res => {
        console.log("addOrder", res);
        this.orderNumber = res.data.orderNumber;
        if(res.result=='feeTime')this.isFee=true;
        this.showPis();
        if(this.userInfo)this.getUserInfo();
      });
    },
    pay() {
      let orderNumber = this.orderNumber;
      let payWay = this.epSwitch;
      let password = this.password;
      let data={};
      if(this.isWeChatPay){
        if(!this.isFee)data.orderNumber=orderNumber;
        this.ajax({
          apiName:this.isFee?"feeWeChatPay":"weChatPay",
          data
        }).then(res =>{
          console.log('weChatPay',res);
          this.QRCode = res.result;
          const viewOrderInfo = _ => {
            const resFn = res =>{
              let flag;
              if(this.isFee){
                flag = res.data.feeTime.split("-").join(":").split(":").join(" ").split(" ");
                flag = new Date(flag[0],flag[1]-1,flag[2],flag[3],flag[4],flag[5]).getTime()>new Date().getTime();
              }else{
                flag = res.data.trace == 2;
              }
              if(flag){
                if(this.isFee){
                  this.isFee = false;
                  this.QRCode = '';
                  this.$message.success(this.lang=="zh"?"支付成功，請繼續進行購物!":"Payment is successful, please continue shopping!");
                }else{
                  if(this.userInfo)this.$store.dispatch("setCartsLen", this.cartsLen - this.items.length);
                  // this.popIsShow = 1;
                }
                this.hidePis();
              }else if(this.QRCode){
                clearTimeout(this.timer);
                this.timer = setTimeout(_ => {
                  viewOrderInfo();
                }, 5000);
              }
            };
            this.getUserInfo(res=>{
              if(this.isFee){
                resFn(res);
              }else{
                this.ajax({
                  apiName:"orderInfo",
                  data:{
                    orderNumber
                  }
                }).then(res =>{
                  console.log(res);
                  // res.data.trace=2;
                  resFn(res);
                });
              }
            });
          };
          viewOrderInfo();
        });
      }else{
        data = {
          payWay:payWay ? 1 : 0,
          password
        };
        if(!this.isFee)data.orderNumber = orderNumber;
        this.ajax({
          apiName: this.isFee?"feePay":"pay",
          data
        }).then(res => {
          console.log("pay", res);
          if(this.isFee){
            this.isFee = false;
            this.$message.success(this.lang=="zh"?"支付成功，請繼續進行購物!":"Payment is successful, please continue shopping!");
          }else{
            this.$store.dispatch("setCartsLen", this.cartsLen - this.items.length);
            // this.items.forEach(v => this.removeCart(v.id));
            this.popIsShow = 1;
          }
          this.hidePis();
        });
      }
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
    },
    loadAddress(){
      if(this.userInfo){
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
      }else{
        this.address = [];
      }
    }
  },
  created() {
    document.title = this.$store.state.app.language == "zh" ? "支付" : "Pay";
    let items = [];
    this.$store.dispatch("setMenuI", 2);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "全部產品", isI18n: true, src: "/product" }
    ]);
    this.items = JSON.parse(this.$route.query.code.uncompile());
    this.items.forEach(v => (v.checked ? items.push(v) : ""));
    this.items = items;
    this.isWeChatPay=!this.userInfo?1:0;
    console.log(this.items);
    this.loadAddress();

    let ids = [];
    this.items.forEach(v=>{
      ids.push(v.cid||v.id);
    });
    this.ajax({
      apiName:"reloadOrder",
      data:{
        ids
      }
    }).then(res =>{
      console.log('reloadOrder',res);
      if(res.result=='feeTime'){
        this.isFee = true;
        this.showPis();
      }else if(res.data){
        res.data.forEach((v,i)=>{
          for(let k in v){
            this.items[i][k] = v[k];
          }
        });
      }
    });
  },
  watch: {
    userInfo:{
      handler(){
        // this.isWeChatPay=!this.userInfo?1:0;
        // this.loadAddress();
      },
      deep:true
    },
    deliveryWay(){
      if(this.deliveryWay==1){
        if(this.hasAddAddress){
          this.address.splice(this.address.length-1);
          this.hasAddAddress=false;
        }
      }
    }
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
.info{
  margin: 0 -15px;
  padding: 0 15px;
}
.info > li {
  display: flex;
  align-items: center;
  width: 98%;
  margin: 0 0 20px -4.25%;
  overflow: auto;
  white-space: nowrap;
  padding: 0 5.25%;
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
  min-width: 80px;
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