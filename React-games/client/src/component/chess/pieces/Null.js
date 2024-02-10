export default function Null(i, j, player) {
  function moves(i, j, board) {
    const movesArray = [...Array(8)].map(() => Array(8).fill(false));
    // Calculate the moves based on the parameters and update the movesArray
    return movesArray;
  }
  const point = 0;
  const name = "";
  const row = i,
    col = j;
  const p = null;
  return { moves, point, name, row, col, p };
}
