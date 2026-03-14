import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';
import img2 from '../assets/2.png';

export default function Mission() {
  return (
    <section id="mission" className="relative bg-campaign-red py-20 px-6 text-campaign-white overflow-hidden">
      <div className="absolute inset-0 bg-stripes animate-stripes opacity-20"></div>
      
      <FloatingStar top="15%" left="8%" size={56} colorClass="text-campaign-white" opacityRange={[0.1, 0.3, 0.1]} duration={4.5} />
      <FloatingStar bottom="20%" right="10%" size={72} colorClass="text-campaign-white" opacityRange={[0.05, 0.2, 0.05]} duration={5.5} delay={1.5} />
      <FloatingStar top="60%" left="15%" size={40} colorClass="text-campaign-white" opacityRange={[0.1, 0.4, 0.1]} duration={4} delay={0.5} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-10 uppercase tracking-wide text-center"
        >
          Mission Statement
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm border-4 border-white/20 shadow-xl"
          >
            <p className="text-2xl leading-relaxed font-medium italic">
              "My mission is to serve the people of Georgia with integrity, courage, and compassion. As a Christian, I believe leadership is a calling to serve others, stand for justice, and protect the dignity of every person. I am running for the Georgia State House to fight for working families, expand opportunity, strengthen our justice system, and ensure that every voice in our community is heard. My goal is to bring people together to create solutions that improve lives, restore hope, and build a future where fairness, accountability, and second chances are possible for all."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={img2}
              alt="Damita Bishop Mission"
              className="w-full h-auto rounded-sm shadow-2xl border-8 border-campaign-white object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
