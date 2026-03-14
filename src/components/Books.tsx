import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';

export default function Books() {
  return (
    <section className="py-20 px-6 bg-campaign-gray text-campaign-blue border-y-8 border-campaign-red overflow-hidden relative">
      <div className="absolute inset-0 bg-stripes animate-stripes opacity-10"></div>
      
      <FloatingStar top="10%" left="5%" size={50} colorClass="text-campaign-blue" opacityRange={[0.02, 0.08, 0.02]} duration={5} />
      <FloatingStar bottom="15%" right="8%" size={60} colorClass="text-campaign-red" opacityRange={[0.03, 0.1, 0.03]} duration={6} delay={1} />
      <FloatingStar top="40%" right="15%" size={30} colorClass="text-campaign-blue" opacityRange={[0.05, 0.15, 0.05]} duration={4.5} delay={2} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-blue pl-6 uppercase tracking-wide"
        >
          Books by Damita Bishop
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-sm shadow-xl border-t-8 border-campaign-red transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl font-display font-bold mb-4 text-campaign-blue uppercase">Life Ain’t F.A.I.R.</h3>
            <p className="text-lg leading-relaxed font-medium text-slate-800">
              This seven-book autobiographical series shares Damita Bishop’s journey as a justice advocate and her return to faith in Jesus Christ. Through personal stories of struggle, perseverance, and advocacy, the series explores the realities of wrongful convictions and the fight to bring fairness and second chances to those impacted by the legal system.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-sm shadow-xl border-t-8 border-campaign-blue transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl font-display font-bold mb-4 text-campaign-red uppercase">With the People</h3>
            <p className="text-lg leading-relaxed font-medium text-slate-800">
              This nonfiction book is inspired by Damita’s 2024 grassroots write-in campaign for the U.S. House of Representatives. Loosely based on real experiences, it chronicles the challenges and lessons of connecting with communities, raising awareness about critical issues, and standing up for policies that improve lives.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-campaign-blue text-white p-6 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-stars animate-stars opacity-20"></div>
          <p className="text-xl leading-relaxed font-bold relative z-10">
            All books are available on Amazon, and all proceeds go directly to support Damita’s campaign and continued advocacy for justice, opportunity, and stronger communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
