import { ChevronDown } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SkillChip from '../ui/SkillChip';
import { skillGroups } from '../../data/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12">
        <div className="lg:col-span-5">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Skills</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
            What I build with.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
            A focused technical stack across the Salesforce platform, development, automation and AI — hover any group to reveal the tools inside.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skillGroups.map(group => (
          <div
            key={group.category}
            className="group rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 lg:p-7 hover:border-[#dda15e]/30 hover:bg-white/[0.04] transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-sm tracking-widest text-white">{group.category}</h3>
              <ChevronDown className="w-4 h-4 text-[#dda15e] transition-transform duration-300 group-hover:rotate-180" />
            </div>

            {/* Collapsed by default; expands on hover via grid-rows 0fr -> 1fr */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-2 pt-5">
                  {group.skills.map(skill => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
