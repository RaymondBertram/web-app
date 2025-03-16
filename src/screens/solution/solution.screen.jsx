import React from "react";
import { BigCards } from "../../components/cards/big-cards.component";

export const Solution = () => {
  const cardsData = [
    {
      h1: "Lorem ipsum dolor sit amet",
      h2: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: "https://images.unsplash.com/photo-1603858688536-ce960d79d411?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "rgb(223, 209, 244)",
    },
    {
      h1: "Lorem ipsum dolor sit amet",
      h2: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: "https://images.unsplash.com/photo-1716473408907-26d24166ed3c?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "rgb(223, 201, 192)",
    },
    {
      h1: "Lorem ipsum dolor sit amet",
      h2: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos",
      img: "https://images.unsplash.com/photo-1716473408907-26d24166ed3c?q=80&w=3089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "rgb(223, 243, 246)",
    },
  ];

  return (
    <section className="px-2" id="solution">
      <div className="solution-card-container">
        {cardsData.map((card, index) => (
          <BigCards
            key={index}
            h1={card.h1}
            h2={card.h2}
            text={card.text}
            color={card.color}
            img={card.img}
            i={index}
          />
        ))}
      </div>
    </section>
  );
};
