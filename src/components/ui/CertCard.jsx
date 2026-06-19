import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CertCard({ cert, index }) {
  return (
    <motion.article
      className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-500"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/10 text-[#dda15e] mb-6">
        <Award className="w-5 h-5" />
      </span>
      <h3 className="font-heading text-lg text-white tracking-tight">{cert.name}</h3>
      <p className="mt-3 text-[13px] text-zinc-500 tracking-wide">{cert.issuer}</p>
      <span className="mt-6 inline-block text-[10px] uppercase tracking-widest text-[#dda15e]">{cert.badge}</span>
    </motion.article>
  );
}
