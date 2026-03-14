import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';

export default function CTA() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-12 px-6 bg-campaign-gray border-y-8 border-campaign-blue relative overflow-hidden">
      {/* Decorative bunting effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-campaign-red via-campaign-white to-campaign-blue"></div>
      
      <FloatingStar top="20%" left="15%" size={30} colorClass="text-campaign-red" opacityRange={[0.05, 0.15, 0.05]} duration={4} />
      <FloatingStar bottom="20%" right="15%" size={40} colorClass="text-campaign-blue" opacityRange={[0.03, 0.1, 0.03]} duration={5} delay={1} />

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto relative z-10"
      >
        <motion.button variants={item} className="flex-1 bg-campaign-blue text-campaign-white py-5 px-8 text-xl font-display font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow-lg border-2 border-transparent hover:border-campaign-white transform hover:-translate-y-1">
          Volunteer
        </motion.button>
        <motion.button variants={item} className="flex-1 bg-campaign-red text-campaign-white py-5 px-8 text-xl font-display font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg border-2 border-transparent hover:border-campaign-white transform hover:-translate-y-1">
          Donate
        </motion.button>
        <motion.button variants={item} className="flex-1 bg-campaign-blue text-campaign-white py-5 px-8 text-xl font-display font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow-lg border-2 border-transparent hover:border-campaign-white transform hover:-translate-y-1">
          Attend a Town Hall
        </motion.button>
      </motion.div>
    </section>
  );
}
