const colors = {
  Raj: "#5B3DF5",
  Arjun: "#3B82F6",
  Priya: "#EC4899",
  Sneha: "#10B981",
  Kiran: "#F59E0B",
};

const AvatarChip = ({ name }) => {
  const bg = colors[name] || "#64748B";

  return (
    <div className="avatar-chip">
      <div
        className="avatar-circle"
        style={{ background: bg }}
      >
        {name.charAt(0)}
      </div>

      <span>{name}</span>
    </div>
  );
};

export default AvatarChip;