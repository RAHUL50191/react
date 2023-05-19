export default function pawn(i, j, player) {
  const row = i,
    col = j;
  // moves returns the matrix moves[][];
  //check for which player is calling /1 to make from perspective moves
  //perspective moves required pawn are {pawns}
  function moves(i, j, board) {
    const brd = board;
    let move = Array(8)
      .fill()
      .map(() =>
        Array(8)
          .fill()
          .map(() => {
            return false;
          })
      );

    // offset.forEach(async (item) => {
    //set for player true:false directional
    console.log(player);
    ///------------------------------optimization req-----------------------------------
    if (player === false && row + 1 < 8) {
      console.log(row, col);
      if (
        row === 1 &&
        brd[row + 2] &&
        brd[row + 2][col] &&
        brd[row + 2][col].player === null &&
        brd[row + 1] &&
        brd[row + 1][col] &&
        brd[row + 1][col].player === null
      ) {
        move[row + 2][col] = true;
      }
      if (brd[row + 1] && brd[row + 1][col] && brd[row + 1][col].player === null) {
        move[row + 1][col] = true;
      }
      if (col + 1 < 8 && brd[row + 1] && brd[row + 1][col + 1] && brd[row + 1][col + 1].player !== null && brd[row + 1][col + 1].player !== player) {
        move[row + 1][col + 1] = true;
      }
      if (col - 1 < 8 && brd[row + 1] && brd[row + 1][col - 1] && brd[row + 1][col - 1].player !== null && brd[row + 1][col - 1].player !== player) {
        move[row + 1][col - 1] = true;
      }
    } else if (player === true && row - 1 >= 0) {
      if (row === 0) {
        prompt("select piece");
        console.log("object");
      }
      if (
        row === 6 &&
        brd[row - 2] &&
        brd[row - 2][col] &&
        brd[row - 2][col].player === null &&
        brd[row - 1] &&
        brd[row - 1][col] &&
        brd[row - 1][col].player === null
      ) {
        move[row - 2][col] = true;
      }
      if (brd[row - 1] && brd[row - 1][col] && brd[row - 1][col].player === null) {
        move[row - 1][col] = true;
      }
      if (col + 1 >= 0 && brd[row - 1] && brd[row - 1][col + 1] && brd[row - 1][col + 1].player !== null && brd[row - 1][col + 1].player !== player) {
        move[row - 1][col + 1] = true;
      }
      if (col - 1 >= 0 && brd[row - 1] && brd[row - 1][col - 1] && brd[row - 1][col - 1].player !== null && brd[row - 1][col - 1].player !== player) {
        move[row - 1][col - 1] = true;
      }
    }
    console.log(move);
    console.log(board);
    return move;
  }
  const point = 1;
  const name = player ? "♙" : "♟";
  const p = player;
  return { moves, point, name, row, col, p };
}
