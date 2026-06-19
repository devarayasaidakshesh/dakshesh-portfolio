import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const tone =
    project.tone === 'stone'
      ? 'from-stone-200/20 to-stone-500/5'
      : 'from-orange-200/20 to-orange-500/5';

  return (
    <motion.article
      className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all duration-500"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="grid lg:grid-cols-12 gap-0">
        <div className="lg:col-span-5 relative overflow-hidden h-40 lg:h-auto">
          <div className={`absolute inset-0 bg-gradient-to-br ${tone} transition-transform duration-700 group-hover:scale-105`} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent lg:bg-gradient-to-b" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur border border-white/10 px-3 py-1.5">
            <span className="text-[10px] uppercase tracking-widest text-white">{project.period}</span>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 lg:p-8">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-3">{project.subtitle}</p>
          <h3 className="font-heading text-lg lg:text-xl text-white tracking-tight leading-snug">{project.title}</h3>
          <p className="mt-3 text-zinc-400 leading-relaxed text-[14px]">{project.description}</p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map(highlight => (
              <li key={highlight} className="flex items-start gap-2 text-[13px] text-zinc-400">
                <span className="w-3.5 h-3.5 mt-0.5 text-[#dda15e] flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map(technology => (
              <span
                key={technology}
                className="text-[10.5px] tracking-wide px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 mt-6 text-sm text-[#dda15e] hover:text-[#bc8a4f] transition-colors link-underline"
              aria-label={`${project.linkLabel || 'View'} — ${project.title}`}
            >
              {project.linkLabel || 'View'}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          ) : (
            <p className="mt-6 text-xs text-zinc-600 tracking-wide">Enterprise project</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
