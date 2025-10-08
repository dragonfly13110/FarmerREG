import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Calendar, FileEdit, Tractor, Sprout, Info, Leaf, Wind, Sun, Map, ChevronDown, ChevronUp } from 'lucide-react';

interface Period {
  icon: React.ReactElement;
  label: string;
  time: string;
}

interface CropSchedule {
  name: string;
  icon: React.ReactElement;
  periods: Period[];
  note?: string;
  tooltipText: string;
}

interface RiceDetail {
  type: string;
  plantingPeriod: string;
  registrationPeriod: string;
}

interface RegionData {
  name: string;
  icon: React.ReactElement;
  details: RiceDetail[];
  provinces: string;
}


const cropData: CropSchedule[] = [
  {
    name: 'ข้าวนาปี',
    icon: <Sprout size={28} className="text-green-700" />,
    tooltipText: 'ปลูกในช่วงฤดูฝนโดยอาศัยน้ำฝนเป็นหลัก ต้องแจ้งปรับปรุงข้อมูลทุกปี',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'พฤษภาคม - ตุลาคม' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 วัน - 31 ตุลาคม' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'กันยายน - กุมภาพันธ์ (ปีถัดไป)' },
    ],
    note: 'ช่วงเวลาอาจแตกต่างกันในแต่ละภาค (ดูรายละเอียดด้านล่าง)'
  },
  {
    name: 'ข้าวนาปรัง',
    icon: <Sprout size={28} className="text-green-700" />,
    tooltipText: 'ปลูกนอกฤดูฝนโดยอาศัยน้ำจากระบบชลประทานเป็นหลัก ต้องแจ้งปรับปรุงข้อมูลทุกปี',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'พฤศจิกายน - เมษายน' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 วัน - 30 เมษายน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'กุมภาพันธ์ - กรกฎาคม' },
    ],
    note: 'ปลูกในเขตชลประทาน (ดูรายละเอียดรายภาคด้านล่าง)'
  },
  {
    name: 'ข้าวโพดเลี้ยงสัตว์ (ฤดูฝน)',
    icon: <Wind size={28} className="text-blue-600" />,
    tooltipText: 'ปลูกเพื่อใช้เป็นอาหารสัตว์ในช่วงฤดูฝน ต้องแจ้งปรับปรุงข้อมูลทุกรอบการผลิต',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'เมษายน - สิงหาคม' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 - 60 วัน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'กรกฎาคม - พฤศจิกายน' },
    ],
  },
    {
    name: 'ข้าวโพดเลี้ยงสัตว์ (ฤดูแล้ง)',
    icon: <Sun size={28} className="text-orange-500" />,
    tooltipText: 'ปลูกเพื่อใช้เป็นอาหารสัตว์ในช่วงฤดูแล้ง อาศัยน้ำชลประทาน',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'พฤศจิกายน - กุมภาพันธ์' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 - 60 วัน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'กุมภาพันธ์ - พฤษภาคม' },
    ],
  },
  {
    name: 'มันสำปะหลัง',
    icon: <Leaf size={28} className="text-yellow-600" />,
    tooltipText: 'พืชหัวเศรษฐกิจ ปลูกได้ตลอดปี ทนแล้งได้ดี แจ้งข้อมูลการปลูกเพียงครั้งแรก',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'ตลอดทั้งปี' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 - 60 วัน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'หลังปลูก 8 - 12 เดือน' },
    ],
  },
  {
    name: 'อ้อยโรงงาน',
    icon: <Leaf size={28} className="text-purple-600" />,
    tooltipText: 'พืชอุตสาหกรรมสำหรับผลิตน้ำตาล แจ้งข้อมูลการปลูกเพียงครั้งแรก และแจ้งอ้อยตอในรอบถัดไป',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'ตุลาคม - กุมภาพันธ์' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 - 60 วัน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'ธันวาคม - เมษายน (ปีถัดไป)' },
    ],
  },
  {
    name: 'ไม้ผล / ไม้ยืนต้น',
    icon: <Leaf size={28} className="text-emerald-600" />,
    tooltipText: 'พืชให้ผลผลิตระยะยาว เช่น ทุเรียน, ยางพารา ต้องแจ้งข้อมูลการปลูกเพียงครั้งแรก',
    periods: [
      { icon: <Calendar size={16} />, label: 'ช่วงเวลาเพาะปลูก', time: 'ตลอดทั้งปี' },
      { icon: <FileEdit size={16} />, label: 'ช่วงเวลาแจ้งขึ้น/ปรับปรุง', time: 'หลังปลูก 15 - 60 วัน' },
      { icon: <Tractor size={16} />, label: 'ช่วงเวลาเก็บเกี่ยว', time: 'ขึ้นอยู่กับชนิดพืช (เช่น ปาล์ม 3 ปี, ยาง 7 ปี)' },
    ],
    note: 'เช่น ปาล์มน้ำมัน, ยางพารา, ลำไย, ทุเรียน เป็นต้น'
  },
];

