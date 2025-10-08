import React from 'react';
import { NAV_ITEMS, NavItem } from '../constants';
import type { Page } from '../types';

interface HomePageProps {
  setActivePage: (page: Page) => void;
}

const getSectionDescription = (id: string) => {
    switch(id) {
        case 'terminology': return 'รวมคำจำกัดความและนิยามศัพท์ที่สำคัญที่ใช้ในคู่มือ';
        case 'rationale': return 'ทำความเข้าใจถึงที่มาและความสำคัญของการขึ้นทะเบียนเกษตรกร';
        case 'conditions': return 'ตรวจสอบคุณสมบัติและเงื่อนไขสำหรับผู้ที่ต้องการขึ้นทะเบียน';
        case 'process': return 'คู่มือแนะนำขั้นตอนการลงทะเบียนและปรับปรุงข้อมูลอย่างละเอียด';
        case 'form-guide': return 'วิธีกรอกแบบฟอร์มคำร้อง (ทบก.) อย่างถูกต้อง';
        case 'reports': return 'ข้อมูลเกี่ยวกับเอกสารที่จะได้รับหลังการลงทะเบียน';
        case 'planting-schedule': return 'กรอบระยะเวลาการขึ้นทะเบียนสำหรับพืชแต่ละชนิด';
        case 'minimum-area': return 'ข้อมูลจำนวนเนื้อที่ขั้นต่ำในการขึ้นทะเบียนแต่ละกิจกรรมการเกษตร';
        case 'planting-density': return 'ตารางอัตราส่วนจำนวนต้นไม้ผล/ไม้ยืนต้นต่อเนื้อที่ 1 ไร่';
        case 'assistant': return 'สอบถามข้อสงสัยกับผู้ช่วย AI ที่พร้อมตอบทุกคำถามเกี่ยวกับคู่มือ';
        default: return '';
    }
}

const SectionLink: React.FC<{ item: NavItem; setActivePage: (page: Page) => void }> = ({ item, setActivePage }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      setActivePage(item.id);
    }}
    className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-green-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-green-200 cursor-pointer"
  >
    <div className="text-green-600 mr-4 mt-1">{item.icon}</div>
    <div>
      <h4 className="font-semibold text-gray-700">{item.label}</h4>
      <p className="text-sm text-gray-500 mt-1">{getSectionDescription(item.id)}</p>
    </div>
  </a>
);


export const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
  const mainSections = NAV_ITEMS.filter(item => item.id !== 'home' && item.id !== 'assistant' && !item.isDetailed);
  const detailedSections = NAV_ITEMS.filter(item => item.isDetailed);
  const assistantSection = NAV_ITEMS.find(item => item.id === 'assistant');

  return (
    <div>
      <div className="bg-green-700">
        <div className="max-w-4xl mx-auto text-center py-16 px-6 text-white">
            <h1 className="text-4xl font-bold drop-shadow-lg">คู่มือการขึ้นทะเบียนและปรับปรุงทะเบียนเกษตรกร 2568</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto drop-shadow-md">
                เรียนรู้และทำความเข้าใจกระบวนการทั้งหมดในรูปแบบดิจิทัลที่เข้าถึงง่าย
            </p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md -mt-16 relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">ยินดีต้อนรับสู่คู่มือทะเบียนเกษตรกรฉบับดิจิทัล!</h2>
            <p className="text-gray-600 mb-6">
                เว็บไซต์นี้จัดทำขึ้นเพื่อช่วยให้เกษตรกรและผู้ที่สนใจ สามารถศึกษาและทำความเข้าใจขั้นตอน, หลักเกณฑ์, และเงื่อนไขต่างๆ
                เกี่ยวกับการขึ้นทะเบียนเกษตรกรได้อย่างสะดวกและรวดเร็ว เราได้สรุปและจัดเรียงเนื้อหาจากคู่มือฉบับเต็มของกรมส่งเสริมการเกษตร
                เพื่อให้ง่ายต่อการค้นหาและเรียนรู้
            </p>
            <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">โครงสร้างเนื้อหาหลัก:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mainSections.map((item) => (
                       <SectionLink key={item.id} item={item} setActivePage={setActivePage} />
                    ))}
                </div>
                
                <h3 className="text-xl font-semibold text-green-700 mt-8 mb-4">ข้อมูลสำคัญจากภาคผนวก:</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {detailedSections.map((item) => (
                        <SectionLink key={item.id} item={item} setActivePage={setActivePage} />
                    ))}
                </div>

                {assistantSection && (
                     <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setActivePage(assistantSection.id);
                        }}
                        className="block mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center hover:bg-emerald-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                        <div className="text-emerald-600 mr-4">{assistantSection.icon}</div>
                        <div>
                            <h4 className="font-semibold text-gray-700">{assistantSection.label}</h4>
                            <p className="text-sm text-gray-500 mt-1">{getSectionDescription(assistantSection.id)}</p>
                        </div>
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};