function SectionHeading({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="text-xl font-bold tracking-tight text-white">{children}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true"></span>
    </div>
  );
}

export default SectionHeading;
