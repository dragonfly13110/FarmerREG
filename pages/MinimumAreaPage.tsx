
import React from 'react';
import { PageHeader } from '../components/PageHeader';
// FIX: Removed non-existent 'Salt' icon and added 'Waves' for the new 'Sea Salt' category.
import { Ruler, Info, Sprout, Leaf, Trees, Flower2, Droplets, Utensils, Bug, Waves } from 'lucide-react';

interface MinimumRequirement {
  name: string;
  minimum: string;
  unit: string;
}

interface ActivityCategory {
  title: string;
  icon: React.ReactElement;
  items: MinimumRequirement[];
}

const minimumAreaData: ActivityCategory[] = [
  {
    title: 'ข้าว',
    icon: <Sprout size={24} className="text-green-600" />,
    items: [
      { name: 'ข้าว', minimum: '1', unit: 'ไร่' },
    ],
  },
  {
    title: 'พืชไร่',
    icon: <Leaf size={24} className="text-yellow-600" />,
    items: [
      { name: 'ข้าวโพดเลี้ยงสัตว์', minimum: '1', unit: 'ไร่' },
      { name: 'มันสำปะหลัง', minimum: '1', unit: 'ไร่' },
      { name: 'อ้อยโรงงาน', minimum: '1', unit: 'ไร่' },
      { name: 'สับปะรด', minimum: '1', unit: 'ไร่' },
      { name: 'ถั่วเหลือง / ถั่วเขียว / ถั่วลิสง', minimum: '1', unit: 'ไร่' },
      { name: 'พืชอาหารสัตว์', minimum: '1', unit: 'ไร่' },
    ],
  },
   {
    title: 'พืชผัก',
    icon: <Utensils size={24} className="text-emerald-600" />,
    items: [
      { name: 'พืชผักทุกชนิด', minimum: '1', unit: 'งาน' },
      { name: 'พืชตระกูลกะหล่ำ', minimum: '1', unit: 'งาน' },
      { name: 'หน่อไม้ฝรั่ง', minimum: '1', unit: 'งาน' },
    ],
  },
  {
    title: 'ไม้ผลและไม้ยืนต้น',
    icon: <Trees size={24} className="text-lime-600" />,
    items: [
      { name: 'ทุเรียน, มังคุด, ลำไย, เงาะ', minimum: '15 ต้น หรือ 1 ไร่', unit: 'ต้น/ไร่' },
      { name: 'มะม่วง, มะพร้าว, ลิ้นจี่, ส้ม', minimum: '15 ต้น หรือ 1 ไร่', unit: 'ต้น/ไร่' },
      { name: 'ปาล์มน้ำมัน', minimum: '22 ต้น หรือ 1 ไร่', unit: 'ต้น/ไร่' },
      { name: 'ยางพารา', minimum: '80 ต้น หรือ 1 ไร่', unit: 'ต้น/ไร่' },
      { name: 'กาแฟ', minimum: '100 ต้น หรือ 1 ไร่', unit: 'ต้น/ไร่' },
    ],
  },
  {
    title: 'ไม้ดอกไม้ประดับ',
    icon: <Flower2 size={24} className="text-pink-600" />,
    items: [
      { name: 'กล้วยไม้ (พันธุ์ตัดดอก)', minimum: '1', unit: 'งาน' },
      { name: 'ไม้ตัดดอก / ไม้ตัดใบ', minimum: '1', unit: 'งาน' },
    ],
  },
  {
    title: 'พืชสมุนไพรและเครื่องเทศ',
    icon: <Droplets size={24} className="text-indigo-600" />,
    items: [
      { name: 'พืชสมุนไพร / เครื่องเทศ', minimum: '1', unit: 'งาน' },
    ],
  },
  {
    title: 'แมลงเศรษฐกิจ',
    icon: <Bug size={24} className="text-amber-700" />,
    items: [
      { name: 'ผึ้ง', minimum: '10', unit: 'รัง' },
      { name: 'ชันโรง', minimum: '10', unit: 'รัง' },
      { name: 'ครั่ง', minimum: '5', unit: 'ต้น (ต้นไม้ที่เลี้ยง)' },
      { name: 'ไหม', minimum: '1', unit: 'ไร่ (พื้นที่ปลูกหม่อน)' },
    ],
  },
  // FIX: Created a dedicated category for 'Sea Salt' for better UI and icon relevance.
  {
    title: 'เกลือสมุทร',
    icon: <Waves size={24} className="text-cyan-600" />,
    items: [
      { name: 'การทำนาเกลือสมุทร', minimum: '1', unit: 'ไร่' },
    ],
  },
  {
    title: 'การเกษตรอื่นๆ',
    icon: <Ruler size={24} className="text-gray-600" />,
    items: [
      { name: 'การเพาะเห็ด', minimum: '100', unit: 'ตารางเมตร' },
    ],
  },
];

const DataTable: React.FC<{ items: MinimumRequirement[] }> = ({ items }) => (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider w-2/4">ชนิดกิจกรรม</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">จำนวนขั้นต่ำ</th>
                    <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">หน่วย</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-medium">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.minimum}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.unit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);


export const MinimumAreaPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <PageHeader
        title="เนื้อที่ขั้นต่ำในการขึ้นทะเบียน"
        subtitle="ข้อมูลจากภาคผนวก 8: จำนวนเนื้อที่, จำนวนต้น, หรือจำนวนขั้นต่ำของกิจกรรมการเกษตรที่สามารถขอขึ้นทะเบียนได้"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-12">

            <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg shadow">
                <div className="flex items-start">
                    <Info className="flex-shrink-0 w-6 h-6 text-blue-600 mr-4 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-800">หลักการสำคัญ</h3>
                        <p className="text-blue-700 mt-1">
                            เกษตรกรเพียงแค่ประกอบกิจกรรมการเกษตร <strong>ชนิดใดชนิดหนึ่งให้ผ่านเกณฑ์ขั้นต่ำ</strong> ก็สามารถขึ้นทะเบียนเกษตรกรได้แล้ว ไม่จำเป็นต้องผ่านทุกเกณฑ์ เช่น หากปลูกข้าว 1 ไร่ (ซึ่งผ่านเกณฑ์) และปลูกมะม่วง 5 ต้น (ซึ่งไม่ผ่านเกณฑ์) ก็ยังคงสามารถขึ้นทะเบียนได้โดยแจ้งข้อมูลกิจกรรมทั้งสองอย่าง
                        </p>
                    </div>
                </div>
            </div>

            {minimumAreaData.map((category, index) => (
                <section key={index}>
                    <div className="flex items-center mb-4">
                        {category.icon}
                        <h2 className="text-2xl font-bold text-gray-800 ml-3">{category.title}</h2>
                    </div>
                    <DataTable items={category.items} />
                </section>
            ))}

        </div>
      </div>
    </div>
  );
};
