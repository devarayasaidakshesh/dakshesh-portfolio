import { Code2, Sparkles, Workflow } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { services } from '../../data/services';

const icons = {
  'ai-workflow': Sparkles,
  web: Code2,
  automation: Workflow,
};

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="mb-12 max-w-3xl">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Services</p>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
          How I can help.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map(service => {
          const Icon = icons[service.id] ?? Sparkles;
          return (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-7 hover:bg-white/[0.05] hover:border-[#dda15e]/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#dda15e]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#dda15e]/10 border border-[#dda15e]/20 text-[#dda15e] mb-6">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-heading text-xl text-white tracking-tight mb-3">{service.title}</h3>
              <p className="text-[13px] leading-relaxed text-zinc-400">{service.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
