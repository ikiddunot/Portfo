import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import FloatingStar from './FloatingStar';
import img4 from '../assets/4.png';

export default function Remembering() {
  return (
    <section className="relative py-20 px-6 bg-campaign-blue text-campaign-white overflow-hidden">
      <div className="absolute inset-0 bg-stars animate-stars opacity-10"></div>
      
      <FloatingStar top="15%" right="10%" size={70} colorClass="text-campaign-white" opacityRange={[0.05, 0.2, 0.05]} duration={5.5} />
      <FloatingStar bottom="20%" left="5%" size={50} colorClass="text-campaign-red" opacityRange={[0.1, 0.3, 0.1]} duration={4.5} delay={1.5} />
      <FloatingStar top="60%" left="15%" size={40} colorClass="text-campaign-white" opacityRange={[0.05, 0.25, 0.05]} duration={6} delay={0.5} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-red pl-6 uppercase tracking-wide"
        >
          Remembering What Unites Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 shrink-0"
          >
            <img src={img4} alt="Remembering What Unites Us" className="w-full h-auto rounded-sm object-cover shadow-lg" referrerPolicy="no-referrer" />
          </motion.div>

          <div className="w-full md:w-1/2 space-y-6 text-xl leading-relaxed font-medium">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Over the last presidential election cycle, our country experienced a level of division that was difficult for many of us to watch. Neighbors became opponents, friendships were strained, and political differences sometimes made us forget something important:
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="py-8 my-8 border-y-4 border-campaign-red relative"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 flex space-x-4 text-campaign-red opacity-50">
                <Star size={24} fill="currentColor" />
                <Star size={32} fill="currentColor" className="-mt-2" />
                <Star size={24} fill="currentColor" />
              </div>
              <p className="text-4xl lg:text-5xl font-display font-bold text-center text-campaign-white uppercase tracking-wider drop-shadow-md">
                We are still Americans first.
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Bill of Rights reminds us that our freedoms belong to all of us. Freedom of speech, freedom of belief, the right to assemble, the right to be heard—these rights were never meant to divide us. They were meant to protect every citizen, even when we disagree.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              You and I may not vote the same way. We may not support the same candidates or policies. But the right to make those choices freely is something we should all defend—for ourselves and for each other.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My campaign is about more than winning an election. It’s about helping restore respect in our public conversations and reminding people that democracy works best when we protect each other’s rights, not attack them.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              If we can remember that our neighbors are not our enemies, then maybe the unity our country needs can begin right here—and spread across every state.
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center text-3xl font-display font-bold uppercase tracking-widest space-y-4 text-campaign-red"
        >
          <p className="bg-white/10 inline-block py-2 px-6 rounded-sm shadow-lg backdrop-blur-sm">Let’s protect our rights.</p><br/>
          <p className="bg-white/10 inline-block py-2 px-6 rounded-sm shadow-lg backdrop-blur-sm">Let’s respect each other.</p><br/>
          <p className="bg-white/10 inline-block py-2 px-6 rounded-sm shadow-lg backdrop-blur-sm">Let’s move forward together.</p>
        </motion.div>
      </div>
    </section>
  );
}
