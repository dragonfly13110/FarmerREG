import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Megaphone, FilePlus2, FileSearch2, Users, MapPin, CheckCircle2, Building, Smartphone, Globe } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactElement;
  details: string[];
  channels?: {
    name: string;
    description: string;
    icon: React.ReactElement;
  }[];
}

const processSteps: ProcessStep[] = [
  {
    title: "การเตรียมตัวและเอกสาร",
    description: "ขั้นตอนแรกคือการรับทราบข่าวสารและเตรียมเอกสารให้พร้อม",
    icon: <Megaphone className="text-blue-600" size={28} />,
    details: [
      "<strong>การประชาสัมพันธ์:</strong> เจ้าหน้าที่จะแจ้งช่วงเวลารับขึ้นทะเบียนผ่านช่องทางต่างๆ เช่น การประชุมหมู่บ้าน, หอกระจายข่าว, หรือผ่านผู้นำชุมชน",
      "<strong>การเตรียมเอกสาร:</strong> โปรดเตรียมเอกสารให้ครบถ้วนตามประเภทผู้ขอขึ้นทะเบียน<br><div class='mt-2 pl-4'><strong><u>บุคคลธรรมดา:</u></strong><ul class='list-disc pl-5 mt-1'><li>บัตรประชาชนตัวจริงของหัวหน้าครัวเรือน (เพื่อใช้ยืนยันตัวตนและตรวจสอบข้อมูลครัวเรือน)</li><li>เอกสารสิทธิ์ที่ดินตัวจริง หรือสำเนา</li><li>กรณีไม่มีเอกสารสิทธิ์: ต้องมีผู้นำชุมชนรับรองในแบบคำร้อง</li><li>กรณีมอบอำนาจ: หนังสือมอบอำนาจ และบัตรประชาชนตัวจริงของผู้มอบและผู้รับมอบ</li></ul></div><div class='mt-3 pl-4'><strong><u>นิติบุคคล:</u></strong><ul class='list-disc pl-5 mt-1'><li>หนังสือรับรองนิติบุคคล (ไม่เกิน 3 เดือน)</li><li>บัตรประชาชนตัวจริงของผู้มีอำนาจ/ผู้รับมอบอำนาจ</li><li>เอกสารสิทธิ์ที่ดิน</li><li>ตราประทับ (ถ้ามี)</li></ul></div>"
    ],
  },
  {
    title: "การยื่นคำร้อง",
    description: "เกษตรกรยื่นแบบคำร้องทะเบียนเกษตรกร (ทบก. 01) พร้อมเอกสารประกอบ",
    icon: <FilePlus2 className="text-green-600" size={28} />,
    details: [
        "กรอกข้อมูลในแบบ ทบก. 01 ให้ครบถ้วนและถูกต้องตามความเป็นจริง",
        "ยื่นคำร้องได้หลายช่องทางตามความสะดวก:",
    ],
    channels: [
        { name: "สำนักงานเกษตรอำเภอ", description: "ติดต่อยื่นคำร้องด้วยตนเอง", icon: <Building size={20}/> },
        { name: "แอปพลิเคชัน Farmbook", description: "สำหรับเกษตรกรรายเดิมเพื่อปรับปรุงข้อมูล", icon: <Smartphone size={20}/> },
        { name: "เว็บไซต์ e-Farmer", description: "สำหรับเกษตรกรรายใหม่", icon: <Globe size={20}/> },
        { name: "จุดบริการเคลื่อนที่", description: "ผ่านอาสาสมัครเกษตรหมู่บ้าน (อกม.) หรือจุดนัดหมาย", icon: <Users size={20}/> },
    ]
  },
  {
    title: "การตรวจสอบเอกสาร",
    description: "เจ้าหน้าที่รับเรื่องและตรวจสอบความถูกต้องครบถ้วนของเอกสารและคุณสมบัติเบื้องต้น",
    icon: <FileSearch2 className="text-amber-600" size={28} />,
    details: [
      "ตรวจสอบข้อมูลในแบบคำร้องกับเอกสารหลักฐานที่แนบมา",
      "ตรวจสอบคุณสมบัติของผู้ยื่นคำร้อง เช่น สัญชาติ, การบรรลุนิติภาวะ",
      "หากเอกสารไม่ครบถ้วน เจ้าหน้าที่จะแจ้งให้เกษตรกรนำมาเพิ่มเติม",
      "เมื่อเอกสารครบถ้วน เจ้าหน้าที่จะบันทึกข้อมูลเข้าระบบเพื่อรอการตรวจสอบขั้นต่อไป",
    ],
  },
  {
    title: "การตรวจสอบทางสังคม",
    description: "ตรวจสอบข้อมูลผ่านการมีส่วนร่วมของชุมชน เพื่อความถูกต้องและโปร่งใส",
    icon: <Users className="text-cyan-600" size={28} />,
    details: [
        "<strong>มี 2 วิธีหลัก:</strong> คือ การติดประกาศในหมู่บ้าน/ชุมชน และ/หรือ การจัดประชาคม",
        "<strong>การติดประกาศ:</strong> เจ้าหน้าที่จะนำข้อมูลไปติดประกาศ ณ ที่ทำการผู้ใหญ่บ้าน, ที่ทำการเกษตรอำเภอ หรือในชุมชน เป็นเวลา <strong>3 วัน</strong> เพื่อให้เกษตรกรตรวจสอบข้อมูลของตนเองและของเพื่อนบ้าน",
        "<strong>การยืนยันข้อมูล:</strong> หลังจากตรวจสอบข้อมูลบนประกาศแล้ว เกษตรกรต้องลงลายมือชื่อเพื่อยืนยันความถูกต้อง",
        "<strong>การจัดประชาคม:</strong> อาจมีการจัดประชุมกลุ่มเกษตรกร เพื่อให้ชุมชนช่วยกันตรวจสอบและรับรองข้อมูลการขึ้นทะเบียนของแต่ละรายอีกทางหนึ่ง",
    ],
  },
   {
    title: "การตรวจสอบพื้นที่จริง",
    description: "เจ้าหน้าที่ลงพื้นที่เพื่อยืนยันการประกอบการเกษตรและสำรวจตำแหน่งแปลง",
    icon: <MapPin className="text-purple-600" size={28} />,
    details: [
        "เจ้าหน้าที่หรือทีมงานจะลงพื้นที่จริงเพื่อตรวจสอบว่ามีการประกอบกิจกรรมการเกษตรตามที่แจ้งไว้",
        "ทำการวัดขนาดและวาดขอบเขตแปลงเกษตรกรรมในรูปแบบดิจิทัล (Digital Plotting) โดยใช้ค่าพิกัดภูมิศาสตร์ (GPS)",
        "ยืนยันชนิดพืช, จำนวน, และวัน/เดือน/ปีที่ปลูกให้ตรงกับข้อมูลที่แจ้ง",
    ],
  },
  {
    title: "การอนุมัติและออกทะเบียน",
    description: "เมื่อผ่านทุกขั้นตอนการตรวจสอบ นายทะเบียนจะอนุมัติและออกเอกสารรับรอง",
    icon: <CheckCircle2 className="text-emerald-600" size={28} />,
    details: [
        "หลังจากข้อมูลผ่านการตรวจสอบความถูกต้องครบถ้วนแล้ว นายทะเบียนจะพิจารณา 'รับขึ้นทะเบียน' โดยการอนุมัติข้อมูลในระบบทะเบียนเกษตรกร",
        "เจ้าหน้าที่พิมพ์ 'สมุดทะเบียนเกษตรกร' หรือแจ้งผลการขึ้นทะเบียนให้เกษตรกรทราบ",
        "ข้อมูลของเกษตรกรจะถูกปรับปรุงให้เป็นปัจจุบันในฐานข้อมูลกลางของประเทศ ถือเป็นอันเสร็จสิ้นกระบวนการ",
    ],
  }
];

