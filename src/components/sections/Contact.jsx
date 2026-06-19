import { Github, Linkedin, Mail, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from '../ui/SectionWrapper';

const socialLinks = [
  {
    label: 'Email',
    value: 'devarayasaidakshesh@gmail.com',
    href: 'mailto:devarayasaidakshesh@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'sai-dakshesh-devaraya',
    href: 'https://www.linkedin.com/in/sai-dakshesh-devaraya-aaa73b1a3/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'devarayasaidakshesh',
    href: 'https://github.com/devarayasaidakshesh',
    icon: Github,
  },
];

const inputClass =
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#dda15e] focus:ring-1 focus:ring-[#dda15e] outline-none transition-all';

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const emailjsConfigured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );

  function updateField(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('');

    if (!emailjsConfigured) {
      setStatus('EmailJS is not configured yet — opening your email client instead.');
      window.location.href = `mailto:devarayasaidakshesh@gmail.com?subject=${encodeURIComponent(
        form.subject || 'Portfolio inquiry',
      )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)}`;
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("Message sent — I'll get back to you shortly.");
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please email me directly instead.');
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-[#dda15e] mb-5">Contact</p>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white">
          Have a project in mind?
        </h2>
        <p className="mt-6 text-zinc-400 text-base lg:text-lg leading-relaxed">
          Tell me a bit about what you&apos;re building. I respond to all serious enquiries within 24
          hours.
        </p>

        <button
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#dda15e] text-black font-medium px-8 py-4 text-sm hover:bg-[#bc8a4f] transition-colors"
          onClick={() => setOpen(true)}
          type="button"
        >
          <MessageSquare className="w-4 h-4" />
          Contact Me
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 24, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 24, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <form
              className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 lg:p-10 space-y-5 text-left"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white">
                  Name
                  <input
                    className={inputClass}
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={updateField}
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-white">
                  Email
                  <input
                    className={inputClass}
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={updateField}
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-white">
                Subject
                <input
                  className={inputClass}
                  name="subject"
                  placeholder="Salesforce / AI automation opportunity"
                  value={form.subject}
                  onChange={updateField}
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-white">
                Message
                <textarea
                  className={`${inputClass} resize-none`}
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role, project or workflow you want to build."
                  value={form.message}
                  onChange={updateField}
                  required
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="group inline-flex items-center gap-2 rounded-full bg-[#dda15e] text-black font-medium px-7 py-3.5 text-sm hover:bg-[#bc8a4f] transition-colors"
                  type="submit"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
                <button
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>

              {status && (
                <p
                  className={`text-sm ${status.includes('wrong') ? 'text-red-300' : 'text-[#dda15e]'}`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social links at the bottom */}
      <div className="max-w-3xl mx-auto mt-16">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-zinc-600 mb-6">
          Or reach me directly
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {socialLinks.map(link => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-5 hover:border-[#dda15e]/30 transition-colors"
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 text-[#dda15e] flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] tracking-widest uppercase text-zinc-500">
                    {link.label}
                  </span>
                  <span className="block text-sm text-white break-all">{link.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
