import React, { useState, useEffect } from 'react';
import { tripData } from './tripData';
import MapComponent from './components/MapComponent';
import { 
  Plane, Utensils, Snowflake, ShoppingBag, MapPin, Info, X, Phone, Image as ImageIcon,
  FileText, CreditCard, Zap, Smartphone, Thermometer, Package, Target, ChevronDown, ChevronUp, Navigation, ExternalLink
} from 'lucide-react';
import clsx from 'clsx';

function App() {
  const [activeDay, setActiveDay] = useState(0); 
  const [showInfo, setShowInfo] = useState(false);
  
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('hokkaido_checklist');
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedLoc, setSelectedLoc] = useState(null);
  const [detailItem, setDetailItem] = useState(null);
  const [expandedStrategy, setExpandedStrategy] = useState(null);
  const [tempStrategyMarker, setTempStrategyMarker] = useState(null);

  const currentDayData = tripData.days[activeDay];

  useEffect(() => {
    localStorage.setItem('hokkaido_checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    if (!detailItem) {
      setExpandedStrategy(null);
    }
  }, [detailItem]);

  useEffect(() => {
    if (tempStrategyMarker) {
      const timer = setTimeout(() => {
        setTempStrategyMarker(null);
      }, 15000); 
      return () => clearTimeout(timer);
    }
  }, [tempStrategyMarker]);

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

  const handleShowStrategyLoc = (e, strat) => {
    e.stopPropagation();
    setDetailItem(null); 
    setTempStrategyMarker({
      coords: strat.coords,
      label: strat.title
    });
  };

  // ⚠️ 關鍵修正：優先使用地址搜尋
  const handleGoogleMapSearch = (e, strat) => {
    e.stopPropagation();
    // 如果有提供地址(address)，優先用地址搜尋；否則用標題(title)
    const query = encodeURIComponent(strat.address || strat.title);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const getIcon = (type) => {
    switch(type) {
      case 'flight': return <Plane className="w-5 h-5 text-blue-500" />;
      case 'food': return <Utensils className="w-5 h-5 text-orange-500" />;
      case 'highlight': return <Snowflake className="w-5 h-5 text-cyan-500" />;
      case 'shop': return <ShoppingBag className="w-5 h-5 text-pink-500" />;
      case 'activity': return <MapPin className="w-5 h-5 text-green-500" />;
      default: return <MapPin className="w-5 h-5 text-gray-400" />;
    }
  };

  const getCategoryIcon = (type) => {
    switch(type) {
      case 'docs': return <FileText className="text-blue-600" />;
      case 'finance': return <CreditCard className="text-green-600" />;
      case 'winter': return <Thermometer className="text-red-600" />;
      case 'apps': return <Smartphone className="text-purple-600" />;
      case 'daily': return <Package className="text-orange-600" />;
      default: return <Zap className="text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-ice-50 pb-24 md:pb-10 font-sans text-slate-800">
      
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
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeDay === idx 
                    ? "bg-ice-500 text-white shadow-md scale-105" 
                    : "bg-white text-slate-600 border border-slate-100 hover:bg-ice-50"
                )}
              >
                {d.day === 0 ? "行前準備" : `Day ${d.day}`}
                <span className="block text-[10px] opacity-90">{d.region.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {activeDay === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {currentDayData.categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-ice-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                  {getCategoryIcon(cat.type)}
                  <h3 className="font-bold text-slate-800">{cat.title}</h3>
                </div>
                <div className="p-4">
                  {cat.note && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100 font-medium">
                      ⚠️ {cat.note}
                    </div>
                  )}
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        {cat.type !== 'apps' ? (
                          <input 
                            type="checkbox"
                            checked={!!checkedItems[item.text]}
                            onChange={() => toggleCheck(item.text)}
                            className="mt-1 w-5 h-5 text-ice-500 rounded border-gray-300 focus:ring-ice-500 cursor-pointer flex-shrink-0"
                          />
                        ) : (
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-ice-400 flex-shrink-0"></div>
                        )}
                        <div className={clsx(checkedItems[item.text] && "opacity-50 transition-opacity")}>
                          <p className={clsx("text-base font-bold text-slate-800", checkedItems[item.text] && "line-through")}>
                            {item.text}
                          </p>
                          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="md:grid md:grid-cols-12 md:gap-6">
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-ice-100">
                <h2 className="text-2xl font-bold text-ice-900 flex items-center gap-2">
                  <span className="text-4xl text-ice-200 font-black">{currentDayData.day}</span>
                  {currentDayData.region.split(' ')[0]}
                </h2>
                <p className="text-sm text-slate-500 mt-1">🏨 {currentDayData.hotel}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentDayData.highlights.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-100 text-xs rounded-md font-medium">
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
                        <h3 className="font-bold text-slate-800 truncate group-hover:text-ice-600">
                          {item.activity}
                        </h3>
                        <span className="text-xs font-mono text-slate-400 whitespace-nowrap ml-2">{item.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.desc}</p>
                      {item.strategies && (
                        <div className="mt-1.5 inline-flex items-center px-1.5 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded border border-red-100">
                           <Target size={10} className="mr-1" /> 
                           含 {item.strategies.length} 個戰略點
                        </div>
                      )}
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

            <div className="md:col-span-7 mt-6 md:mt-0 sticky md:top-24 h-[350px] md:h-[calc(100vh-120px)] bg-slate-100 rounded-xl shadow-inner overflow-hidden border border-slate-200 z-0">
              <MapComponent 
                schedule={currentDayData.schedule || []} 
                selectedLocation={selectedLoc} 
                tempMarker={tempStrategyMarker}
              />
            </div>
          </div>
        )}
      </main>

      {detailItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={() => setDetailItem(null)}>
          <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative max-h-[85vh] overflow-y-auto hide-scrollbar" onClick={e => e.stopPropagation()}>
            <div className="h-32 bg-gradient-to-r from-ice-400 to-blue-500 flex items-center justify-center relative flex-shrink-0">
               <ImageIcon className="text-white/50 w-12 h-12" />
               <button onClick={() => setDetailItem(null)} className="absolute top-4 right-4 p-1 bg-black/20 text-white rounded-full hover:bg-black/40 backdrop-blur-md transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-ice-100 text-ice-700 text-xs font-bold rounded">{detailItem.time}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{detailItem.activity}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 border-l-4 border-ice-200 pl-3">{detailItem.desc}</p>
              
              {detailItem.strategies && (
                <div className="mb-6">
                  <h3 className="font-bold text-red-600 mb-2 flex items-center gap-1.5">
                    <Target size={18} /> 戰略補給 / 額外情報
                  </h3>
                  <div className="space-y-2">
                    {detailItem.strategies.map((strat, idx) => (
                      <div key={idx} className="border border-red-100 rounded-lg overflow-hidden bg-red-50/50">
                        <button 
                          onClick={() => setExpandedStrategy(expandedStrategy === idx ? null : idx)}
                          className="w-full p-3 flex items-center justify-between text-left hover:bg-red-50 transition-colors"
                        >
                          <div>
                            <span className="text-xs font-bold text-red-600 bg-red-100 px-1.5 py-0.5 rounded mr-2">
                              {strat.tag}
                            </span>
                            <span className="font-bold text-slate-800 text-sm">{strat.title}</span>
                          </div>
                          {expandedStrategy === idx ? <ChevronUp size={16} className="text-red-400"/> : <ChevronDown size={16} className="text-red-400"/>}
                        </button>
                        
                        {expandedStrategy === idx && (
                          <div className="p-3 pt-0 text-sm text-slate-600 border-t border-red-100 bg-white">
                            <p className="mb-3 leading-relaxed">{strat.desc}</p>
                            
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => handleShowStrategyLoc(e, strat)}
                                className="flex-1 py-2 bg-red-600 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-red-700"
                              >
                                <Navigation size={12} /> 顯示 {strat.title} 位置
                              </button>

                              <button 
                                onClick={(e) => handleGoogleMapSearch(e, strat)}
                                className="flex-1 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-slate-50"
                              >
                                <ExternalLink size={12} /> Google Map 開啟
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detailItem.coords ? (
                <a href={`https://www.google.com/maps/search/?api=1&query=${detailItem.coords[0]},${detailItem.coords[1]}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all"><MapPin size={18} /> 開啟 Google Maps 導航</a>
              ) : (
                <button disabled className="w-full py-3 bg-slate-100 text-slate-400 rounded-xl font-bold cursor-not-allowed flex items-center justify-center gap-2"><Plane size={18} /> 無導航座標 (交通/住宿)</button>
              )}
            </div>
          </div>
        </div>
      )}

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
