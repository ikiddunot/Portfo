import { motion } from 'motion/react';
import Divider from './Divider';
import FloatingStar from './FloatingStar';

export default function Bio() {
  return (
    <section id="about" className="relative py-20 px-6 bg-campaign-white text-campaign-blue overflow-hidden">
      <FloatingStar top="5%" right="5%" size={48} colorClass="text-campaign-red" opacityRange={[0.05, 0.15, 0.05]} duration={5} />
      <FloatingStar bottom="10%" left="5%" size={64} colorClass="text-campaign-blue" opacityRange={[0.02, 0.08, 0.02]} duration={6} delay={1} />
      <FloatingStar top="40%" left="10%" size={32} colorClass="text-campaign-red" opacityRange={[0.05, 0.2, 0.05]} duration={4.5} delay={2} />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl font-display font-bold mb-10 border-b-8 border-campaign-red pb-4 uppercase tracking-wide flex items-center">
          About Damita Bishop
        </h2>
        <div className="space-y-6 text-lg leading-relaxed font-medium text-slate-800">
          <p>
            <span className="text-4xl font-display text-campaign-red float-left mr-2 leading-none">D</span>amita Bishop is a Christian community leader, criminal justice advocate, and founder of Fighting Against Institutionalized Railroading (FAIR). A mother of five and longtime working professional, Damita spent 15 years at UPS and a decade driving for rideshare platforms before dedicating herself full-time to advocacy and public service.
          </p>
          <p>
            Through FAIR, she has worked nationally with policymakers and advocacy organizations to address wrongful convictions, criminal justice reform, parole reform, and reentry initiatives. Her work also includes advocacy on human rights in jails and prisons, voting rights, housing access, healthcare, and family law.
          </p>
          <p>
            In 2024, Damita launched a write-in campaign focused on raising awareness about Medicaid expansion, affordable housing, and justice reform. She is now running for the Georgia State House of Representatives in District 61, bringing a grassroots perspective and a deep commitment to fairness, accountability, and opportunity for working families.
          </p>
          
          <Divider />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 p-6 bg-campaign-gray border-l-8 border-campaign-blue relative"
          >
            <p className="text-xl leading-relaxed font-bold text-campaign-blue">
              Guided by her faith and commitment to service, Damita seeks to build bipartisan solutions that strengthen communities and expand opportunity for all Georgians.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
