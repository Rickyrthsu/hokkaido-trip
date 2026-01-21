export const tripData = {
  "meta": {
    "title": "Ricky's Hokkaido Deep Strategy Trip",
    "dates": "2026/01/24 - 2026/01/28",
    "flight_out": "IT238 (07:35 TPE -> 12:30 AKJ)",
    "flight_in": "IT237 (12:20 HKD -> 16:00 TPE)",
    "leader": "葉錫仁 (0927-559-808)",
    "assembly": "01/24 05:05 @ 桃機一航 7號櫃台"
  },
  "days": [
    {
      "day": 0,
      "date": "Pre-Trip",
      "region": "行前準備",
      "hotel": "溫暖的家",
      "highlights": ["行李打包", "證件確認", "App下載"],
      "categories": [
        {
          "title": "證件與重要文件",
          "type": "docs",
          "items": [
            { "text": "護照", "desc": "確認效期在 6 個月以上" },
            { "text": "Visit Japan Web (VJW)", "desc": "填寫入境審查與海關申報，截圖 QR Code" },
            { "text": "駕照正本 + 日文譯本", "desc": "自駕必備 (注意是譯本非國際駕照)" },
            { "text": "保險證明", "desc": "建議購買包含海外醫療的旅平險" }
          ]
        },
        {
          "title": "金融與網路",
          "type": "finance",
          "items": [
            { "text": "日幣現金", "desc": "偏遠地區或小店仍僅收現金" },
            { "text": "信用卡", "desc": "準備 1-2 張高回饋卡 (推薦 JCB)" },
            { "text": "網路方案", "desc": "eSIM、實體 SIM 卡或 WiFi 機" },
            { "text": "交通卡 (Suica/ICOCA)", "desc": "手機綁定，搭車購物都方便" }
          ]
        },
        {
          "title": "電子與生活用品",
          "type": "daily",
          "items": [
            { "text": "行動電源", "desc": "寒冷天氣掉電快，這是保命符" },
            { "text": "保濕用品", "desc": "護唇膏、護手霜、身體乳液 (氣候乾燥)" },
            { "text": "摺疊購物袋", "desc": "日本不提供免費塑膠袋" },
            { "text": "個人藥品", "desc": "感冒藥、腸胃藥、暈車藥" }
          ]
        },
        {
          "title": "❄️ 冬季特別準備",
          "type": "winter",
          "note": "溫差極大 (室外-10°C / 室內25°C)，請採三層洋蔥式穿搭",
          "items": [
            { "text": "內層：吸濕發熱衣", "desc": "推薦 Uniqlo Heattech 等級" },
            { "text": "中層：刷毛連帽衫/羽絨背心", "desc": "保暖透氣為主" },
            { "text": "外層：防風防水厚羽絨", "desc": "防水很重要，避免淋雪濕冷" },
            { "text": "鞋子：防滑防水雪靴", "desc": "建議當地買冰爪套在鞋底" },
            { "text": "配件：毛帽、圍巾、手套", "desc": "手套建議具觸控功能" },
            { "text": "貼式暖暖包", "desc": "貼在腳底非常實用" },
            { "text": "輕便摺疊傘", "desc": "預防偶發降雨或濕雪" },
            { "text": "防曬用品", "desc": "雪地反射紫外線強烈" }
          ]
        },
        {
          "title": "📱 實用 APP 推薦",
          "type": "apps",
          "items": [
            { "text": "乘換案內 (Yahoo!)", "desc": "查 JR 巴士時間票價最準" },
            { "text": "Google Translate", "desc": "拍照翻譯菜單或標示" },
            { "text": "Tenki.jp", "desc": "精準預測降雨與積雪" },
            { "text": "Go Taxi", "desc": "叫車 APP，偏遠地區方便" }
          ]
        }
      ]
    },
    {
      "day": 1,
      "date": "01/24 (Sat)",
      "region": "旭川 (Asahikawa)",
      "hotel": "WING INTERNATIONAL 旭川駅前",
      "highlights": ["拉麵派系對決", "限定清酒", "動漫補給"],
      "schedule": [
        { 
          "time": "05:05", 
          "activity": "桃園機場集合", 
          "desc": "第一航廈台灣虎航7號團體櫃台。請準時，機上僅簡餐，建議先吃早餐。", 
          "type": "flight", 
          "coords": [25.0805, 121.2384] 
        },
        { 
          "time": "12:30", 
          "activity": "抵達旭川機場", 
          "desc": "【體感衝擊】出空橋瞬間溫差極大 (-10°C)，領行李時請將手套帽子備戰。", 
          "type": "flight", 
          "coords": [43.6708, 142.4542] 
        },
        { 
          "time": "14:00", 
          "activity": "旭川拉麵村", 
          "desc": "【拉麵流派】1.重口味選『天金』(豬油封熱)。2.層次派選『青葉』(W雙湯頭)。3.鹽味派選『山頭火』(本店限定)。", 
          "type": "food", 
          "coords": [43.7932, 142.3649] 
        },
        { 
          "time": "15:30", 
          "activity": "男山酒造", 
          "desc": "【限定酒獵殺】目標：冬季限定『立春朝搾り』或『寒酒』。免稅店買不到的隱藏版！推薦買『男山前掛』當紀念品。", 
          "type": "shop", 
          "coords": [43.7885, 142.3831] 
        },
        { 
          "time": "17:00", 
          "activity": "平和通買物公園", 
          "desc": "日本第一條行人徒步區，有冬季燈飾。附近是燒肉激戰區，名店『大黑屋』成吉思汗烤肉就在附近。", 
          "type": "activity", 
          "coords": [43.7648, 142.3588] 
        },
        { 
          "time": "20:00", 
          "activity": "AEON Mall 旭川站前", 
          "desc": "【補給戰略】車站直結。動漫迷奔 3F『Animate』。超市 (1F) 買草莓、薯條湯咖哩味、Seicomart 炸雞。", 
          "type": "shop", 
          "coords": [43.7626, 142.3583],
          "strategies": [
            {
              "title": "Uniqlo 旭川旭町店",
              "tag": "指定店鋪",
              "desc": "【重要】您指定的地址位於旭町，非AEON站前店。請依此地址導航。",
              "address": "7 Chome-841-120 Asahimachi 1 Jo, Asahikawa, Hokkaido 070-0831日本",
              "coords": [43.7847, 142.3553] 
            }
          ]
        }
      ]
    },
    {
      "day": 2,
      "date": "01/25 (Sun)",
      "region": "網走/層雲峽 (Abashiri/Sounkyo)",
      "hotel": "層雲峽 朝陽RESORT",
      "highlights": ["破冰船震撼", "冰瀑祭煙火", "Seicomart神物"],
      "schedule": [
        { 
          "time": "Morning", 
          "activity": "移動至網走", 
          "desc": "車程較長，沿途欣賞雪原風景。休息站若看到『紋別蟹爪』地標記得拍照。", 
          "type": "activity", 
          "coords": [44.0203, 144.2758] 
        },
        { 
          "time": "13:00", 
          "activity": "流冰觀光船 Aurora", 
          "desc": "【運氣遊戲】若有冰，務必上甲板感受震撼巨響。必買船上限定藍色『流冰 Draft 啤酒』與『流冰蘇打』拍照。", 
          "type": "highlight", 
          "coords": [44.0203, 144.2758] 
        },
        { 
          "time": "16:00", 
          "activity": "銀河、流星瀑布", 
          "desc": "【冰封絕景】瀑布完全結凍成巨大藍色冰柱。運氣好能看到攀冰訓練者。", 
          "type": "highlight", 
          "coords": [43.7198, 143.0034] 
        },
        { 
          "time": "20:00", 
          "activity": "層雲峽冰瀑祭", 
          "desc": "【極寒生存戰】氣溫-15°C，地面純冰需冰爪。必訪冰雪神社、20:30煙火秀、Ice Bar。", 
          "type": "highlight", 
          "coords": [43.7258, 142.9535] 
        },
        { 
          "time": "21:30", 
          "activity": "Seicomart 宵夜", 
          "desc": "【超商之神】必吃 Hot Chef 現做：『炸豬排丼』(神級便當)、『大飯糰』(明太子)。飯後來支哈密瓜冰淇淋。", 
          "type": "food", 
          "coords": [43.7237, 142.9501] 
        }
      ]
    },
    {
      "day": 3,
      "date": "01/26 (Mon)",
      "region": "小樽/札幌 (Otaru/Sapporo)",
      "hotel": "宜必思尚品札幌酒店",
      "highlights": ["賞味期限2小時甜點", "三大蟹放題", "狸小路深度購物"],
      "schedule": [
        { 
          "time": "10:00", 
          "activity": "小樽運河", 
          "desc": "拍照點：淺草橋上。紅磚配白雪很美但路滑。不要停留太久，把時間留給商店街。", 
          "type": "highlight", 
          "coords": [43.1994, 141.0016]
        },
        { 
          "time": "11:00", 
          "activity": "堺町通商店街", 
          "desc": "【甜點攻略】六花亭『雪こんチーズ』(賞味期2hr)；北菓樓『夢不思議泡芙』；LeTAO本店限定『生』雙層起司蛋糕。", 
          "type": "food", 
          "coords": [43.1930, 141.0076],
          "strategies": [
            {
              "title": "Uniqlo 小樽店",
              "tag": "動線陷阱",
              "desc": "位於『JR南小樽站』上坡處。最佳戰略：先在南小樽站買完寄放，再走下坡逛街。",
              "address": "2-7 Sumiyoshicho, Otaru, Hokkaido 047-0015日本",
              "coords": [43.1856, 141.0076]
            }
          ]
        },
        { 
          "time": "13:00", 
          "activity": "北一硝子/音樂盒館", 
          "desc": "三號館煤油燈咖啡廳氣氛佳。門口蒸氣鐘每15分報時。旅行社贈杯可選新杯帶走。", 
          "type": "shop", 
          "coords": [43.1914, 141.0083] 
        },
        { 
          "time": "16:00", 
          "activity": "札幌市區車遊", 
          "desc": "車遊時計台、舊道廳。重點是大通公園『白色燈樹節』，整條公園璀璨燈飾，準備好相機。", 
          "type": "highlight", 
          "coords": [43.0621, 141.3544]
        },
        { 
          "time": "18:00", 
          "activity": "三大蟹吃到飽", 
          "desc": "【火力展示】專攻帝王蟹腳！松葉蟹鮮甜、毛蟹膏濃。配 Sapporo Classic 啤酒絕配。", 
          "type": "food", 
          "coords": [43.0555, 141.3533] 
        },
        { 
          "time": "20:00", 
          "activity": "狸小路購物攻略", 
          "desc": "藥妝推『札幌藥妝』環境好。深夜補貨『唐吉訶德』。ACG去 Norbesa。", 
          "type": "shop", 
          "coords": [43.0575, 141.3533],
          "strategies": [
            {
              "title": "MEGA 唐吉訶德",
              "tag": "深夜唯一解",
              "desc": "24小時營業。Uniqlo關門後的救星。B1食品區必逛。避雷：21:00後退稅要排很久。",
              "address": "4 Chome-12-1 Minami 3 Jonishi, Chuo Ward, Sapporo, Hokkaido 060-0063日本",
              "coords": [43.0573, 141.3534]
            },
            {
              "title": "Uniqlo 札幌東急百貨",
              "tag": "新旗艦店",
              "desc": "【ESTA搬遷】現在札站南口東急百貨7F。20:00就關門！晚餐前務必先去。",
              "address": "日本〒060-0004 Hokkaido, Sapporo, Chuo Ward, Kita 4 Jonishi, 2 Chome−1 東急百貨店さっぽろ店 7階",
              "coords": [43.0632, 141.3536]
            }
          ]
        }
      ]
    },
    {
      "day": 4,
      "date": "01/27 (Tue)",
      "region": "洞爺/函館 (Toya/Hakodate)",
      "hotel": "湯之川 啄木亭",
      "highlights": ["氣球布丁", "雪上三合一", "百萬夜景攻略"],
      "schedule": [
        { 
          "time": "09:00", 
          "activity": "洞爺湖展望台", 
          "desc": "日本最北不凍湖。必買『牧家 (Bocca)』氣球布丁。銀魂粉必找『洞爺湖木刀』。", 
          "type": "highlight", 
          "coords": [42.6186, 140.8354] 
        },
        { 
          "time": "10:30", 
          "activity": "昭和新山", 
          "desc": "1943年隆起的年輕活火山，還在冒煙。旁邊熊牧場可買蘋果餵熊。", 
          "type": "highlight", 
          "coords": [42.5406, 140.8601] 
        },
        { 
          "time": "13:00", 
          "activity": "大沼國立公園", 
          "desc": "【雪上三合一】雪上摩托車、香蕉船(甩尾刺激)、冰釣公魚(現釣現炸天婦羅)。", 
          "type": "activity", 
          "coords": [41.9822, 140.6706] 
        },
        { 
          "time": "16:00", 
          "activity": "金森紅磚倉庫", 
          "desc": "必吃『Snaffle's』起司歐姆蕾。隱藏玩法：金森洋物館內 200日圓試吃現拿蛋糕+咖啡。", 
          "type": "shop", 
          "coords": [41.7667, 140.7169],
          "strategies": [
            {
              "title": "幸運小丑漢堡",
              "tag": "函館靈魂",
              "desc": "【全日本僅函館有】必點『中華雞腿堡』與『瓜拿納汽水』。末廣店就在金森倉庫旁。",
              "address": "14-17 Suehirocho, Hakodate, Hokkaido 040-0053日本",
              "coords": [41.7663, 140.7161]
            },
            {
              "title": "Uniqlo 函館昭和店",
              "tag": "不推薦",
              "desc": "【交通警告】遠離市區，市電不到。來回計程車費比買衣服還貴。不建議前往。",
              "address": "1 Chome-29-6 Showa, Hakodate, Hokkaido 041-0812日本",
              "coords": [41.8153, 140.7483]
            }
          ]
        },
        { 
          "time": "17:30", 
          "activity": "函館山夜景", 
          "desc": "【百萬夜景】米其林三星雙C海灣。務必日落前30分抵達，一次看黃昏藍調轉夜景。山頂極冷注意保暖。", 
          "type": "highlight", 
          "coords": [41.7610, 140.7144] 
        }
      ]
    },
    {
      "day": 5,
      "date": "01/28 (Wed)",
      "region": "函館 (Hakodate)",
      "hotel": "溫暖的家",
      "highlights": ["釣活烏賊", "無明礬海膽", "最後衝刺"],
      "schedule": [
        { 
          "time": "08:00", 
          "activity": "函館朝市", 
          "desc": "【美食衝刺】1.駅二市場釣活烏賊。2.海鮮丼推『Uni Murakami』(無明礬海膽)。3.干貝糖/昆布這裡買最便宜。", 
          "type": "food", 
          "coords": [41.7725, 140.7251] 
        },
        { 
          "time": "10:30", 
          "activity": "前往函館機場", 
          "desc": "國內線航廈商店較好逛，建議先去國內線買伴手禮 (Royce, Snaffle's) 再去國際線。", 
          "type": "flight", 
          "coords": [41.7735, 140.8222] 
        },
        { 
          "time": "12:20", 
          "activity": "起飛回台", 
          "desc": "IT237 飛往桃園。帶著滿滿戰利品與回憶回家。", 
          "type": "flight", 
          "coords": [41.7735, 140.8222] 
        }
      ]
    }
  ],
  "checklist": []
};
