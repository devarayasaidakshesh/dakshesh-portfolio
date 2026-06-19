import { Check, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  const hasProject = Boolean(item.project);

  return (
    <motion.article
      className="relative pl-14 lg:pl-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <span className="absolute left-0 lg:left-2 top-1 w-9 h-9 rounded-full bg-[#0a0a0a] border border-[#dda15e]/40 flex items-center justify-center">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dda15e]">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#dda15e] opacity-60 pulse-dot" />
        </span>
      </span>

      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <p className="text-[11px] uppercase tracking-widest text-[#dda15e]">{item.period}</p>
          <p className="text-[11px] uppercase tracking-widest text-zinc-500">{item.location}</p>
        </div>
        <h3 className="font-heading text-xl lg:text-2xl text-white tracking-tight">{item.role}</h3>
        <p className="mt-1 text-[12px] text-zinc-500 tracking-wide">{item.company}</p>
        <p className="mt-4 text-zinc-400 leading-relaxed text-[14px]">{item.description}</p>

        <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
          {item.bullets.map(bullet => (
            <li key={bullet} className="flex items-start gap-2 text-[13px] text-zinc-300">
              <Check className="w-3.5 h-3.5 mt-0.5 text-[#dda15e] flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {hasProject && <ProjectBlock project={item.project} />}
      </div>
    </motion.article>
  );
}

/**
 * Collapsed by default; expands on hover. Used to nest a project under a
 * work-experience entry (e.g. the SITA project under LTM).
 */
function ProjectBlock({ project }) {
  return (
    <div className="group/project mt-6 rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden hover:border-[#dda15e]/30 transition-colors duration-300">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dda15e]" />
          <span className="font-body text-[11px] tracking-[0.25em] uppercase text-[#dda15e]">
            {project.label}
          </span>
        </div>
        <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-hover/project:rotate-180 group-hover/project:text-[#dda15e]" />
      </div>

      <div className="grid grid-rows-[0fr] group-hover/project:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
        <div className="overflow-hidden">
          <div className="px-5 pb-5 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h4 className="font-heading text-base text-white tracking-tight">{project.title}</h4>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">{project.period}</p>
            </div>
            <p className="text-[13px] text-zinc-400 leading-relaxed">{project.description}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-[12px] text-zinc-300">
                  <Check className="w-3 h-3 mt-0.5 text-[#dda15e] flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map(t => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
