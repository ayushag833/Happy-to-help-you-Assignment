import React from "react";
import "./BasketballPlayerCard.css";
import { FaForward } from "react-icons/fa6";
import { FaBasketballBall, FaLongArrowAltRight } from "react-icons/fa";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return (
    <div className="card-container">
      <div className="player-card">
        <img src={image} alt={`${name}`} className="player-image" />
        <div className="name-container">
          <h2 className="player-name">
            <FaBasketballBall />
            {name}
          </h2>
          <h4 className="player-position">
            <FaForward />
            {position}
          </h4>
        </div>
        <div className="player-stats">
          <p className="common-stats">
            <FaLongArrowAltRight />
            Points per Game: {stats.pointsPerGame}
          </p>
          <p className="common-stats">
            <FaLongArrowAltRight />
            Assists per Game: {stats.assistsPerGame}
          </p>
          <p className="common-stats">
            <FaLongArrowAltRight />
            Rebounds per Game: {stats.reboundsPerGame}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
