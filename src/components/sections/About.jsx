import SectionWrapper from '../ui/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">About</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
            Work at the intersection.
          </h2>
        </div>

        <div className="lg:col-span-8 max-w-2xl">
          <div className="space-y-6 text-zinc-300 text-base lg:text-lg leading-relaxed font-light">
            <p>
              I&apos;m a Salesforce Developer at LTM, working at the intersection of
              Salesforce engineering, cloud automation and practical AI. My day-to-day
              spans Salesforce CPQ, Sales Cloud, Service Cloud, Apex, Lightning Web
              Components and AI-driven automation — building intelligent solutions that
              deliver measurable business impact.
            </p>
            <p>
              I care less about the tool and more about the outcome: a cleaner quote
              process, a faster deployment, a workflow that quietly removes manual work.
              That mindset has pulled me across configuration, development, pricing logic
              and no-code automation, and into the early edges of prompt-engineered
              workflows and AI-assisted development.
            </p>
            <p>
              I&apos;m a self-taught builder at heart — comfortable shipping on the
              platform, but just as happy taking a problem apart to find the simplest
              thing that actually works.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
