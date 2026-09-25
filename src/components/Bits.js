export function Eyebrow({ children, light = false }) {
  return (
    <p className={`text-xs font-semibold tracking-wide ${light ? "text-teal-light" : "text-teal"}`}>
      {children}
    </p>
  );
}

export function IconTile({ icon: Icon, label, tone = "teal" }) {
  const tones = {
    teal: "bg-teal-soft text-teal",
    navy: "bg-navy/5 text-navy",
    white: "bg-white/15 text-white",
  };
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tones[tone]}`}>
        <Icon className="h-6 w-6" />
      </span>
      <span className="text-sm font-semibold text-navy">{label}</span>
    </div>
  );
}

export function StatBlock({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-heading text-lg font-bold text-navy leading-tight">{value}</p>
        <p className="text-xs text-navy/60 leading-tight">{label}</p>
      </div>
    </div>
  );
}
