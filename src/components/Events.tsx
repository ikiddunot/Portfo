import { motion } from 'motion/react';
import FloatingStar from './FloatingStar';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';

export default function Events() {
  return (
    <section id="events" className="relative py-20 px-6 bg-white text-campaign-blue overflow-hidden">
      <FloatingStar top="5%" left="5%" size={80} colorClass="text-campaign-red" opacityRange={[0.02, 0.08, 0.02]} duration={7} />
      <FloatingStar top="40%" right="5%" size={40} colorClass="text-campaign-blue" opacityRange={[0.05, 0.15, 0.05]} duration={4.5} delay={1} />
      <FloatingStar bottom="10%" left="10%" size={60} colorClass="text-campaign-red" opacityRange={[0.03, 0.1, 0.03]} duration={5.5} delay={2} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-12 border-l-8 border-campaign-red pl-6 uppercase tracking-wide"
        >
          Upcoming Events
        </motion.h2>

        {/* Respect the Vote */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-campaign-gray p-8 rounded-sm shadow-xl border-t-8 border-campaign-blue relative"
        >
          <h3 className="text-4xl font-display font-bold mb-2 text-campaign-red uppercase">Respect the Vote</h3>
          <p className="text-xl font-bold mb-6 text-slate-600 uppercase tracking-wider">May 8, 2026</p>
          
          <p className="text-lg leading-relaxed mb-6 font-medium text-slate-800">
            Join Damita Bishop for "Respect the Vote," a community event designed to empower voters, share information about the upcoming elections, and create a space for open discussion about the issues that matter most.
          </p>
          
          <div className="bg-white p-6 rounded-sm mb-8 border-l-4 border-campaign-red shadow-md transform hover:scale-[1.01] transition-transform">
            <p className="font-bold text-lg"><span className="text-campaign-red uppercase mr-2">When:</span> Saturday, May 8, 2026</p>
            <p className="font-bold text-lg"><span className="text-campaign-red uppercase mr-2">Where:</span> [Insert Location / Virtual Zoom Link]</p>
            <p className="font-bold text-lg"><span className="text-campaign-red uppercase mr-2">Time:</span> [Insert Time]</p>
          </div>
          
          <h4 className="text-2xl font-display font-bold mb-4 uppercase">What to Expect</h4>
          <ul className="space-y-3 mb-8">
            {[
              "Learn about the primary and general election dates and deadlines in Georgia",
              "Understand your voter registration options and how to make your voice count",
              "Discuss key issues like healthcare, criminal justice reform, education, housing, and economic opportunity",
              "Ask questions, share your opinions, and engage directly with Damita Bishop"
            ].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="flex items-start"
              >
                <span className="text-campaign-red mr-3 font-bold text-xl leading-none">★</span>
                <span className="text-lg font-medium text-slate-800">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <p className="text-lg leading-relaxed mb-6 font-medium text-slate-800">
            This event is open to all voters and candidates. Our goal is to build understanding, awareness, and unity so that every voter feels informed and empowered to participate in the democratic process.
          </p>
          
          <div className="bg-campaign-red text-white p-4 text-center font-bold text-xl uppercase tracking-wide shadow-md hover:bg-red-800 transition-colors cursor-pointer">
            RSVP today to reserve your spot and help us spread the word about the importance of voting!
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <img src={img7} alt="Respect the Vote Event" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        {/* Freedom Fest */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-campaign-gray p-8 rounded-sm shadow-xl border-t-8 border-campaign-red relative"
        >
          <h3 className="text-4xl font-display font-bold mb-2 text-campaign-blue uppercase">Freedom Fest</h3>
          <p className="text-xl font-bold mb-6 text-slate-600 uppercase tracking-wider">September 19, 2026</p>
          
          <p className="text-lg leading-relaxed mb-8 font-medium text-slate-800">
            Celebrate community, civic engagement, and the spirit of freedom with Damita Bishop at Freedom Fest! This family-friendly event is designed to bring people together, inform voters, and highlight the importance of participation in our democracy.
          </p>
          
          <h4 className="text-2xl font-display font-bold mb-4 uppercase">What to Expect</h4>
          <ul className="space-y-3 mb-8">
            {[
              "Live music, food, and activities for all ages",
              "Opportunities to register to vote and learn about upcoming elections",
              "Discussions about key issues including healthcare, criminal justice reform, education, housing, and economic opportunity",
              "Meet Damita Bishop and other candidates from all political parties and share your ideas, concerns, and vision for our community",
              "Resources and booths from local organizations supporting civic engagement, family services, and community development"
            ].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="flex items-start"
              >
                <span className="text-campaign-blue mr-3 font-bold text-xl leading-none">★</span>
                <span className="text-lg font-medium text-slate-800">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <p className="text-lg leading-relaxed mb-6 font-medium text-slate-800">
            Freedom Fest is about unity, empowerment, and celebrating the power of your voice. Come enjoy the festivities, learn more about your rights as a voter, and engage directly with your candidate and community leaders.
          </p>
          
          <div className="bg-campaign-blue text-white p-4 text-center font-bold text-xl uppercase tracking-wide shadow-md hover:bg-blue-900 transition-colors cursor-pointer">
            RSVP or mark your calendars now—let’s come together to celebrate freedom, community, and active participation!
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <img src={img8} alt="Freedom Fest Event" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
