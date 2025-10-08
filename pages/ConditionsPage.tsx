import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { User, Building2, CheckCircle, Users, HeartHandshake, MapPin, Baby, GitMerge, ScrollText, Info } from 'lucide-react';

const QualificationCard = ({ icon, title, text }: { icon: React.ReactElement; title: string; text: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500 text-center h-full">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
    </div>
);

const ChecklistItem = ({ text }: { text: string }) => (
    <li className="flex items-start">
        <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mr-3 mt-1" />
        <span>{text}</span>
    </li>
);

const SpouseChecklistItem = ({ children }: { children: React.ReactNode }) => (
     <li className="flex items-start">
        <HeartHandshake className="flex-shrink-0 w-5 h-5 text-rose-500 mr-3 mt-1" />
        <span>{children}</span>
    </li>
);


const ConditionCard = ({ icon, title, text }: { icon: React.ReactElement; title: string; text: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full hover:shadow-lg hover:border-green-300 transition-all duration-300">
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 rounded-lg mr-4">
                {icon}
            </div>
            <h4 className="text-lg font-bold text-gray-800">{title}</h4>
        </div>
        <p className="text-gray-600 text-sm">{text}</p>
    </div>
);


export const ConditionsPage: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <PageHeader
                title="คุณสมบัติและเงื่อนไข (Qualifications & Conditions)"
                subtitle="ตรวจสอบคุณสมบัติของผู้มีสิทธิ์และเงื่อนไขต่างๆ ในการขึ้นทะเบียนและปรับปรุงทะเบียนเกษตรกร"
            />
            <div className="p-4 md:p-8 space-y-12">

                <section className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">ผู้มีสิทธิ์ขึ้นทะเบียนเกษตรกร</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <QualificationCard
                            icon={<User size={32} />}
                            title="บุคคลธรรมดา"
                            text="เกษตรกรที่เป็นบุคคลทั่วไป มีสัญชาติไทย และเป็นผู้ประกอบกิจกรรมการเกษตรในนามครัวเรือน"
                        />
                        <QualificationCard
                            icon={<Building2 size={32} />}
                            title="นิติบุคคล"
                            text="บริษัท, ห้างหุ้นส่วน, หรือองค์กรที่จดทะเบียนนิติบุคคลและมีวัตถุประสงค์เพื่อประกอบกิจการเกษตร"
                        />
                    </div>
                </section>

                <section className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">คุณสมบัติโดยละเอียด</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                                <User className="mr-3 text-green-600" />
                                สำหรับบุคคลธรรมดา
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <ChecklistItem text="เป็นผู้ประกอบกิจการเกษตร เช่น ปลูกพืช, ทำนาเกลือ, เพาะเลี้ยงแมลงเศรษฐกิจ" />
                                <ChecklistItem text="มีสัญชาติไทย และมีเลขประจำตัวประชาชน 13 หลัก" />
                                <ChecklistItem text="เป็นหัวหน้าครัวเรือนเกษตร หรือเป็นสมาชิกในครัวเรือนที่ได้รับมอบหมายจากหัวหน้าครัวเรือน" />
                                <ChecklistItem text="ต้องบรรลุนิติภาวะ (โดยมีอายุครบ 20 ปีบริบูรณ์ หรือโดยการสมรสตามกฎหมาย)" />
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                                <Building2 className="mr-3 text-green-600" />
                                สำหรับนิติบุคคล
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <ChecklistItem text="จดทะเบียนเป็นนิติบุคคลในประเทศไทย" />
                                <ChecklistItem text="มีวัตถุประสงค์ในการประกอบกิจการในด้านการเกษตรตามที่ระบุในหนังสือรับรองนิติบุคคล" />
                                <ChecklistItem text="มีผู้มีอำนาจลงนามแทนนิติบุคคล หรือผู้ที่ได้รับมอบอำนาจเป็นผู้ดำเนินการยื่นคำร้อง" />
                                <ChecklistItem text="มีเอกสารหลักฐานการจดทะเบียนนิติบุคคลที่ออกโดยหน่วยงานราชการ" />
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section className="max-w-4xl mx-auto p-6 bg-rose-50 border border-rose-200 rounded-xl shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                         <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-white">
                            <HeartHandshake size={40} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-rose-800">ข้อควรรู้พิเศษและสำคัญที่สุด: กรณีคู่สมรส</h2>
                            <p className="text-rose-700 mt-1">โปรดอ่านและทำความเข้าใจเงื่อนไขต่อไปนี้อย่างละเอียด เพื่อป้องกันปัญหาในการขึ้นทะเบียน</p>
                        </div>
                    </div>
                     <hr className="my-5 border-rose-200" />
                     <ul className="space-y-3 text-gray-700">
                        <SpouseChecklistItem>
                            ไม่ว่าจะจดทะเบียนสมรสหรือไม่ หากอยู่กินฉันสามีภรรยา <strong>จะถูกนับเป็น 'ครัวเรือนเกษตรกรเดียวกัน' เสมอ</strong> (แม้จะอยู่คนละทะเบียนบ้านก็ตาม)
                        </SpouseChecklistItem>
                        <SpouseChecklistItem>
                           สามารถขึ้นทะเบียนเป็น 'หัวหน้าครัวเรือนเกษตรกร' ได้เพียงคนเดียวเท่านั้น (สามีหรือภรรยาคนใดคนหนึ่ง)
                        </SpouseChecklistItem>
                        <SpouseChecklistItem>
                           กรณีสถานะครัวเรือนเปลี่ยนแปลง เช่น หย่าร้าง หรือแยกกันอยู่ ต้องแจ้งข้อมูลกับเจ้าหน้าที่เพื่อปรับปรุงทะเบียนเกษตรกรให้เป็นปัจจุบัน
                        </SpouseChecklistItem>
                    </ul>
                </section>

                <section className="max-w-6xl mx-auto">
                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">หลักเกณฑ์สำคัญอื่นๆ</h2>
                     <p className="text-center text-gray-500 mb-8">เพื่อให้การขึ้นทะเบียนเป็นไปอย่างถูกต้องและราบรื่น</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ConditionCard
                            icon={<Users size={20} />}
                            title="หลักการครัวเรือน"
                            text="ยึดหลัก '1 ทะเบียนบ้าน เท่ากับ 1 ครัวเรือนเกษตรกร' โดยหัวหน้าครัวเรือนเกษตรไม่จำเป็นต้องเป็นคนเดียวกับเจ้าบ้านในทะเบียนบ้าน"
                        />
                         <ConditionCard
                            icon={<MapPin size={20} />}
                            title="การถือครองที่ดิน"
                            text="สามารถขึ้นทะเบียนได้ไม่ว่าที่ดินนั้นจะเป็นของตนเอง (มีเอกสารสิทธิ์), ที่เช่า, หรือที่ดินที่ได้รับอนุญาตให้ใช้ประโยชน์โดยไม่มีค่าใช้จ่าย"
                        />
                        <ConditionCard
                            icon={<Baby size={20} />}
                            title="การบรรลุนิติภาวะโดยการสมรส"
                            text="ผู้เยาว์ที่อายุ 17 ปีบริบูรณ์ขึ้นไป สามารถบรรลุนิติภาวะได้โดยการจดทะเบียนสมรส ซึ่งต้องได้รับความยินยอมจากบิดามารดาหรือผู้ปกครองก่อน"
                        />
                        <ConditionCard
                            icon={<GitMerge size={20} />}
                            title="การประกอบการร่วมกัน"
                            text="หากมีหลายครัวเรือนทำเกษตรในที่ดินแปลงเดียวกัน ให้ตกลงกันเพื่อมอบหมายให้ครัวเรือนใดครัวเรือนหนึ่งเป็นผู้แจ้งขึ้นทะเบียนเพียงรายเดียว"
                        />
                         <ConditionCard
                            icon={<ScrollText size={20} />}
                            title="กรณีผู้จัดการมรดก"
                            text="ผู้จัดการมรดกตามคำสั่งศาล สามารถแจ้งปรับปรุงทะเบียนแทนครัวเรือนของผู้ตายได้ จนกว่าการแบ่งทรัพย์มรดกจะเสร็จสิ้น"
                        />
                    </div>
                </section>
                 <div className="max-w-4xl mx-auto mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start">
                        <Info className="flex-shrink-0 w-6 h-6 text-blue-600 mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold text-blue-800">ข้อควรจำ</h3>
                            <p className="text-blue-700 mt-1">การให้ข้อมูลที่เป็นเท็จในการขึ้นทะเบียนเกษตรกร อาจมีความผิดตามกฎหมาย และอาจถูกตัดสิทธิ์ในการรับความช่วยเหลือตามมาตรการต่างๆ ของภาครัฐ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};