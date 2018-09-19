const lang = {
    '繁體中文': ['traditional Chinese'],
    '英文': ['English'],
    '如何下單': ['How to place an order'],
    '如何付款': ['How to pay'],
    '免責聲明': ['Disclaimer'],
    '隱私政策': ['Privacy Policy'],
    '登錄': ['log in'],
    '註冊': ['registered'],
    '我的訂單': ['My Order'],
    '購物車': ['shopping cart'],
    '關於HeadWind': ['About HeadWind'],
    '最新資訊': ['Latest News'],
    '產品': ['product'],
    '關愛社會': ['Caring for society'],
    '認證': ['Certification'],
    '加入我們': ['join us'],
    '本站查詢和聯繫我們': ['Inquiries and contact us'],
    '微信服務號': ['WeChat service number'],
    '週一至週六': ['Monday to Saturday'],
    '新手上路': ['Novice'],
    '如何註冊': ['How to register'],
    '如何落單': ['How to place a single order'],
    '產品常識': ['Product knowledge'],
    '產品與問答': ['Product and Q & A'],
    '如何使用沛泉精華': ['How to use Peiquan Essence'],
    '好轉反應': ['Better response'],
    '關注我們': ['Follow us'],
    '商店簡介': ['Store introduction'],
    '公司介紹': ['Company Profile'],
    '友情鏈接': ['Links'],
    '遊民星空': ['Traveler starry sky'],
    '太平洋網絡': ['Pacific Network'],
    '广告经营许可证: 430100S003粤ICP备11046297号-4增值电信业务经营许可证: 粤ICP备11046297号': ['Advertising license: 430100S003 Guangdong ICP No. 11046297-4 Value-added telecommunications business license: Guangdong ICP No. 11046297'],
    '新聞中心': ['News Center'],
    '查看更多': ['see more'],
    '熱賣產品': ['hot deals'],
    '公司事件': ['Company event'],
    '查看詳情': ['see details'],
    '首頁': ['Home'],
    '全部產品': ['All products'],
    '輸入您想要搜索的產品': ['Enter the product you want to search for'],
    '搜索': ['search for'],
    '查看分類': ['View classification'],
    '加入購物車': ['add to Shopping Cart'],
    '了解詳情': ['Learn more'],
    '數量': ['Quantity'],
    '加入購物車': ['add to Shopping Cart'],
    '立即購買': ['Buy now'],
    '收藏': ['Collection'],
    '推介': ['Promotion'],
    '正品保障': ['Genuine security'],
    '天然萃取': ['Natural extraction'],
    '微信分享': ['WeChat sharing'],
    '產品介紹': ['product description'],
    '零售套餐': ['Retail package'],
    '會員套餐': ['Membership package'],
    '進階套餐': ['Advanced package'],
    '尊享套餐': ['Exclusive package'],
    '購買此商品可以獲得': ['Buy this item to get'],
    '積分': ['points']
}

const messages = {
    zh: {},
    en: {}
}

for (let k in lang) {
    messages.zh[k] = k
    messages.en[k] = lang[k][0]
}

export default messages