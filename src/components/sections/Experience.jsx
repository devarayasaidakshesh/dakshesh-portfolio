import SectionWrapper from '../ui/SectionWrapper';
import TimelineItem from '../ui/TimelineItem';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
        <div className="lg:col-span-7">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Experience</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
            Where I&apos;ve worked.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
            Practical experience across configuration, development, CPQ, security, troubleshooting and deployment workflows.
          </p>
        </div>
      </div>

      <div className="relative">
        <span className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#dda15e]/40 via-white/10 to-transparent" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
