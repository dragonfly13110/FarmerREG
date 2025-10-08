import React from 'react';
import { Apple, Grape, Trees, Shrub } from 'lucide-react';

export interface PlantDensity {
  name: string;
  spacing: string;
  treesPerRai: number;
}

export interface PlantCategory {
  title: string;
  icon: React.ReactElement;
  items: PlantDensity[];
}

export const densityData: PlantCategory[] = [
  {
    title: 'ไม้ผลเศรษฐกิจหลัก',
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(Apple, { size: 24, className: "text-red-600" }),
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
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(Grape, { size: 24, className: "text-purple-600" }),
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
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(Trees, { size: 24, className: "text-green-700" }),
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
    // FIX: Replaced JSX with React.createElement to be compatible with .ts files.
    icon: React.createElement(Shrub, { size: 24, className: "text-yellow-600" }),
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
