import React from "react";

export default function Card({ cards, index, handleMoveCard }) {
  return (
    <div>
      {cards.map((cardValue, i) => (
        <div className="card">
          {index !== 0 && (
            <div className="prve">
              <button onClick={() => handleMoveCard(index, index - 1, i)}>
                Prve
              </button>
            </div>
          )}
          <div className="content">{cardValue.title}</div>
          {index !== 3 && (
            <div className="next">
              <button onClick={() => handleMoveCard(index, index + 1, i)}>
                Next
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
