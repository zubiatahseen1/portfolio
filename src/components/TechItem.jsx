function TechItem({ name, icon }) {
  return (
    <li className="tech-item">
      <img src={icon} alt="" width="28" height="28" />
      <span>{name}</span>
    </li>
  );
}

export default TechItem;
