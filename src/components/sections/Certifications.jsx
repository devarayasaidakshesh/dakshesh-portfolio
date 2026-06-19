import SectionWrapper from '../ui/SectionWrapper';
import CertCard from '../ui/CertCard';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="mb-12 max-w-3xl">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Certifications</p>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
          Verified credentials.
        </h2>
        <p className="mt-6 text-zinc-400 text-base lg:text-lg leading-relaxed">
          Certifications and training that support enterprise Salesforce administration, development and AI-assisted automation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {certifications.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
