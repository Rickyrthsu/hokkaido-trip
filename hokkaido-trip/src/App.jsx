import React, { useState } from 'react';
import { tripData } from './tripData';
import MapComponent from './components/MapComponent';
import { 
  Plane, Utensils, Snowflake, ShoppingBag, MapPin, CheckSquare, Info, X, Phone, Image as ImageIcon,
  FileText, CreditCard, Zap, Smartphone, Thermometer, ExternalLink
} from 'lucide-react';
import clsx from 'clsx';

function App() {
  const [activeDay, setActiveDay] = useState(0); // 預設從 Day 0 開始
  const [showInfo, setShowInfo] = useState(false);
  
  // Day 0 的檢查狀態 (使用簡單的物件來記錄: { "護照": true, "現金": false })
  // 1. 初始化：從 LocalStorage 讀取紀錄，如果沒有就給空物件
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('hokkaido-checklist');
    return saved ? JSON.parse(saved) : {};
  });

  // 2. 監聽變動：只要 checkedItems 有改變，就存入 LocalStorage
  React.useEffect(() => {
    localStorage.setItem('hokkaido-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const [selectedLoc, setSelectedLoc] = useState(null);
  const [detailItem, setDetailItem] = useState(null);

  const currentDayData = tripData.days[activeDay];

  const toggleCheck = (itemText) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  const handleDetailClick = (item) => {
    setDetailItem(item);
  };

  const handleMapClick = (e, item) => {
    e.stopPropagation();
    if (item.coords) {
      setSelectedLoc(item);
    } else {
      alert("這個行程在飛機上或沒有座標喔！");
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'flight': return <Plane className="w-5 h-5 text-blue-500" />;
      case 'food': return <Utensils className="w-5 h-5 text-orange-500" />;
      case 'highlight': return <Snowflake className="w-5 h-5 text-cyan-500" />;
      case 'shop': return <ShoppingBag className="w-5 h-5 text-pink-500" />;
      default: return <MapPin className="w-5 h-5 text-gray-400" />;
    }
  };

  // Day 0 專用圖示
  const getCategoryIcon = (type) => {
    switch(type) {
      case 'docs': return <FileText className="text-blue-600" />;
      case 'finance': return <CreditCard className="text-green-600" />;
      case 'winter': return <Thermometer className="text-red-600" />;
      case 'apps': return <Smartphone className="text-purple-600" />;
      default: return <Zap className="text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-ice-50 pb-24 md:pb-10 font-sans text-slate-800">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30 px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold text-ice-900">{tripData.meta.title}</h1>
          <p className="text-xs text-slate-500">{tripData.meta.dates}</p>
        </div>
        <button onClick={() => setShowInfo(true)} className="p-2 bg-ice-100 rounded-full text-ice-600 hover:bg-ice-200 transition-colors">
          <Info size={20} />
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        
        {/* Day Selector */}
        <div className="overflow-x-auto pb-4 hide-scrollbar mb-2">
          <div className="flex md:justify-center space-x-3 min-w-max px-1">
            {tripData.days.map((d, idx) => (
              <button
                key={d.day}
                onClick={() => { 
                  setActiveDay(idx); 
                  setSelectedLoc(null); 
                }}
                className={clsx(
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeDay === idx 
                    ? "bg-ice-500 text-white shadow-md scale-105" 
                    : "bg-white text-slate-600 border border-slate-100 hover:bg-ice-50"
                )}
              >
                {d.day === 0 ? "行前準備" : `Day ${d.day}`}
                <span className="block text-[10px] opacity-90">{d.region}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 內容區塊：根據是否為 Day 0 切換顯示模式 */}
        {activeDay === 0 ? (
          
          /* --- Day 0: 行前準備 Dashboard --- */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {currentDayData.categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-ice-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                  {getCategoryIcon(cat.type)}
                  <h3 className="font-bold text-slate-800">{cat.title}</h3>
                </div>
                <div className="p-4">
                  {cat.note && (
                    <div className="mb-3 p-2 bg-red-50 text-red-700 text-xs rounded border border-red-100">
                      💡 {cat.note}
                    </div>
                  )}
                  <div className="space-y-3">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {/* 除了 App 類別外，其他都顯示 Checkbox */}
                        {cat.type !== 'apps' ? (
                          <input 
                            type="checkbox"
                            checked={!!checkedItems[item.text]}
                            onChange={() => toggleCheck(item.text)}
                            className="mt-1 w-4 h-4 text-ice-500 rounded border-gray-300 focus:ring-ice-500 cursor-pointer"
                          />
                        ) : (
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-ice-400 flex-shrink-0" />
                        )}
                        <div className={clsx(checkedItems[item.text] && "opacity-50 transition-opacity")}>
                          <p className={clsx("text-sm font-bold text-slate-700", checkedItems[item.text] && "line-through")}>
                            {item.text}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* --- Day 1-5: 行程 + 地圖 (維持原本設計) --- */
          <div className="md:grid md:grid-cols-12 md:gap-6">
            
            {/* 左側列表 */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ice-100">
                <h2 className="text-2xl font-bold text-ice-900 flex items-center gap-2">
                  <span className="text-4xl text-ice-200 font-black">{currentDayData.day}</span>
                  {currentDayData.region}
                </h2>
                <p className="text-sm text-slate-500 mt-1">🏨 {currentDayData.hotel}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentDayData.highlights.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-100 text-xs rounded-md">
                      ✨ {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 relative">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 z-0"></div>
                {currentDayData.schedule?.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleDetailClick(item)} 
                    className="relative z-10 bg-white rounded-lg p-3 shadow-sm flex gap-3 border border-slate-50 cursor-pointer hover:shadow-md hover:border-ice-200 transition-all group items-center"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-white p-2 rounded-full border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                        {getIcon(item.type)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-slate-800 truncate group-hover:text-ice-600">{item.activity}</h3>
                        <span className="text-xs font-mono text-slate-400 whitespace-nowrap ml-2">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.desc}</p>
                    </div>
                    {item.coords && (
                      <button
                        onClick={(e) => handleMapClick(e, item)} 
                        className="p-2 rounded-lg bg-ice-50 text-ice-500 hover:bg-ice-500 hover:text-white transition-colors flex-shrink-0 z-20"
                        title="在地圖上顯示"
                      >
                        🗺️
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 右側地圖 */}
            <div className="md:col-span-7 mt-6 md:mt-0 sticky md:top-24 h-[350px] md:h-[calc(100vh-120px)] bg-slate-100 rounded-xl shadow-inner overflow-hidden border border-slate-200 z-0">
              <MapComponent schedule={currentDayData.schedule || []} selectedLocation={selectedLoc} />
            </div>

          </div>
        )}
      </main>

      {/* Detail Modal */}
      {detailItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={() => setDetailItem(null)}>
          <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <div className="h-32 bg-gradient-to-r from-ice-400 to-blue-500 flex items-center justify-center relative">
               <ImageIcon className="text-white/50 w-12 h-12" />
               <button onClick={() => setDetailItem(null)} className="absolute top-4 right-4 p-1 bg-black/20 text-white rounded-full hover:bg-black/40 backdrop-blur-md transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-ice-100 text-ice-700 text-xs font-bold rounded">{detailItem.time}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{detailItem.activity}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 border-l-4 border-ice-200 pl-3">{detailItem.desc}</p>
              {detailItem.coords ? (
                <a href={`https://www.google.com/maps/search/?api=1&query=${detailItem.coords[0]},${detailItem.coords[1]}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all"><MapPin size={18} /> 開啟 Google Maps 導航</a>
              ) : (
                <button disabled className="w-full py-3 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2"><Plane size={18} /> 無導航座標 (交通/住宿)</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowInfo(false)}>
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowInfo(false)} className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-800"><X size={24} /></button>
            <h2 className="text-xl font-bold text-ice-900 mb-6 flex items-center gap-2"><Info size={24} className="text-ice-500" /> 旅程資訊</h2>
            <div className="space-y-5 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">領隊 (緊急聯絡)</p>
                <div className="flex items-center gap-2 font-bold text-slate-800"><Phone size={16} /> {tripData.meta.leader}</div>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">集合資訊</p>
                <p className="font-medium text-red-600 bg-red-50 p-2 rounded border border-red-100">{tripData.meta.assembly}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
