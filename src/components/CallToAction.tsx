import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-campaign-blue text-white overflow-hidden border-t-8 border-campaign-red">
      <div className="absolute inset-0 bg-stripes animate-stripes opacity-10"></div>
      
      {/* Animated background stars */}
      <FloatingStar top="15%" left="10%" size={60} colorClass="text-campaign-white" opacityRange={[0.1, 0.4, 0.1]} duration={4} />
      <FloatingStar bottom="20%" right="10%" size={80} colorClass="text-campaign-red" opacityRange={[0.1, 0.3, 0.1]} duration={5} delay={1} />
      <FloatingStar top="40%" right="15%" size={40} colorClass="text-campaign-white" opacityRange={[0.1, 0.5, 0.1]} duration={4.5} delay={2} />
      <FloatingStar bottom="30%" left="15%" size={50} colorClass="text-campaign-white" opacityRange={[0.05, 0.25, 0.05]} duration={6} delay={0.5} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-display font-bold mb-16 text-center uppercase tracking-widest drop-shadow-md"
        >
          Call to Action
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Volunteer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 p-10 rounded-sm backdrop-blur-sm border-4 border-white/20 shadow-2xl"
          >
            <h3 className="text-4xl font-display font-bold mb-6 text-campaign-red uppercase tracking-wide">Volunteer</h3>
            <h4 className="text-2xl font-bold mb-4">Contact Damita for Georgia</h4>
            <div className="space-y-3 text-xl font-medium">
              <p>Email: <a href="mailto:damitaforgeorgia@gmail.com" className="underline hover:text-campaign-red transition-colors">damitaforgeorgia@gmail.com</a></p>
              <p>Phone: <a href="tel:4704588360" className="underline hover:text-campaign-red transition-colors">470-458-8360</a></p>
            </div>
          </motion.div>

          {/* Donate */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 p-10 rounded-sm backdrop-blur-sm border-4 border-white/20 shadow-2xl"
          >
            <h3 className="text-4xl font-display font-bold mb-6 text-campaign-red uppercase tracking-wide">Donate</h3>
            <div className="space-y-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://venmo.com/code?user_id=4549396947535089018&created=1773098497" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-campaign-white text-campaign-blue font-display font-bold text-xl py-4 px-6 rounded-sm text-center uppercase tracking-wider hover:bg-campaign-red hover:text-white transition-colors shadow-lg"
              >
                Donate via Venmo
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://cash.app/$damitaforgeorgia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block bg-campaign-white text-campaign-blue font-display font-bold text-xl py-4 px-6 rounded-sm text-center uppercase tracking-wider hover:bg-campaign-red hover:text-white transition-colors shadow-lg"
              >
                Donate via Cash App
              </motion.a>
              <p className="text-lg italic mt-4 text-center text-white/80">* Zelle and PayPal coming soon</p>
            </div>
          </motion.div>
        </div>

        {/* Stay Connected */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-12 border-t-4 border-white/20"
        >
          <h3 className="text-4xl font-display font-bold mb-6 uppercase tracking-wide">Stay Connected</h3>
          <h4 className="text-2xl font-bold mb-6 text-campaign-red">Follow Damita Bishop</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-xl font-medium">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/damitaisfair" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 py-3 px-8 rounded-full hover:bg-white hover:text-campaign-blue transition-colors border-2 border-white shadow-lg"
            >
              @damitaisfair on Instagram
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/damitaforgeorgia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 py-3 px-8 rounded-full hover:bg-white hover:text-campaign-blue transition-colors border-2 border-white shadow-lg"
            >
              Facebook: Damita for Georgia
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
