import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'Email', href: 'mailto:devarayasaidakshesh@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-dakshesh-devaraya-aaa73b1a3/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/devarayasaidakshesh', icon: Github },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grain pt-28 pb-20">
      <div className="absolute -top-20 -right-20 w-[28rem] h-[28rem] glow-orb bg-gradient-to-br from-orange-200/20 to-orange-500/5" />
      <div className="absolute -bottom-20 -left-24 w-80 h-80 glow-orb bg-gradient-to-br from-stone-200/20 to-stone-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-2 mb-10">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dda15e]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#dda15e] opacity-60 pulse-dot" />
            </span>
            <span className="font-body text-[11px] tracking-[0.3em] uppercase text-zinc-300">
              Available for hiring, freelance &amp; intelligent automation work
            </span>
          </div>

          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Salesforce Developer</p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-light leading-[1.02] tracking-tighter text-white">
            DEVARAYA SAI
            <br />
            DAKSHESH
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-300/90 leading-relaxed font-light">
            Salesforce Developer at LTM specialising in Salesforce CPQ, Sales Cloud, Service Cloud, Apex, LWC and AI-driven automation.
          </p>
          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed font-light">
            A self-taught builder of intelligent systems — building solutions that deliver measurable business impact.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-[#dda15e] text-black font-medium px-8 py-4 text-sm hover:bg-[#bc8a4f] transition-colors"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/Devaraya_Sai_Dakshesh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/20 text-white px-7 py-4 text-sm hover:bg-white/5 transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-[#dda15e] hover:border-[#dda15e]/40 transition-colors"
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to about</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
