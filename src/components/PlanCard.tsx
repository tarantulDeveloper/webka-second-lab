import React, {FC} from 'react';
import "./PlanCard.scss";

interface PlanCardProps {
  title: string;
  number: string;
  descriptions: string[];
}

const PlanCard:FC<PlanCardProps> = ({title, number,descriptions}) => {
  return (
    <div className="col-sm-12 col-md-4 ">

      <div className="card text-center myCard">
        <div className="card-header bg-dark text-white">
          <div className="offer text-uppercase ">
            <h6 className="text-center">
              offer!
            </h6>
          </div>
          <h5 className="text-uppercase pt-4">{title}</h5>
          <div className="myCardHeader">
            <span className="sup">$</span><span className="number">{number}</span>/mo
          </div>
        </div>

        <ul className="list-group list-group-flush">
          {descriptions.map((item, i) =>
            <li className="list-group-item" key={i}>{item}</li>
          )}
        </ul>

        <div className="card-footer bg-success text-white">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default PlanCard;