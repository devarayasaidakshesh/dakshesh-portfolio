import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-6">
        <div>
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Projects</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
            Selected work.
          </h2>
        </div>
        <p className="max-w-md text-zinc-400 text-[15px] leading-relaxed">
          Each project is presented with the problem space, technical stack and measurable business value.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
