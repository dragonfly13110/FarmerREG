
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ClipboardList, UserCircle2, Users, Landmark, Map, Leaf, DollarSign, PiggyBank, FileSignature, AlertTriangle, CheckSquare } from 'lucide-react';

const SectionCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-8">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const FieldItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
        <p className="font-semibold text-gray-700">{title}</p>
        <p className="text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
);

const TipBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 rounded-r-lg">
        <div className="flex items-start">
            <AlertTriangle className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5" />
            <div>
                <h4 className="font-bold">ข้อควรรู้และสำคัญมาก!</h4>
                <div className="text-sm mt-1">{children}</div>
            </div>
        </div>
    </div>
);

export const FormGuidePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="การกรอกแบบฟอร์ม (Form Guide)"
        subtitle="คำแนะนำวิธีการกรอกข้อมูลในแบบคำร้องทะเบียนเกษตรกร (ทบก. 01) อย่างถูกต้องและครบถ้วน"
      />
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200 mb-8 text-center">
                <ClipboardList size={40} className="mx-auto text-blue-600 mb-3" />
                <h2 className="text-2xl font-bold text-blue-800">ภาพรวมแบบคำร้อง ทบก. 01</h2>
                <p className="text-gray-600 mt-2">
                    แบบ ทบก. 01 คือเอกสารหลักสำหรับแจ้งข้อมูลของครัวเรือนและกิจกรรมการเกษตรทั้งหมด
                    โปรดกรอกข้อมูลด้วยลายมือที่ชัดเจน อ่านง่าย และเป็นความจริงทุกประการ
                </p>
            </div>

            <SectionCard icon={<UserCircle2 size={24} />} title="ส่วนที่ 1: ข้อมูลทั่วไปของครัวเรือนเกษตรกร">
                <p className="text-sm text-gray-500 -mt-2 mb-2">เป็นส่วนข้อมูลพื้นฐานของผู้ยื่นคำร้องและครัวเรือน</p>
                <FieldItem title="วันที่แจ้ง" description="ระบุวันที่ที่ท่านยื่นเอกสารกับเจ้าหน้าที่" />
                <FieldItem title="รหัสทะเบียนเกษตรกร" description="<strong>สำหรับเกษตรกรรายเดิม:</strong> ให้กรอกรหัส 12 หลักจากสมุดทะเบียนเล่มเก่า<br><strong>สำหรับเกษตรกรรายใหม่:</strong> ให้เว้นว่างไว้ เจ้าหน้าที่จะเป็นผู้กำหนดให้" />
                <FieldItem title="ชื่อ-สกุล หัวหน้าครัวเรือนเกษตรกร" description="ระบุชื่อ-สกุล ของผู้ที่เป็นตัวแทนหลักในการให้ข้อมูลของครัวเรือน" />
                 <TipBox>
                    <p>"หัวหน้าครัวเรือนเกษตรกร" <strong>ไม่จำเป็นต้องเป็นคนเดียวกับ "เจ้าบ้าน"</strong> ในทะเบียนบ้าน อาจเป็นสมาชิกคนใดก็ได้ที่ได้รับมอบหมายจากคนในครัวเรือน</p>
                </TipBox>
                <FieldItem title="เลขประจำตัวประชาชน" description="กรอกเลข 13 หลักของหัวหน้าครัวเรือนเกษตรกรให้ถูกต้อง" />
                <FieldItem title="ที่อยู่ตามทะเบียนบ้าน และ ที่อยู่ปัจจุบัน" description="กรอกที่อยู่ให้ครบถ้วน หากที่อยู่ปัจจุบันเป็นที่เดียวกับทะเบียนบ้าน ให้ขีด ' - ' ในช่องที่อยู่ปัจจุบัน" />
                <FieldItem title="อาชีพหลัก / อาชีพรอง" description="ระบุอาชีพที่สร้างรายได้หลักและรองของหัวหน้าครัวเรือน หากทำเกษตรเป็นหลักให้ระบุว่า 'ทำการเกษตร'" />
            </SectionCard>

            <SectionCard icon={<Users size={24} />} title="ส่วนที่ 2: ข้อมูลสมาชิกในครัวเรือน">
                 <p className="text-sm text-gray-500 -mt-2 mb-2">ระบุข้อมูลของทุกคนที่อาศัยและใช้จ่ายร่วมกันในครัวเรือน</p>
                <FieldItem title="ตารางสมาชิก" description="กรอกข้อมูลสมาชิกทุกคน ได้แก่ ชื่อ-สกุล, เลขบัตรประชาชน, ความสัมพันธ์กับหัวหน้าครัวเรือน, และอาชีพหลัก" />
                 <TipBox>
                    <p>"สมาชิกในครัวเรือน" หมายถึง <strong>ผู้ที่อยู่อาศัย กินและใช้จ่ายร่วมกัน</strong> ไม่ว่าจะอยู่ในทะเบียนบ้านเดียวกันหรือไม่ก็ตาม เช่น ลูกที่ไปทำงานต่างจังหวัดแต่ยังส่งเงินกลับมาให้ ก็ยังถือเป็นสมาชิกในครัวเรือน</p>
                    <p className="mt-2"><strong>กรณีคู่สมรส:</strong> หากอยู่กินฉันสามีภรรยา (ไม่ว่าจะจดทะเบียนหรือไม่) ให้นับเป็นครัวเรือนเดียวกันและต้องใส่ข้อมูลในส่วนนี้</p>
                </TipBox>
            </SectionCard>

            <SectionCard icon={<Landmark size={24} />} title="ส่วนที่ 3: ข้อมูลการถือครองที่ดินเพื่อการเกษตร">
                 <p className="text-sm text-gray-500 -mt-2 mb-2">ระบุรายละเอียดที่ดินทุกแปลงที่ใช้ทำการเกษตร</p>
                <FieldItem title="ประเภทการถือครอง" description="เลือกประเภทการถือครองให้ถูกต้อง:<br><strong>1. ของตนเอง:</strong> ที่ดินมีเอกสารสิทธิ์เป็นชื่อของสมาชิกในครัวเรือน<br><strong>2. เช่า:</strong> ที่ดินที่ต้องจ่ายค่าเช่า (เป็นเงินหรือผลผลิต)<br><strong>3. อื่นๆ:</strong> ที่ดินที่ได้รับอนุญาตให้ใช้ประโยชน์โดยไม่ต้องจ่ายค่าเช่า" />
                <FieldItem title="เอกสารสิทธิ์ / เลขที่เอกสารสิทธิ์" description="ระบุประเภทเอกสาร เช่น โฉนด, น.ส.3 ก., ส.ป.ก. 4-01 และกรอกเลขที่เอกสารให้ครบถ้วน" />
                <TipBox>
                    <p><strong>กรณีไม่มีเอกสารสิทธิ์:</strong> ให้เว้นว่างในช่องประเภทและเลขที่เอกสารสิทธิ์ แต่ต้องกรอกข้อมูลที่ตั้งและขนาดพื้นที่ให้ครบถ้วน และต้องให้ผู้นำชุมชน (เช่น ผู้ใหญ่บ้าน) ลงชื่อรับรองในแบบคำร้องด้วย</p>
                </TipBox>
                <FieldItem title="ที่ตั้งของแปลง" description="ระบุ บ้านเลขที่, หมู่, ตำบล, อำเภอ ของที่ดินแปลงนั้นๆ" />
                <FieldItem title="เนื้อที่ตามเอกสาร และ เนื้อที่ใช้จริง" description="<strong>เนื้อที่ตามเอกสาร:</strong> กรอกตามที่ระบุในเอกสารสิทธิ์<br><strong>เนื้อที่ใช้จริง:</strong> กรอกขนาดพื้นที่ที่ใช้ทำการเกษตรจริง ซึ่งอาจน้อยกว่าเนื้อที่ตามเอกสารก็ได้" />
            </SectionCard>
            
            <SectionCard icon={<Leaf size={24} />} title="ส่วนที่ 4: ข้อมูลการประกอบกิจกรรมการเกษตร">
                 <p className="text-sm text-gray-500 -mt-2 mb-2">ส่วนที่สำคัญที่สุด! คือการแจ้งรายละเอียดกิจกรรมการเกษตรในแต่ละแปลง</p>
                <FieldItem title="การปลูกพืช" description="สำหรับแต่ละแปลงจากส่วนที่ 3 ให้ระบุ ชนิดพืช, พันธุ์, เนื้อที่เพาะปลูก, วันที่ปลูก, และวันที่คาดว่าจะเก็บเกี่ยว" />
                <FieldItem title="การทำนาเกลือสมุทร" description="ระบุเนื้อที่ที่ใช้ทำนาเกลือ" />
                <FieldItem title="การเพาะเลี้ยงแมลงเศรษฐกิจ" description="ระบุชนิดของแมลง (เช่น ผึ้ง, ชันโรง) และจำนวน (เช่น จำนวนรัง, จำนวนกล่อง)" />
                 <TipBox>
                    <p>กรอกข้อมูลให้ตรงกับความเป็นจริงมากที่สุด เพราะข้อมูลส่วนนี้จะถูกนำไปตรวจสอบโดยการติดประกาศในชุมชนและเจ้าหน้าที่อาจลงพื้นที่เพื่อตรวจสอบจริง</p>
                </TipBox>
            </SectionCard>

            <SectionCard icon={<PiggyBank size={24} />} title="ส่วนที่ 5: ข้อมูลรายได้-หนี้สิน และเครื่องจักรกล">
                 <p className="text-sm text-gray-500 -mt-2 mb-2">เป็นการประมาณการข้อมูลภาพรวมเศรษฐกิจของครัวเรือนในรอบปีที่ผ่านมา</p>
                <FieldItem title="รายได้ของครัวเรือน" description="ประมาณการรายได้รวมทั้งปีของทุกสมาชิกในครัวเรือน โดยแยกเป็นรายได้ในภาคเกษตร และนอกภาคเกษตร" />
                <FieldItem title="หนี้สินของครัวเรือน" description="ประมาณการหนี้สินรวมของครัวเรือน โดยแยกเป็นหนี้สินในภาคเกษตร (เช่น หนี้ ธ.ก.ส.) และนอกภาคเกษตร (เช่น หนี้ผ่อนบ้าน, รถ)" />
                <FieldItem title="เครื่องจักรกลการเกษตร" description="ระบุเครื่องจักรกลที่ครัวเรือนเป็นเจ้าของ เช่น รถไถ, เครื่องสูบน้ำ" />
            </SectionCard>

            <SectionCard icon={<FileSignature size={24} />} title="ส่วนที่ 6: การรับรองข้อมูล">
                <p className="text-sm text-gray-500 -mt-2 mb-2">ขั้นตอนสุดท้ายเพื่อยืนยันความถูกต้องของข้อมูลทั้งหมด</p>
                <FieldItem title="การลงลายมือชื่อ" description="หัวหน้าครัวเรือนเกษตรกรต้องลงลายมือชื่อและวันที่ เพื่อรับรองว่าข้อมูลที่แจ้งทั้งหมดเป็นความจริง" />
                <FieldItem title="พยาน (ถ้ามี)" description="กรณีที่ดินไม่มีเอกสารสิทธิ์ จะต้องมีผู้นำชุมชนหรือ อกม. ลงลายมือชื่อเป็นพยานรับรองการใช้ประโยชน์ที่ดิน" />
                <FieldItem title="ส่วนของเจ้าหน้าที่" description="เว้นว่างไว้สำหรับเจ้าหน้าที่ผู้รับขึ้นทะเบียนเป็นผู้ลงนามและบันทึกข้อมูล" />
            </SectionCard>

             <div className="bg-white p-6 rounded-lg shadow-sm border border-green-300 mt-12">
                <div className="flex items-center mb-4">
                     <CheckSquare size={28} className="text-green-600 mr-4" />
                    <h2 className="text-2xl font-bold text-green-800">ตรวจสอบก่อนส่ง!</h2>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>ข้อมูลชื่อ-สกุล และเลขบัตรประชาชน ถูกต้องตรงกันทุกจุดหรือไม่?</li>
                    <li>กรอกข้อมูลครบทุกช่องที่จำเป็นแล้วใช่หรือไม่? (หากไม่มีให้ขีด '-')</li>
                    <li>ข้อมูลพื้นที่เพาะปลูกและกิจกรรมการเกษตรตรงกับความเป็นจริงหรือไม่?</li>
                    <li>ได้ลงลายมือชื่อในส่วนที่ 6 เรียบร้อยแล้วใช่หรือไม่?</li>
                    <li>เตรียมเอกสารประกอบ (บัตรประชาชน, เอกสารสิทธิ์ที่ดิน) ครบถ้วนแล้วใช่หรือไม่?</li>
                </ul>
            </div>

        </div>
      </div>
    </div>
  );
};
