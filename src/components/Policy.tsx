import { motion } from 'motion/react';
import Divider from './Divider';
import FloatingStar from './FloatingStar';

export default function Policy() {
  return (
    <section id="policy" className="relative py-20 px-6 bg-campaign-gray text-campaign-blue border-t-8 border-campaign-red overflow-hidden">
      <FloatingStar top="15%" right="8%" size={50} colorClass="text-campaign-blue" opacityRange={[0.03, 0.1, 0.03]} duration={5} />
      <FloatingStar bottom="20%" left="5%" size={70} colorClass="text-campaign-red" opacityRange={[0.02, 0.08, 0.02]} duration={6} delay={1.5} />
      <FloatingStar top="50%" left="15%" size={40} colorClass="text-campaign-blue" opacityRange={[0.04, 0.12, 0.04]} duration={4.5} delay={0.5} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-blue pl-6 uppercase tracking-wide"
        >
          Policy in Motion
        </motion.h2>
        
        <h3 className="text-3xl font-display font-bold mb-6 text-campaign-red uppercase">Bringing 2nd Chances to Georgia</h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg leading-relaxed mb-10 font-medium text-slate-800"
        >
          As I head toward the general election, I am excited to share that I have drafted two key bills aimed at promoting fairness, opportunity, and civic engagement in our communities:
        </motion.p>
        
        <div className="space-y-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-sm shadow-xl border-l-8 border-campaign-blue transform hover:translate-x-2 transition-transform"
          >
            <h4 className="text-2xl font-display font-bold mb-4 text-campaign-blue uppercase">1. 2nd Chance Housing and Eviction Prevention Act</h4>
            <p className="text-lg leading-relaxed font-medium text-slate-800">
              This bill is designed to remove barriers to housing for individuals with prior convictions, ensuring that people who have served their time have access to safe, affordable housing. By eliminating unnecessary eviction records and promoting housing stability, we can strengthen families, communities, and economic opportunity.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-sm shadow-xl border-l-8 border-campaign-red transform hover:translate-x-2 transition-transform"
          >
            <h4 className="text-2xl font-display font-bold mb-4 text-campaign-red uppercase">2. 2nd Chances for Freedom Act</h4>
            <p className="text-lg leading-relaxed font-medium text-slate-800">
              This legislation focuses on criminal justice reform, parole, and reentry, providing meaningful second chances for those who have paid their debt to society. It seeks to expand opportunities for education, employment, and civic participation for formerly incarcerated individuals, helping them reintegrate into society successfully.
            </p>
          </motion.div>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-800 mb-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            These bills reflect my commitment to justice, fairness, and community empowerment. I plan to introduce them to the public for discussion and feedback, because I believe effective legislation starts with listening to the people it impacts.
          </motion.p>
        </div>
        
        <Divider />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-campaign-blue text-white p-8 text-center shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-stripes animate-stripes opacity-20"></div>
          <p className="text-2xl font-display font-bold uppercase tracking-wide relative z-10">
            Together, we can build a Georgia where everyone has the opportunity to succeed, contribute, and thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
