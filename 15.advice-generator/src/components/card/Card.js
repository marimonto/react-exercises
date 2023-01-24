import "./Card.css";
const Card = ({ adviceData }) => {
  const { advice, id } = adviceData;
  return (
    <div className="card">
      <h2 className="advice-title">ADVICE #{id}</h2>
      <blockquote className="advice-quote">"{advice}"</blockquote>
    </div>
  );
};

export default Card;
