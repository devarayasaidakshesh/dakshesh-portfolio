import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-heading text-sm tracking-widest text-white" onClick={closeMenu}>
          DAKSHESH<span className="text-[#dda15e]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[13px] tracking-wide transition-colors link-underline ${
                activeSection === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/Devaraya_Sai_Dakshesh_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-white hover:bg-white/5 transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === item.id ? 'text-[#dda15e]' : 'text-zinc-300 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/Devaraya_Sai_Dakshesh_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs tracking-wide text-white"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
