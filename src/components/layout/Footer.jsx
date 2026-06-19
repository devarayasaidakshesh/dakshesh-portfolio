import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { label: 'Email', href: 'mailto:devarayasaidakshesh@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sai-dakshesh-devaraya-aaa73b1a3/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/devarayasaidakshesh', icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg text-white tracking-tight">
            Dakshesh<span className="text-[#dda15e]">.</span>
          </p>
          <p className="mt-2 text-xs text-zinc-600 tracking-wide">
            © {new Date().getFullYear()} Devaraya Sai Dakshesh. All rights reserved.
          </p>
        </div>

        <p className="text-xs text-zinc-500 tracking-wide order-last sm:order-none">
          Salesforce Development · Cloud Engineering · AI Automation
        </p>

        <div className="flex items-center gap-3">
          {socials.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-[#dda15e] hover:border-[#dda15e]/40 transition-colors"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
