export default function SkillChip({ label }) {
  return (
    <span className="text-[10.5px] tracking-wide px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 transition-colors hover:text-[#dda15e] hover:border-[#dda15e]/40">
      {label}
    </span>
  );
}
