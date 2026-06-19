import { motion } from 'framer-motion';

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative py-20 lg:py-28 border-t border-white/5 overflow-hidden ${className}`}
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
