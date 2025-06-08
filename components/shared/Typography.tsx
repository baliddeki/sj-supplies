export const PageHero = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-2xl md:text-4xl font-black mb-2 text-center tracking-tight leading-tight">
    {children}
  </h1>
);

export const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[22px] font-bold text-[#111418] tracking-tight pb-3 pt-5">{children}</h2>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#111418] text-base font-medium">{children}</p>
);

export const Body = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-[#60748a] text-base font-normal ${className}`}>{children}</p>
);
