const SectionTitle = ({ title }) => {
  return (
    <div className="section__title">
      <h2 style={{ color: "#221f1f" }}>{title}</h2>
      <div className="big__bar"></div>
      <div className="small__bar"></div>
    </div>
  );
};

export default SectionTitle;
