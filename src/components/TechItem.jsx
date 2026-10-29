function TechItem({ name, icon }) {
  return (
    <li className="flex items-center gap-2 rounded-full border border-line bg-card py-1.5 pr-4 pl-2 text-sm font-medium text-ink/80 transition-colors hover:border-mauve">
      <img src={icon} alt="" width="20" height="20" className="size-5" />
      {name}
    </li>
  );
}

export default TechItem;
