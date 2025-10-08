
import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Database, Target, HandCoins, BarChart, CheckCircle, ShieldCheck, Users, TrendingUp, Trees, Building } from 'lucide-react';

const ObjectiveCard = ({ icon, title, text }: { icon: React.ReactElement, title: string, text: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 h-full">
        <div className="flex items-center mb-3">
            <div className="text-green-600 mr-4">{icon}</div>
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{text}</p>
    </div>
);

const BenefitItem = ({ icon, title, text }: { icon: React.ReactElement, title: string, text: string }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full mr-4 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-gray-700">{title}</h4>
            <p className="text-sm text-gray-500">{text}</p>
        </div>
    </div>
)


export const RationalePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="หลักการและเหตุผล (Rationale)"
        subtitle="ที่มาและความสำคัญของการขึ้นทะเบียนเกษตรกร ตามระเบียบคณะกรรมการนโยบายและแผนพัฒนาการเกษตรและสหกรณ์"
      />
      <div className="p-4 md:p-8 space-y-12">
        
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-green-800 mb-4">ภาพรวมและความสำคัญ</h2>
            <p className="text-gray-600 mb-4">
                การขึ้นทะเบียนเกษตรกรเป็นกระบวนการที่มีความสำคัญอย่างยิ่งต่อการพัฒนาภาคการเกษตรของประเทศ โดยอาศัยอำนาจตาม <strong>ระเบียบคณะกรรมการนโยบายและแผนพัฒนาการเกษตรและสหกรณ์ ว่าด้วยการขึ้นทะเบียนเกษตรกรเกี่ยวกับการประกอบกิจการในด้านการเกษตร พ.ศ. 2567</strong> เพื่อจัดทำฐานข้อมูลเกษตรกรของประเทศให้มีความถูกต้อง ครบถ้วน และเป็นปัจจุบัน
            </p>
            <p className="text-gray-600">
                ข้อมูลที่ได้จากการขึ้นทะเบียน จะถูกใช้เป็นเครื่องมือหลักของภาครัฐในการกำหนดนโยบาย, วางแผนการผลิต, การตลาด, และการส่งเสริมการเกษตร รวมถึงการให้ความช่วยเหลือเกษตรกรในกรณีต่างๆ เช่น การช่วยเหลือเมื่อเกิดภัยพิบัติ หรือการสนับสนุนตามมาตรการของรัฐบาลได้อย่างมีประสิทธิภาพและตรงเป้าหมาย
            </p>
        </section>

        <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">วัตถุประสงค์หลักของการขึ้นทะเบียน</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <ObjectiveCard 
                    icon={<Database size={32} />}
                    title="1. เพื่อเป็นฐานข้อมูลกลางทางการเกษตร"
                    text="เพื่อรวบรวมข้อมูลเกษตรกร, ครัวเรือน, พื้นที่เพาะปลูก, และกิจกรรมการเกษตรทั้งหมดไว้ในที่เดียว ทำให้มีข้อมูลภาพรวมของประเทศที่เชื่อถือได้สำหรับการตัดสินใจ"
                />
                <ObjectiveCard 
                    icon={<Target size={32} />}
                    title="2. เพื่อการวางแผนและกำหนดนโยบาย"
                    text="ใช้ข้อมูลในการวางแผนการผลิตพืชให้สอดคล้องกับความต้องการของตลาด, การจัดการ Zoning พื้นที่เกษตรกรรม, และการกำหนดนโยบายภาคการเกษตรในระยะยาว"
                />
                <ObjectiveCard 
                    icon={<HandCoins size={32} />}
                    title="3. เพื่อสนับสนุนและให้ความช่วยเหลือ"
                    text="เป็นฐานข้อมูลสำคัญในการพิจารณาให้ความช่วยเหลือเกษตรกรตามมาตรการต่างๆ ของรัฐ เช่น โครงการประกันรายได้, การชดเชยความเสียหายจากภัยพิบัติ, และการสนับสนุนปัจจัยการผลิต"
                />
                <ObjectiveCard 
                    icon={<BarChart size={32} />}
                    title="4. เพื่อส่งเสริมและพัฒนาเกษตรกร"
                    text="ช่วยให้หน่วยงานภาครัฐสามารถจัดทำโครงการส่งเสริมและพัฒนาทักษะ, การถ่ายทอดเทคโนโลยี, และการรวมกลุ่มเกษตรกรได้อย่างเหมาะสมและตรงกับความต้องการของเกษตรกรในแต่ละพื้นที่"
                />
            </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl font-bold text-gray-800 mb-6">หลักการสำคัญ</h2>
             <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-center">
                    <ShieldCheck className="text-amber-600 mr-3" size={24} />
                    <span className="text-amber-800">ข้อมูลต้องถูกต้องและเป็นปัจจุบัน</span>
                </div>
                 <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-center">
                    <Users className="text-blue-600 mr-3" size={24} />
                    <span className="text-blue-800">ยึดหลัก 1 ทะเบียนบ้าน ต่อ 1 ครัวเรือนเกษตรกร</span>
                </div>
             </div>
        </section>

        <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">ประโยชน์ที่คาดว่าจะได้รับ</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold text-green-700 mb-4 text-center">ต่อเกษตรกร</h3>
                    <div className="space-y-4">
                        <BenefitItem 
                            icon={<CheckCircle size={20} />}
                            title="ได้รับสิทธิ์ในการช่วยเหลือ"
                            text="เป็นหลักฐานแสดงตนเพื่อรับสิทธิ์ในมาตรการช่วยเหลือและโครงการต่างๆ จากภาครัฐ"
                        />
                         <BenefitItem 
                            icon={<TrendingUp size={20} />}
                            title="โอกาสในการพัฒนาอาชีพ"
                            text="เข้าถึงโอกาสในการอบรม, ศึกษาดูงาน, และรับการส่งเสริมเทคโนโลยีการเกษตรสมัยใหม่"
                        />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">ต่อภาครัฐ</h3>
                     <div className="space-y-4">
                        <BenefitItem 
                            icon={<Database size={20} />}
                            title="มีข้อมูลที่แม่นยำ"
                            text="มีฐานข้อมูลที่น่าเชื่อถือสำหรับวิเคราะห์สถานการณ์และวางแผนนโยบายได้อย่างตรงจุด"
                        />
                         <BenefitItem 
                            icon={<HandCoins size={20} />}
                            title="จัดสรรงบประมาณอย่างมีประสิทธิภาพ"
                            text="สามารถให้ความช่วยเหลือและจัดสรรงบประมาณได้ตรงกลุ่มเป้าหมาย ลดความซ้ำซ้อน"
                        />
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">ต่อภาพรวมประเทศ</h3>
                     <div className="space-y-4">
                        <BenefitItem 
                            icon={<Trees size={20} />}
                            title="ความมั่นคงทางอาหาร"
                            text="สามารถวางแผนการผลิตเพื่อสร้างความมั่นคงทางอาหารให้กับประชากรในประเทศได้"
                        />
                         <BenefitItem 
                            icon={<Building size={20} />}
                            title="การพัฒนาเศรษฐกิจ"
                            text="ภาคการเกษตรที่เข้มแข็งส่งผลโดยตรงต่อเศรษฐกิจฐานรากและ GDP ของประเทศโดยรวม"
                        />
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};
