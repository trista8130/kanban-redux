export const HANDLE_MOVE_CARD = "HANDLE_MOVE_CARD";
export const HANDLE_ADD_CARD = "HANDLE_ADD_CARD";

export const handleMoveCard = (index, moveIndex, i) => ({
  type: HANDLE_MOVE_CARD,
  index,
  moveIndex,
  i,
});

export const handleAddCard = (index) => ({
  type: HANDLE_ADD_CARD,
  index,
});