const regionalRiceData: RegionData[] = [
    {
        name: 'ภาคกลางและภาคตะวันออก (บางจังหวัด)',
        icon: <Map size={24} />,
        details: [
            { type: 'ข้าวนาปี (รอบที่ 1)', plantingPeriod: '1 เมษายน - 31 ตุลาคม', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 31 ตุลาคม' },
            { type: 'ข้าวนาปรัง (รอบที่ 2)', plantingPeriod: '1 พฤศจิกายน - 31 มีนาคม (ปีถัดไป)', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 31 มีนาคม' },
        ],
        provinces: 'ชัยนาท, นครนายก, นครปฐม, นนทบุรี, ปทุมธานี, อยุธยา, ลพบุรี, สระบุรี, สิงห์บุรี, สุพรรณบุรี, อ่างทอง, ฉะเชิงเทรา, ปราจีนบุรี, สระแก้ว'
    },
    {
        name: 'ภาคเหนือ, ภาคตะวันออกเฉียงเหนือ, และพื้นที่อื่นๆ',
        icon: <Map size={24} />,
        details: [
            { type: 'ข้าวนาปี', plantingPeriod: '1 พฤษภาคม - 31 ตุลาคม', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 31 ตุลาคม' },
            { type: 'ข้าวนาปรัง', plantingPeriod: '1 พฤศจิกายน - 30 เมษายน (ปีถัดไป)', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 30 เมษายน' },
        ],
        provinces: 'เชียงราย, เชียงใหม่, น่าน, พะเยา, แพร่, แม่ฮ่องสอน, ลำปาง, ลำพูน, อุตรดิตถ์, กาฬสินธุ์, ขอนแก่น, ชัยภูมิ, นครพนม, นครราชสีมา, บึงกาฬ, บุรีรัมย์, มหาสารคาม, มุกดาหาร, ยโสธร, ร้อยเอ็ด, เลย, ศรีสะเกษ, สกลนคร, สุรินทร์, หนองคาย, หนองบัวลำภู, อุดรธานี, อุบลราชธานี, อำนาจเจริญ, กรุงเทพมหานคร, กำแพงเพชร, นครสวรรค์, พิจิตร, พิษณุโลก, เพชรบูรณ์, สมุทรปราการ, สมุทรสงคราม, สมุทรสาคร, สุโขทัย, อุทัยธานี, จันทบุรี, ชลบุรี, ตราด, ระยอง, กาญจนบุรี, ตาก, ประจวบคีรีขันธ์, เพชรบุรี, ราชบุรี'
    },
    {
        name: 'ภาคใต้ (ฝั่งอ่าวไทย)',
        icon: <Map size={24} />,
        details: [
            { type: 'ข้าวนาปี', plantingPeriod: '16 มิถุนายน - 28 กุมภาพันธ์ (ปีถัดไป)', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 28 กุมภาพันธ์' },
            { type: 'ข้าวนาปรัง', plantingPeriod: '1 มีนาคม - 15 มิถุนายน', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 15 มิถุนายน' },
        ],
        provinces: 'ชุมพร, สุราษฎร์ธานี, นครศรีธรรมราช, พัทลุง, สงขลา, ปัตตานี, ยะลา, นราธิวาส'
    },
    {
        name: 'ภาคใต้ (ฝั่งอันดามัน)',
        icon: <Map size={24} />,
        details: [
            { type: 'ข้าวนาปี', plantingPeriod: '1 พฤษภาคม - 31 ตุลาคม', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 31 ตุลาคม' },
            { type: 'ข้าวนาปรัง', plantingPeriod: '1 พฤศจิกายน - 30 เมษายน (ปีถัดไป)', registrationPeriod: 'แจ้งหลังปลูก 15 วัน แต่ไม่เกิน 30 เมษายน' },
        ],
        provinces: 'ระนอง, พังงา, ภูเก็ต, กระบี่, ตรัง, สตูล'
    }
];


const CropCard: React.FC<{ data: CropSchedule }> = ({ data }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="flex items-center mb-4">
            {data.icon}
            <div className="relative group ml-3">
                <h3 className="text-xl font-bold text-gray-800 cursor-pointer">{data.name}</h3>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-10">
                    {data.tooltipText}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
                </div>
            </div>
        </div>
        <div className="space-y-3 flex-grow">
            {data.periods.map((period, index) => (
                <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full mr-3 mt-0.5">
                        {period.icon}
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-700">{period.label}</p>
                        <p className="text-sm text-gray-500">{period.time}</p>
                    </div>
                </div>
            ))}
        </div>
        {data.note && <p className="text-xs text-gray-400 mt-4 text-center border-t pt-2">{data.note}</p>}
    </div>
);

const RegionAccordion: React.FC<{ region: RegionData }> = ({ region }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700 hover:bg-gray-50"
            >
                <div className="flex items-center">
                    <span className="text-green-600 mr-3">{region.icon}</span>
                    <span>{region.name}</span>
                </div>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200">
                    <div className="space-y-4">
                        {region.details.map(detail => (
                           <div key={detail.type} className="p-4 bg-gray-50 rounded-lg border">
                                <p className="font-bold text-green-800">{detail.type}</p>
                                <div className="mt-2 space-y-2 text-gray-700">
                                    <div className="flex items-center text-sm">
                                        <Calendar size={14} className="mr-2.5 flex-shrink-0 text-gray-500" />
                                        <span><strong>ช่วงเพาะปลูก:</strong> {detail.plantingPeriod}</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <FileEdit size={14} className="mr-2.5 flex-shrink-0 text-gray-500" />
                                        <span><strong>ช่วงแจ้งขึ้น/ปรับปรุง:</strong> {detail.registrationPeriod}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                        <p className="font-semibold text-sm text-blue-800">จังหวัดในพื้นที่:</p>
                        <p className="text-xs text-blue-700 mt-1">{region.provinces}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export const PlantingSchedulePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <PageHeader
        title="ปฏิทินการเกษตร (Farming Calendar)"
        subtitle="กรอบระยะเวลาการขึ้นทะเบียนและปรับปรุงข้อมูลตามชนิดพืชและรอบการผลิต"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
        
            <div className="max-w-4xl mx-auto mb-10 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg shadow">
                <div className="flex items-start">
                    <Info className="flex-shrink-0 w-6 h-6 text-amber-600 mr-4" />
                    <div>
                        <h3 className="text-lg font-semibold text-amber-800">ข้อควรรู้และสำคัญที่สุด</h3>
                        <p className="text-amber-700 mt-1">
                            เกษตรกรจะต้องแจ้งขึ้นทะเบียน/ปรับปรุงข้อมูล <strong>หลังจากเพาะปลูกไปแล้วอย่างน้อย 15 วัน แต่ไม่เกิน 60 วัน</strong> หรือก่อนช่วงเวลาเก็บเกี่ยวที่กำหนด (แล้วแต่ว่าเวลาใดจะถึงก่อน) เพื่อให้เจ้าหน้าที่สามารถตรวจสอบแปลงได้ทัน และเพื่อให้มีสิทธิ์เข้าร่วมมาตรการช่วยเหลือต่างๆ ของภาครัฐ
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cropData.map(crop => (
                    <CropCard key={crop.name} data={crop} />
                ))}
            </div>
            
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">รายละเอียดปฏิทินการปลูกข้าวรายภาค</h2>
                <p className="text-center text-gray-500 mb-8">เนื่องจากสภาพอากาศและระบบชลประทานที่แตกต่างกัน ทำให้ช่วงเวลาเพาะปลูกข้าวในแต่ละพื้นที่มีรายละเอียดดังนี้</p>
                <div className="max-w-4xl mx-auto space-y-4">
                    {regionalRiceData.map((region, index) => (
                        <RegionAccordion key={index} region={region} />
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};