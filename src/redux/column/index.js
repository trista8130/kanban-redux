import columnsData from "../../contants";
import { HANDLE_MOVE_CARD, HANDLE_ADD_CARD } from "./action";

const columnReducer = (state = columnsData, action) => {
  const { index, moveIndex, i } = action;
  const nextState = [...state];
  switch (action.type) {
    case HANDLE_MOVE_CARD:
      const moveCard = nextState[index].card.splice(i, 1);
      nextState[moveIndex].card.push(moveCard[0]);
      return nextState;
    case HANDLE_ADD_CARD:
      const userInput = window.prompt();
      if (userInput) {
        nextState[index].card.push({ title: userInput });
      }
      return nextState;
    default:
      return state;
  }
};

export default columnReducer;