export const ProcessPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <PageHeader
        title="ขั้นตอนการลงทะเบียน (Registration Process)"
        subtitle="คู่มือแนะนำขั้นตอนการปฏิบัติงานสำหรับการขึ้นทะเบียนและปรับปรุงข้อมูลอย่างละเอียด"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
            <ol className="relative border-l-2 border-gray-300">
                {processSteps.map((step, index) => (
                    <li key={index} className="mb-12 ml-8">
                        <span className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full -left-7 ring-8 ring-white border border-gray-300">
                            {step.icon}
                        </span>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 ml-4">
                             <h3 className="flex items-center mb-1 text-xl font-bold text-gray-800">
                                ขั้นตอนที่ {index + 1}: {step.title}
                            </h3>
                            <p className="block mb-5 text-sm font-normal leading-none text-gray-500">{step.description}</p>
                            
                            <ul className="space-y-3 text-gray-600">
                                {step.details.map((detail, dIndex) => (
                                    <li key={dIndex} className="flex items-start">
                                        <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-green-500 mr-2 mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: detail }} />
                                    </li>
                                ))}
                            </ul>

                             {step.channels && (
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {step.channels.map((channel, cIndex) => (
                                        <div key={cIndex} className="flex items-center p-3 bg-gray-50 rounded-md border">
                                            <div className="text-gray-600 mr-3">{channel.icon}</div>
                                            <div>
                                                <p className="font-semibold text-sm text-gray-700">{channel.name}</p>
                                                <p className="text-xs text-gray-500">{channel.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
      </div>
    </div>
  );
};