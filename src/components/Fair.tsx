import { motion } from 'motion/react';
import Divider from './Divider';
import FloatingStar from './FloatingStar';

export default function Fair() {
  return (
    <section id="fair" className="relative py-20 px-6 bg-campaign-white text-campaign-blue overflow-hidden">
      <FloatingStar top="10%" left="10%" size={60} colorClass="text-campaign-red" opacityRange={[0.03, 0.1, 0.03]} duration={5} />
      <FloatingStar bottom="15%" right="5%" size={40} colorClass="text-campaign-blue" opacityRange={[0.02, 0.08, 0.02]} duration={4} delay={2} />
      <FloatingStar top="50%" right="15%" size={50} colorClass="text-campaign-red" opacityRange={[0.04, 0.12, 0.04]} duration={5.5} delay={1} />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-display font-bold mb-10 border-l-8 border-campaign-red pl-6 uppercase tracking-wide">Justice Advocacy and F.A.I.R.</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
          <div className="flex-1">
            <h3 className="text-3xl font-display font-bold mb-4 text-campaign-red uppercase">About F.A.I.R.</h3>
            <p className="text-lg leading-relaxed font-medium text-slate-800">
              <strong className="text-campaign-blue text-xl block mb-2">Fighting Against Institutionalized Railroading</strong>
              Founded in 2019 by Damita Bishop, F.A.I.R. is an organization dedicated to promoting justice, fairness, and second chances within the legal system. What began as a personal mission has grown into a nationwide effort to educate communities and drive meaningful reform.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 shrink-0"
          >
            <img src="3.png" alt="About F.A.I.R." className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <h3 className="text-3xl font-display font-bold mb-4 text-campaign-red uppercase">Our Founder’s Journey</h3>
        <p className="text-lg leading-relaxed mb-10 font-medium text-slate-800">
          Damita was raised by a Black Republican family but often voted Democrat, following what many in her generation considered the “Black thing to do.” Her perspective shifted when she engaged with men incarcerated in the Federal Bureau of Prisons, who taught her to understand constitutional law, legislation, and policy. This experience gave her a deeper understanding of how the country—and its justice system—truly works.
        </p>

        <h3 className="text-3xl font-display font-bold mb-4 text-campaign-red uppercase">Our Mission</h3>
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-800">
          <p>
            Through F.A.I.R., Damita has partnered with state and federal institutions to improve public defense systems, ensuring trials and legal procedures reflect true fairness. Collaborating with larger justice organizations has also allowed her to provide testimony in legislative sessions across multiple states—experiences that inspired her decision to run for state office.
          </p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-campaign-gray border-l-8 border-campaign-blue shadow-md"
          >
            F.A.I.R. is committed to educating communities about new laws and policies that strengthen families, improve public safety, and expand opportunities. By bringing knowledge and advocacy together, F.A.I.R. empowers people to understand their rights and participate in shaping a fairer system.
          </motion.p>
        </div>
        
        <Divider />
      </motion.div>
    </section>
  );
}
