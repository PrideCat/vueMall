const lang = {
    '繁體中文': ['Traditional Chinese'],
    '英文': ['English'],
    '如何下單': ['How to place an order'],
    '如何付款': ['How to pay'],
    '免責聲明': ['Disclaimer'],
    '隱私政策': ['Privacy Policy'],
    '登錄': ['Log In'],
    '註冊': ['Registered'],
    '我的訂單': ['My Order'],
    '購物車': ['Shopping Cart'],
    '關於HeadWind': ['About HeadWind'],
    '最新資訊': ['Latest News'],
    '產品': ['Product'],
    '關愛社會': ['Caring for society'],
    '認證': ['Certification'],
    '加入我們': ['Join Us'],
    '本站查詢和聯繫我們': ['Inquiries and contact us'],
    '微信服務號': ['WeChat service number'],
    '週一至週六': ['Monday to Saturday'],
    '新手上路': ['Novice'],
    '如何註冊': ['How to register'],
    '產品常識': ['Product Knowledge'],
    '產品與問答': ['Product and Q & A'],
    '如何使用沛泉精華': ['How to use Peiquan Essence'],
    '好轉反應': ['Better Response'],
    '關注我們': ['Follow Us'],
    '商店簡介': ['Store Introduction'],
    '公司介紹': ['Company Profile'],
    '友情鏈接': ['Links'],
    '遊民星空': ['Traveler starry sky'],
    '太平洋網絡': ['Pacific Network'],
    '广告经营许可证: 430100S003粤ICP备11046297号-4增值电信业务经营许可证: 粤ICP备11046297号': ['Advertising license: 430100S003 Guangdong ICP No. 11046297-4 Value-added telecommunications business license: Guangdong ICP No. 11046297'],
    '新聞中心': ['News Center'],
    '查看更多': ['See More'],
    '熱賣產品': ['Hot Deals'],
    '公司事件': ['Company Event'],
    '查看詳情': ['See Details'],
    '首頁': ['Home'],
    '全部產品': ['All Products'],
    '輸入您想要搜索的產品': ['Enter the product you want to search for'],
    '搜索': ['Search For'],
    '查看分類': ['View Classification'],
    '加入購物車': ['add to Shopping Cart'],
    '了解詳情': ['Learn More'],
    '數量': ['Quantity'],
    '立即購買': ['Buy Now'],
    '收藏': ['Collection'],
    '推介': ['Promotion'],
    '正品保障': ['Genuine Security'],
    '天然萃取': ['Natural Extraction'],
    '微信分享': ['WeChat Sharing'],
    '產品介紹': ['Product Description'],
    '零售套餐': ['Retail Package'],
    '會員套餐': ['Membership Package'],
    '進階套餐': ['Advanced Package'],
    '尊享套餐': ['Exclusive Package'],
    '購買此商品可以獲得': ['Buy this item to get'],
    '積分': ['Points'],
    '年份索引': ['Year Index'],
    '01月': ['January'],
    '02月': ['February'],
    '03月': ['March'],
    '04月': ['April'],
    '05月': ['May'],
    '06月': ['June'],
    '07月': ['July'],
    '08月': ['August'],
    '09月': ['September'],
    '10月': ['October'],
    '11月': ['November'],
    '12月': ['December'],
    '問題索引': ['Problem Index'],
    '請求失敗，請聯繫管理員。': ['The request failed, please contact the administrator'],
    '需要登錄': ['Need to log in'],
    '用戶不存在': ['User does not exist'],
    '商品不存在': ['Product does not exist'],
    '購物車商品不存在': ['Shopping cart item does not exist'],
    '當前用戶不支持購買該套餐': ['Current users do not support the purchase of this package'],
    '全選': ['Select All'],
    '商品': ['Commodity'],
    '單價': ['Unit Price'],
    '總額': ['Lump Sum'],
    '刪除選擇商品': ['Delete selected item'],
    '清空購物車': ['Empty shopping cart'],
    '去結賬': ['Go to checkout'],
    '相關產品推介': ['Related product introduction'],
    '填寫并核對訂單信息': ['Fill in and check the order information'],
    '收貨人信息': ['Recipient Information'],
    '默認地址': ['Default Address'],
    '送貨清單': ['Delivery Order'],
    '更多地址': ['More Addresses'],
    '收起': ['Collapse'],
    '返現': ['Cash Back'],
    '運費': ['Freight'],
    '折扣': ['Discount'],
    '應付總額': ['Total amount payable'],
    '寄送至': ['Send To'],
    '收貨人': ['Receiver'],
    '提交訂單': ['Submit Order'],
    '件商品，总商品金额': [' items, total merchandise amount'],
    '商品訂單不存在': ['Product order does not exist'],
    '非訂單用戶': ['Non-order User'],
    '訂單交易狀態異常': ['Order transaction status is abnormal'],
    '密碼錯誤': ['Wrong Password'],
    '餘額不足': ['Insufficient Balance'],
    '我的收藏': ['My Collection'],
    '聯繫我們': ['Contact Us'],
    '留言板': ['Message Board'],
    '請選擇您的支付方式': ['Please choose your payment method'],
    '支付方式': ['Payment Method'],
    '應付金額': ['Amounts Payable'],
    '請輸入您的支付密碼': ['Please enter your payment password'],
    '確定': ['Determine'],
    '支付狀態': ['Payment Status'],
    '支付成功': ['Payment Successful'],
    '查看訂單': ['Check Order'],
    '繼續購物': ['Continue Shopping'],
    '相關問答': ['Related questions and answers'],
    '姓名': ['Name'],
    '電話': ['Phone'],
    '郵箱': ['Mailbox'],
    '發送': ['Send'],
    '問': ['Ask'],
    '答': ['Answer'],
    '歡迎登錄，': ['Login Please,'],
    '退出登錄': ['Sign Out'],
    '會員中心': ['Member Centre'],
    '收貨方式': ['Receiving Method'],
    '到店自提': ['Come to the store'],
    '物流收貨': ['Logistics Receipt'],
    '暫無收貨地址信息': ['No delivery address information'],
    '先去添加': ['please go to add'],
    '備註': ['Remarks'],
    '餘額不足': ['If the balance is insufficient'],
    '請先充值': ['please recharge first'],
    '複製鏈接': ['Copy Link']
}

const messages = {
    zh: {},
    en: {}
};

for (let k in lang) {
    messages.zh[k] = k
    messages.en[k] = lang[k][0]
}

export default messages