import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BookMarked, UserCircle, MapPin, Sprout, History, Award, FileText, AlertTriangle, Banknote, ShieldAlert } from 'lucide-react';

// A component for each section of the registration book
const BookSection: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg border">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 rounded-md mr-4">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);

// A component for the usage examples
const UsageItem: React.FC<{ icon: React.ReactElement; text: string }> = ({ icon, text }) => (
    <li className="flex items-center">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full mr-3">
            {icon}
        </div>
        <span className="text-gray-700">{text}</span>
    </li>
);


export const ReportsPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="เอกสารและรายงาน (Documents & Reports)"
        subtitle="ทำความรู้จัก 'สมุดทะเบียนเกษตรกร' และเอกสารสำคัญที่ใช้ยืนยันสถานะความเป็นเกษตรกร"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-12">

            {/* Section 1: The Farmer's Registration Book */}
            <section className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-green-200">
                <div className="text-center mb-8">
                    <BookMarked size={48} className="mx-auto text-green-600" />
                    <h2 className="mt-4 text-3xl font-bold text-green-800">สมุดทะเบียนเกษตรกร (เล่มเขียว)</h2>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                        เอกสารสำคัญที่สุดที่ใช้แสดงตนและยืนยันสถานะการเป็นเกษตรกรที่ขึ้นทะเบียนไว้กับกรมส่งเสริมการเกษตร เปรียบเสมือน "บัตรประจำตัวเกษตรกร" ที่รวบรวมข้อมูลสำคัญทั้งหมดไว้
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">องค์ประกอบหลักภายในเล่ม:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BookSection 
                        icon={<UserCircle size={20} />}
                        title="ส่วนที่ 1: ข้อมูลครัวเรือน"
                        description="ประกอบด้วยข้อมูลพื้นฐานของหัวหน้าครัวเรือน, ที่อยู่, และรายชื่อสมาชิกทุกคนในครัวเรือนเกษตรกร"
                    />
                    <BookSection 
                        icon={<MapPin size={20} />}
                        title="ส่วนที่ 2: ข้อมูลการถือครองที่ดิน"
                        description="แสดงรายการที่ดินทุกแปลงที่ใช้ทำการเกษตร, ที่ตั้ง, ขนาดพื้นที่, และประเภทการถือครอง (เช่น ของตนเอง, เช่า)"
                    />
                     <BookSection 
                        icon={<Sprout size={20} />}
                        title="ส่วนที่ 3: ข้อมูลกิจกรรมการเกษตร"
                        description="ส่วนที่สำคัญที่สุด! ระบุรายละเอียดการเพาะปลูกพืช, การเลี้ยงแมลงเศรษฐกิจ, หรือการทำนาเกลือ ในแต่ละแปลงและรอบการผลิต"
                    />
                    <BookSection 
                        icon={<History size={20} />}
                        title="ส่วนที่ 4: ประวัติการปรับปรุงข้อมูล"
                        description="บันทึกประวัติการแจ้งปรับปรุงข้อมูลในแต่ละครั้ง เพื่อให้ข้อมูลกิจกรรมการเกษตรเป็นปัจจุบันอยู่เสมอ"
                    />
                    <BookSection 
                        icon={<Award size={20} />}
                        title="ส่วนที่ 5: การเข้าร่วมมาตรการภาครัฐ"
                        description="บันทึกข้อมูลการได้รับความช่วยเหลือหรือการเข้าร่วมโครงการต่างๆ จากภาครัฐ เช่น การประกันรายได้, การช่วยเหลือภัยพิบัติ"
                    />
                </div>
            </section>
            
            {/* Section 2: Certificate/Report */}
            <section className="bg-white p-8 rounded-xl shadow-md border">
                <div className="flex flex-col md:flex-row items-center">
                     <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <FileText size={40} className="text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-blue-800">ใบรับรองการขึ้นทะเบียนเกษตรกร</h2>
                        <p className="mt-1 text-gray-600">
                            เป็นเอกสารที่เจ้าหน้าที่พิมพ์ออกจากระบบฐานข้อมูลทะเบียนเกษตรกร เพื่อใช้รับรองสถานะการประกอบอาชีพเกษตรกรรม ณ วันที่ออกเอกสาร มักใช้เป็นหลักฐานประกอบการดำเนินธุรกรรม หรือขอรับบริการต่างๆ เป็นรายครั้งไป
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Section 3: Importance & Usage */}
            <section>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                        <div className="flex items-start">
                            <AlertTriangle className="flex-shrink-0 w-6 h-6 text-amber-600 mr-4" />
                            <div>
                                <h3 className="text-lg font-bold text-amber-800">ความสำคัญของการปรับปรุงข้อมูล</h3>
                                <p className="text-amber-700 mt-2 text-sm">
                                    สถานะเกษตรกรและสิทธิ์ในการรับความช่วยเหลือจะขึ้นอยู่กับ <strong>ข้อมูลที่เป็นปัจจุบันที่สุด</strong> ในระบบเสมอ หากไม่มีการปรับปรุงข้อมูลกิจกรรมการเกษตรตามรอบการผลิต (เช่น แจ้งปลูกข้าวนาปี) จะทำให้ท่าน <strong>เสียสิทธิ์</strong> ในการเข้าร่วมมาตรการช่วยเหลือที่เกี่ยวข้องกับการปลูกข้าวนั้นๆ
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                         <h3 className="text-lg font-bold text-gray-800 mb-4">ตัวอย่างการนำเอกสารไปใช้:</h3>
                         <ul className="space-y-3">
                            <UsageItem icon={<Banknote size={16} />} text="ยื่นขอสินเชื่อกับสถาบันการเงิน (เช่น ธ.ก.ส.)" />
                            <UsageItem icon={<ShieldAlert size={16} />} text="ขอรับการชดเชยความเสียหายกรณีเกิดภัยพิบัติทางธรรมชาติ" />
                            <UsageItem icon={<Award size={16} />} text="แสดงตนเพื่อเข้าร่วมโครงการต่างๆ ของรัฐ (เช่น ประกันรายได้)" />
                         </ul>
                    </div>
                 </div>
            </section>
        </div>
      </div>
    </div>
  );
};