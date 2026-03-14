import { motion } from 'motion/react';
import Divider from './Divider';
import FloatingStar from './FloatingStar';

export default function United() {
  return (
    <section className="relative py-20 px-6 bg-white text-campaign-blue overflow-hidden">
      <FloatingStar top="20%" right="10%" size={50} colorClass="text-campaign-red" opacityRange={[0.05, 0.15, 0.05]} duration={6} />
      <FloatingStar bottom="25%" left="8%" size={70} colorClass="text-campaign-blue" opacityRange={[0.03, 0.1, 0.03]} duration={5} delay={1} />
      <FloatingStar top="60%" right="20%" size={40} colorClass="text-campaign-red" opacityRange={[0.04, 0.12, 0.04]} duration={4.5} delay={2} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-red pl-6 uppercase tracking-wide"
        >
          United We Stand
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <img src="4.png" alt="United We Stand" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        
        <h3 className="text-3xl font-display font-bold mb-6 text-campaign-blue uppercase">The Right to Vote Is Powerful</h3>
        
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-800">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The right to vote is one of the most important freedoms we have as Americans. But history reminds us that it did not begin equally for everyone. Over time, through struggle, courage, and perseverance, more Americans were included in that right. That progress is something worth remembering and protecting.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Voting is not just about casting a ballot. It is about participating in our democracy and having a voice in the future of our communities and our country.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At the same time, respecting the right to vote also means respecting how others choose to vote. Democracy only works when we allow people the freedom to think differently, choose differently, and still stand together as fellow Americans.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We may not always agree on candidates, policies, or parties—but we should always agree on this:
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-campaign-gray p-6 border-l-8 border-campaign-red my-8 shadow-md"
          >
            <span className="font-display font-bold text-campaign-red text-3xl uppercase tracking-wide block">Every citizen has the right to vote according to their conscience.</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            When we value that freedom for ourselves and for others, we strengthen our democracy.
          </motion.p>
        </div>
        
        <Divider />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="mt-16 text-center"
        >
          <p className="text-6xl md:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-campaign-blue via-campaign-red to-campaign-blue uppercase tracking-widest drop-shadow-sm bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
            United We Stand
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <img src="5.png" alt="United We Stand" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </div>
    </section>
  );
}
