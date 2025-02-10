function Card({ img, title, description }) {
    return (
      <div className="card">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Card;
  