export const tripData = {
    meta: {
      title: "Ricky's Hokkaido Trip",
      dates: "2026/01/24 - 01/28",
      flight_out: "IT238 (07:35 TPE -> 12:30 AKJ)",
      flight_in: "IT237 (12:20 HKD -> 16:00 TPE)",
      leader: "葉錫仁 (0927-559-808)",
      assembly: "01/24 05:05 @ 桃機一航 7號櫃台"
    },
    days: [
      {
        day: 0,
        date: "Pre-Trip",
        region: "行前準備",
        hotel: "溫暖的家",
        highlights: ["行李打包", "證件確認", "App下載"],
        // Day 0 的特殊資料結構：分類清單
        categories: [
          {
            title: "證件與重要文件",
            type: "docs",
            items: [
              { text: "護照", desc: "確認效期在 6 個月以上" },
              { text: "Visit Japan Web (VJW)", desc: "填寫入境審查與海關申報，截圖 QR Code" },
              { text: "駕照正本 + 日文譯本", desc: "自駕必備 (注意是譯本非國際駕照)" },
              { text: "保險證明", desc: "建議購買包含海外醫療的旅平險" }
            ]
          },
          {
            title: "金融與網路",
            type: "finance",
            items: [
              { text: "日幣現金", desc: "偏遠地區或小店仍僅收現金" },
              { text: "信用卡", desc: "準備 1-2 張高回饋卡 (推薦 JCB)" },
              { text: "網路方案", desc: "eSIM、實體 SIM 卡或 WiFi 機" },
              { text: "交通卡 (Suica/ICOCA)", desc: "手機綁定，搭車購物都方便" }
            ]
          },
          {
            title: "電子與生活用品",
            type: "daily",
            items: [
              { text: "行動電源", desc: "寒冷天氣掉電快，這是保命符" },
              { text: "保濕用品", desc: "護唇膏、護手霜、身體乳液 (氣候乾燥)" },
              { text: "摺疊購物袋", desc: "日本不提供免費塑膠袋" },
              { text: "個人藥品", desc: "感冒藥、腸胃藥、暈車藥" }
            ]
          },
          {
            title: "❄️ 冬季特別準備",
            type: "winter",
            note: "溫差極大 (室外-10°C / 室內25°C)，請採三層洋蔥式穿搭",
            items: [
              { text: "內層：吸濕發熱衣", desc: "推薦 Uniqlo Heattech 等級" },
              { text: "中層：刷毛連帽衫/羽絨背心", desc: "保暖透氣為主" },
              { text: "外層：防風防水厚羽絨", desc: "防水很重要，避免淋雪濕冷" },
              { text: "鞋子：防滑防水雪靴", desc: "建議當地買冰爪套在鞋底" },
              { text: "配件：毛帽、圍巾、手套", desc: "手套建議具觸控功能" },
              { text: "貼式暖暖包", desc: "貼在腳底非常實用" },
              { text: "輕便摺疊傘", desc: "預防偶發降雨或濕雪" },
              { text: "防曬用品", desc: "雪地反射紫外線強烈" }
            ]
          },
          {
            title: "📱 實用 APP 推薦",
            type: "apps",
            items: [
              { text: "乘換案內 (Yahoo!)", desc: "查 JR 巴士時間票價最準" },
              { text: "Google Translate", desc: "拍照翻譯菜單或標示" },
              { text: "Tenki.jp", desc: "精準預測降雨與積雪" },
              { text: "Go Taxi", desc: "叫車 APP，偏遠地區方便" }
            ]
          }
        ]
      },
      {
        day: 1,
        date: "01/24 (六)",
        region: "旭川",
        hotel: "WING INTERNATIONAL 旭川駅前",
        highlights: ["拉麵村", "男山酒造"],
        schedule: [
          { time: "07:35", activity: "飛往旭川", desc: "搭乘台灣虎航 IT238", type: "flight" },
          { time: "14:00", activity: "旭川拉麵村", desc: "品嚐北海道特色拉麵", coords: [43.793, 142.365], type: "food" },
          { time: "15:30", activity: "男山酒造", desc: "350年歷史清酒廠試飲", coords: [43.785, 142.385], type: "activity" },
          { time: "17:00", activity: "平和通買物公園", desc: "自由逛街與晚餐", coords: [43.765, 142.360], type: "shop" }
        ]
      },
      {
        day: 2,
        date: "01/25 (日)",
        region: "層雲峽",
        hotel: "朝陽 RESORT",
        highlights: ["破冰船", "冰瀑祭"],
        schedule: [
          { time: "09:00", activity: "流冰觀光破冰船", desc: "鄂霍次克海破冰體驗", coords: [44.020, 144.270], type: "highlight" },
          { time: "14:00", activity: "銀河流星瀑布", desc: "日本百選瀑布絕景", coords: [43.720, 142.950], type: "activity" },
          { time: "19:00", activity: "層雲峽冰瀑祭", desc: "冰雕與燈光秀 (特別加贈)", coords: [43.725, 142.955], type: "highlight" }
        ]
      },
      {
        day: 3,
        date: "01/26 (一)",
        region: "小樽/札幌",
        hotel: "宜必思尚品札幌 (Ibis Styles)",
        highlights: ["小樽運河", "白色燈樹節"],
        schedule: [
          { time: "10:00", activity: "小樽運河 & 倉庫群", desc: "北一硝子館、音樂盒堂", coords: [43.195, 141.005], type: "activity" },
          { time: "14:00", activity: "札幌市區車遊", desc: "時計台、舊道廳、大通公園", coords: [43.060, 141.350], type: "activity" },
          { time: "18:00", activity: "狸小路 & 燈樹節", desc: "逛街與欣賞冬季燈飾", coords: [43.055, 141.355], type: "shop" }
        ]
      },
      {
        day: 4,
        date: "01/27 (二)",
        region: "函館",
        hotel: "啄木亭",
        highlights: ["洞爺湖", "百萬夜景"],
        schedule: [
          { time: "09:30", activity: "洞爺湖 & 昭和新山", desc: "展望台眺望活火山", coords: [42.605, 140.835], type: "activity" },
          { time: "13:00", activity: "大沼國立公園", desc: "雪上摩托車、香蕉船、冰釣", coords: [41.980, 140.670], type: "highlight" },
          { time: "17:30", activity: "函館山夜景", desc: "搭纜車看米其林三星夜景", coords: [41.760, 140.715], type: "highlight" }
        ]
      },
      {
        day: 5,
        date: "01/28 (三)",
        region: "返程",
        hotel: "溫暖的家",
        highlights: ["函館朝市", "回家"],
        schedule: [
          { time: "09:00", activity: "函館朝市", desc: "最後衝刺！海膽、帝王蟹", coords: [41.772, 140.725], type: "food" },
          { time: "12:20", activity: "飛往桃園", desc: "IT237 (預計 16:00 抵達)", type: "flight" }
        ]
      },
    ],
    // 舊的 checklist 移除了，現在整合進 Day 0
    checklist: [] 
  };
