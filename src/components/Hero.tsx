import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';
import img1 from '../assets/1.png';

export default function Hero() {
  return (
    <section id="home" className="relative bg-campaign-blue text-campaign-white pt-32 pb-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-stars animate-stars"></div>
      
      {/* Faded Waving American Flag Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        animate={{
          scale: [1.05, 1.15, 1.05],
          rotate: [-1, 1, -1],
          x: [-15, 15, -15],
          y: [-10, 10, -10]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="American Flag Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      {/* Floating American Elements */}
      <FloatingStar top="10%" left="10%" size={64} colorClass="text-campaign-red" opacityRange={[0.1, 0.3, 0.1]} duration={5} />
      <FloatingStar bottom="10%" right="10%" size={80} colorClass="text-campaign-white" opacityRange={[0.05, 0.2, 0.05]} duration={6} delay={1} />
      <FloatingStar top="20%" right="20%" size={40} colorClass="text-campaign-white" opacityRange={[0.1, 0.4, 0.1]} duration={4} delay={2} />
      <FloatingStar bottom="30%" left="15%" size={50} colorClass="text-campaign-red" opacityRange={[0.1, 0.3, 0.1]} duration={5.5} delay={0.5} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={img1}
          alt="Damita Bishop for Georgia State Representative"
          className="mx-auto mb-10 rounded-sm shadow-2xl border-8 border-campaign-white max-w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-sm"
        >
          Unity, Justice, and Liberty for All
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-32 h-2 bg-campaign-red mx-auto mt-8 origin-center"
        ></motion.div>
      </div>
    </section>
  );
}
