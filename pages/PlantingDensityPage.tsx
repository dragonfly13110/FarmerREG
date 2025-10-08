import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Trees, Info, Apple, Grape, Shrub } from 'lucide-react';

interface PlantDensity {
  name: string;
  spacing: string;
  treesPerRai: number;
}

interface PlantCategory {
  title: string;
  icon: React.ReactElement;
  items: PlantDensity[];
}

const densityData: PlantCategory[] = [
  {
    title: 'ไม้ผลเศรษฐกิจหลัก',
    icon: <Apple size={24} className="text-red-600" />,
    items: [
      { name: 'ทุเรียน', spacing: '8x8 หรือ 10x10', treesPerRai: 25 },
      { name: 'มังคุด', spacing: '10x10', treesPerRai: 16 },
      { name: 'เงาะ', spacing: '8x8', treesPerRai: 25 },
      { name: 'ลำไย', spacing: '8x8 หรือ 10x10', treesPerRai: 25 },
      { name: 'ลองกอง', spacing: '6x6', treesPerRai: 44 },
    ],
  },
  {
    title: 'ไม้ผลทั่วไป',
    icon: <Grape size={24} className="text-purple-600" />,
    items: [
      { name: 'มะม่วง', spacing: '8x8 หรือ 10x10', treesPerRai: 25 },
      { name: 'มะพร้าวน้ำหอม', spacing: '6x6 หรือ 7x7', treesPerRai: 44 },
      { name: 'ส้มโอ', spacing: '8x8', treesPerRai: 25 },
      { name: 'ส้มเขียวหวาน / ส้มสายน้ำผึ้ง', spacing: '4x6 หรือ 5x5', treesPerRai: 64 },
      { name: 'มะนาว', spacing: '4x4', treesPerRai: 100 },
      { name: 'ลิ้นจี่', spacing: '8x8', treesPerRai: 25 },
      { name: 'ขนุน', spacing: '8x8', treesPerRai: 25 },
      { name: 'ฝรั่ง', spacing: '4x4', treesPerRai: 100 },
      { name: 'ชมพู่', spacing: '6x6', treesPerRai: 44 },
      { name: 'กระท้อน', spacing: '10x10', treesPerRai: 16 },
      { name: 'น้อยหน่า', spacing: '4x4', treesPerRai: 100 },
    ],
  },
  {
    title: 'ไม้ยืนต้นและพืชอุตสาหกรรม',
    icon: <Trees size={24} className="text-green-700" />,
    items: [
      { name: 'ยางพารา', spacing: '3x7', treesPerRai: 76 },
      { name: 'ปาล์มน้ำมัน', spacing: '9x9 (สามเหลี่ยมด้านเท่า)', treesPerRai: 22 },
      { name: 'กาแฟ (อาราบิก้า)', spacing: '2x2', treesPerRai: 400 },
      { name: 'กาแฟ (โรบัสต้า)', spacing: '3x3', treesPerRai: 177 },
      { name: 'โกโก้', spacing: '4x4', treesPerRai: 100 },
      { name: 'มะม่วงหิมพานต์', spacing: '8x8', treesPerRai: 25 },
      { name: 'สัก', spacing: '4x4', treesPerRai: 100 },
    ],
  },
  {
    title: 'พืชสวนและอื่นๆ',
    icon: <Shrub size={24} className="text-yellow-600" />,
    items: [
      { name: 'กล้วยหอม / กล้วยไข่', spacing: '2x3 หรือ 3x3', treesPerRai: 200 },
      { name: 'กล้วยน้ำว้า', spacing: '4x4', treesPerRai: 100 },
      { name: 'มะละกอ', spacing: '2.5x2.5', treesPerRai: 256 },
      { name: 'แก้วมังกร', spacing: '3x3 (ระยะค้าง)', treesPerRai: 177 },
      { name: 'หมาก', spacing: '2x2', treesPerRai: 400 },
      { name: 'พลู', spacing: '2x2 (ระยะค้าง)', treesPerRai: 400 },
    ],
  },
];


const DataTable: React.FC<{ items: PlantDensity[] }> = ({ items }) => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider w-2/5">ชนิดพืช</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">ระยะปลูกที่แนะนำ (เมตร)</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">จำนวนต้นต่อไร่</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.spacing}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.treesPerRai.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const PlantingDensityPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <PageHeader
        title="อัตราการปลูกต่อไร่ (Planting Density)"
        subtitle="ข้อมูลจากภาคผนวก 9: ตารางอัตราส่วนจำนวนต้นไม้ผลและไม้ยืนต้นต่อเนื้อที่เพาะปลูก 1 ไร่ สำหรับใช้ในการคำนวณเนื้อที่"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-12">

            <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg shadow">
                <div className="flex items-start">
                    <Info className="flex-shrink-0 w-6 h-6 text-green-600 mr-4 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-green-800">ยืนยันความถูกต้องและวัตถุประสงค์ของข้อมูล</h3>
                        <p className="text-green-700 mt-1">
                            ข้อมูลอัตราการปลูกในหน้านี้ <strong>ถูกต้องและตรงตามภาคผนวก 9 ของคู่มือฉบับทางการ</strong> ครับ โดยมีไว้สำหรับ <strong>เจ้าหน้าที่ใช้คำนวณเนื้อที่เพาะปลูก</strong> ในกรณีที่เกษตรกรแจ้งขึ้นทะเบียนโดยระบุเป็น <strong>"จำนวนต้น"</strong> แต่ไม่สามารถระบุเนื้อที่ที่แน่นอนได้ เจ้าหน้าที่จะใช้อัตราส่วนมาตรฐานนี้ในการแปลงจำนวนต้นกลับมาเป็นเนื้อที่โดยประมาณเพื่อบันทึกลงระบบ
                        </p>
                    </div>
                </div>
            </div>

            {densityData.map((category: PlantCategory, index: number) => (
                <section key={index}>
                    <div className="flex items-center mb-4">
                        {category.icon}
                        <h2 className="text-2xl font-bold text-gray-800 ml-3">{category.title}</h2>
                    </div>
                    <DataTable items={category.items} />
                </section>
            ))}
            
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>หมายเหตุ: ระยะปลูกและจำนวนต้นต่อไร่อาจแตกต่างกันไปตามพันธุ์, สภาพพื้นที่, และเทคนิคการจัดการสวนของเกษตรกรแต่ละราย</p>
                <p>ตัวเลขในตารางนี้เป็นค่ามาตรฐานเพื่อใช้ในการอ้างอิง</p>
            </div>

        </div>
      </div>
    </div>
  );
};