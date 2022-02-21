import Divider from "../images/divider.svg";
import Icon from "../images/icon-dice.svg";

const Card = ({ getNewAdvice, advice }) => {
  return (
    <main className="card">
      <p className="card__text">Advaice #{advice.id}</p>
      <h2 className="card__advice">{advice.advice}</h2>
      <div className="card__img">
        <img src={Divider} alt="" />
      </div>
      <div className="card__icon" onClick={getNewAdvice}>
        <img src={Icon} alt="" />
      </div>
    </main>
  );
};

export default Card;
