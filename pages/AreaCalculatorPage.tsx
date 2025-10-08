import React, { useState, useMemo } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Calculator, HelpCircle, ChevronsRight } from 'lucide-react';
import { densityData, PlantDensity } from '../data/plantingData';

interface CalculationResult {
  rai: number;
  ngan: number;
  wa: number;
}

export const AreaCalculatorPage: React.FC = () => {
  const [selectedPlant, setSelectedPlant] = useState<string>('');
  const [treeCount, setTreeCount] = useState<number | ''>('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const plantOptions = useMemo(() => {
    return densityData.flatMap(category => category.items);
  }, []);

  const handleCalculate = () => {
    if (!selectedPlant || !treeCount || treeCount <= 0) {
        setResult(null);
        return;
    }
    
    const plantInfo = plantOptions.find(p => p.name === selectedPlant);
    if (!plantInfo) return;

    const totalRai = Number(treeCount) / plantInfo.treesPerRai;

    const rai = Math.floor(totalRai);
    const remainingWa = (totalRai - rai) * 400;
    const ngan = Math.floor(remainingWa / 100);
    const wa = Math.round(remainingWa % 100);

    setResult({ rai, ngan, wa });
  };
  
  const selectedPlantInfo = plantOptions.find(p => p.name === selectedPlant);

  return (
    <div className="bg-gray-50 min-h-full">
      <PageHeader
        title="เครื่องมือคำนวณเนื้อที่"
        subtitle="คำนวณเนื้อที่เพาะปลูกโดยประมาณจากจำนวนต้นไม้ผลหรือไม้ยืนต้นที่ปลูก"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-2xl mx-auto">

            <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg shadow mb-8">
                <div className="flex items-start">
                    <HelpCircle className="flex-shrink-0 w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-800">เครื่องมือนี้ใช้ทำอะไร?</h3>
                        <p className="text-blue-700 mt-1">
                            ใช้สำหรับแปลง <strong>"จำนวนต้น"</strong> ของพืชที่ท่านปลูก ให้กลายเป็น <strong>"เนื้อที่"</strong> โดยประมาณในหน่วย ไร่-งาน-ตารางวา โดยอ้างอิงจากอัตราการปลูกมาตรฐานตามคู่มือของกรมส่งเสริมการเกษตร
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
                <div>
                    <label htmlFor="plant-select" className="block text-sm font-medium text-gray-700 mb-2">
                        1. เลือกชนิดพืชที่ท่านปลูก
                    </label>
                    <select
                        id="plant-select"
                        value={selectedPlant}
                        onChange={(e) => {
                            setSelectedPlant(e.target.value);
                            setResult(null);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option value="" disabled>-- กรุณาเลือกชนิดพืช --</option>
                        {densityData.map(category => (
                            <optgroup label={category.title} key={category.title}>
                                {category.items.map(plant => (
                                    <option key={plant.name} value={plant.name}>
                                        {plant.name}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </div>

                {selectedPlant && selectedPlantInfo && (
                    <div className="p-3 bg-gray-50 rounded-md text-center text-sm text-gray-600 transition-all duration-300">
                       อัตราส่วนมาตรฐานสำหรับ <strong>{selectedPlantInfo.name}</strong> คือ: <strong className="text-green-700">{selectedPlantInfo.treesPerRai} ต้นต่อไร่</strong>
                    </div>
                )}

                <div>
                    <label htmlFor="tree-count" className="block text-sm font-medium text-gray-700 mb-2">
                        2. กรอกจำนวนต้นทั้งหมด
                    </label>
                     <input
                        id="tree-count"
                        type="number"
                        value={treeCount}
                        onChange={(e) => {
                            setTreeCount(e.target.value === '' ? '' : Number(e.target.value));
                            setResult(null);
                        }}
                        placeholder="เช่น 150"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                        min="1"
                    />
                </div>

                <button
                    onClick={handleCalculate}
                    disabled={!selectedPlant || !treeCount || treeCount <= 0}
                    className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 shadow-md"
                >
                    <Calculator size={20} className="mr-2" />
                    คำนวณเนื้อที่
                </button>
            </div>
            
            {result && (
                 <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center transition-all duration-500 animate-fade-in">
                    <h3 className="text-lg font-semibold text-gray-600">ผลการคำนวณเนื้อที่โดยประมาณ:</h3>
                    <div className="my-4 flex justify-center items-center space-x-2 text-2xl md:text-3xl font-bold text-emerald-800">
                        <div>
                            <span className="text-5xl md:text-6xl">{result.rai}</span>
                            <span className="block text-sm font-medium text-gray-500">ไร่</span>
                        </div>
                        <ChevronsRight size={24} className="text-gray-400" />
                        <div>
                             <span className="text-5xl md:text-6xl">{result.ngan}</span>
                            <span className="block text-sm font-medium text-gray-500">งาน</span>
                        </div>
                        <ChevronsRight size={24} className="text-gray-400" />
                        <div>
                             <span className="text-5xl md:text-6xl">{result.wa}</span>
                            <span className="block text-sm font-medium text-gray-500">ตารางวา</span>
                        </div>
                    </div>
                     <p className="text-xs text-gray-500 mt-4">
                        *หมายเหตุ: เป็นการคำนวณจากอัตราส่วนมาตรฐานเท่านั้น เนื้อที่จริงอาจแตกต่างกันไปตามระยะปลูกและสภาพพื้นที่
                    </p>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

// Simple fade-in animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);
