/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Fair from './components/Fair';
import Books from './components/Books';
import Remembering from './components/Remembering';
import United from './components/United';
import Issues from './components/Issues';
import Events from './components/Events';
import Policy from './components/Policy';
import CallToAction from './components/CallToAction';
import Mission from './components/Mission';
import CTA from './components/CTA';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Bio />
      <Mission />
      <CTA />
      <Fair />
      <Books />
      <Remembering />
      <United />
      <Issues />
      <Events />
      <Policy />
      <CallToAction />
    </main>
  );
}
