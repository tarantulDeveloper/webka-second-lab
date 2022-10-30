import React, { FC } from "react";
import "./CardPeople.scss"

interface CardPeopleProps {
  src: string;
  personName: string;
  email: string;
}

const CardPeople: FC<CardPeopleProps> = ({ src, personName, email }) => {
  return (
    <div className="card border-0 text-center">
      <img src={src} alt="person" className="rounded-circle w-50 align-self-center" />
      <div className="card-body">
        <h5 className="card-title">{personName}</h5>
        <p className="card-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
        <p className="card-text bottom-text">{email}</p>
      </div>
    </div>
  );
};

export default CardPeople;
