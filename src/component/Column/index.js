import React from "react";

import { connect } from "react-redux";
import Card from "../Card";
import { handleMoveCard, handleAddCard } from "../../redux/column/action";

const Component = ({ columns, handleMoveCard, handleAddCard }) => {
  return (
    <div className="container">
      {columns.map((colValue, index) => (
        <div className="column">
          <div className="header" style={{ backgroundColor: colValue.color }}>
            {colValue.title}
          </div>
          <div className="list">
            <Card
              cards={colValue.card}
              index={index}
              handleMoveCard={handleMoveCard}
            />
          </div>
          <div className="footer">
            <button onClick={() => handleAddCard(index)}>+ Add a card</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    columns: state.column,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleMoveCard: (index, moveIndex, i) =>
      dispatch(handleMoveCard(index, moveIndex, i)),
    handleAddCard: (index) => dispatch(handleAddCard(index)),
  };
};

const Column = connect(mapStateToProps, mapDispatchToProps)(Component);
export default Column;
