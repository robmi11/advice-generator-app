import Divider from "../images/divider.svg";
import Icon from "../images/icon-dice.svg";

const Card = () => {
  return (
    <main className="card">
      <p className="card__text">Advaice #117</p>
      <h2 className="card__advice">
        If you are ever in doubt about whether or not to wash your hair: Wash
        it.
      </h2>
      <div className="card__img">
        <img src={Divider} alt="" />
      </div>
      <div className="card__icon">
        <img src={Icon} alt="" />
      </div>
    </main>
  );
};

export default Card;
