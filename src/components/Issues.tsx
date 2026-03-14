import { motion } from 'motion/react';
import Divider from './Divider';
import FloatingStar from './FloatingStar';

export default function Issues() {
  const issues = [
    "The economy and rising costs",
    "Healthcare and access to care",
    "Public safety and criminal justice reform",
    "Voting rights",
    "Education",
    "Housing and opportunities for working families",
    "Immigration and border policy",
    "Energy and environmental concerns",
  ];

  return (
    <section id="issues" className="relative py-20 px-6 bg-campaign-gray text-campaign-blue border-t-8 border-campaign-blue overflow-hidden">
      <FloatingStar top="5%" right="5%" size={60} colorClass="text-campaign-red" opacityRange={[0.02, 0.08, 0.02]} duration={6} />
      <FloatingStar bottom="10%" left="8%" size={50} colorClass="text-campaign-blue" opacityRange={[0.03, 0.1, 0.03]} duration={5} delay={1} />
      <FloatingStar top="45%" left="10%" size={40} colorClass="text-campaign-red" opacityRange={[0.04, 0.12, 0.04]} duration={4.5} delay={2} />
      <FloatingStar bottom="35%" right="12%" size={45} colorClass="text-campaign-blue" opacityRange={[0.02, 0.09, 0.02]} duration={5.5} delay={0.5} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-red pl-6 uppercase tracking-wide"
        >
          Justice Reform & Public Safety
        </motion.h2>
        
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-800 mb-12">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-campaign-blue mb-4"
          >
            Damita Bishop believes that public safety and second chances can work together to build stronger communities.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The Georgia Second Chance and Public Safety Act is a comprehensive reform proposal designed to improve safety within Georgia’s prison system while strengthening rehabilitation and successful reintegration into society.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Recent investigations by the United States Department of Justice have highlighted safety concerns inside facilities operated by the Georgia Department of Corrections.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            This legislation takes a responsible approach by encouraging rehabilitation while maintaining strong protections for victims and communities.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-sm shadow-xl border-t-8 border-campaign-red mb-12"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-campaign-blue uppercase">Key Priorities</h3>
          <div className="space-y-6">
            {[
              { title: "Improving Prison Safety", desc: "Addressing violence, staffing shortages, and unsafe conditions inside correctional facilities." },
              { title: "Encouraging Rehabilitation", desc: "Providing incentives for education, job training, and treatment programs that reduce repeat crime." },
              { title: "Second-Look Sentencing Review", desc: "Allowing courts to review certain long sentences after significant time has been served." },
              { title: "Workforce Reintegration", desc: "Partnering with employers and the Georgia Department of Labor to help returning citizens find stable employment." },
              { title: "Supporting Successful Reentry", desc: "Ensuring individuals leaving prison have access to identification, housing support, and employment preparation." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start bg-campaign-gray p-4 rounded-sm shadow-sm"
              >
                <span className="text-campaign-red mr-4 font-bold text-2xl leading-none mt-1">★</span>
                <div>
                  <h4 className="text-xl font-bold text-campaign-blue mb-1">{item.title}</h4>
                  <p className="text-lg text-slate-700 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-campaign-blue text-white p-8 shadow-lg mb-12 relative overflow-hidden rounded-sm"
        >
          <div className="absolute inset-0 bg-stars animate-stars opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-display font-bold mb-6 text-campaign-red uppercase">Protecting Public Safety</h3>
            <p className="text-xl font-bold mb-6">This legislation does not automatically release anyone from prison.</p>
            <p className="text-lg mb-4 font-medium">Every case must go through:</p>
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {[
                "Judicial review",
                "Risk assessments",
                "Evaluation of rehabilitation",
                "Victim notification and input"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg font-medium">
                  <span className="w-2 h-2 bg-campaign-red rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-white/10 p-4 border-l-4 border-campaign-red">
              <p className="text-xl font-bold uppercase tracking-wide">Public safety will always remain the top priority.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-12"
        >
          <img src="9.png" alt="Public Safety Priority" className="w-full h-auto rounded-sm object-cover shadow-lg" referrerPolicy="no-referrer" />
        </motion.div>
        
        <Divider />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t-4 border-campaign-red pt-8 text-right"
        >
          <p className="text-4xl font-display font-bold text-campaign-blue uppercase tracking-wider">— Damita Bishop</p>
          <p className="text-xl font-semibold text-campaign-red mt-2">Candidate for Georgia State House, District 61</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <img src="6.png" alt="Damita Bishop Campaign" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
    </section>
  );
}
