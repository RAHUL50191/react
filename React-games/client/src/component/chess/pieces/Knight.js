export default function knight(i, j, player) {
  // moves returns the matrix moves[][];
  //check for which player is calling /1 to make from perspective moves
  //perspective moves required pawn are {pawns}
  function moves(i, j, board) {
    const brd = board;
    let move = Array(8)
      .fill()
      .map((row, i) =>
        Array(8)
          .fill()
          .map((col, j) => {
            return false;
          })
      );
    const offset = [
      [2, -1],
      [2, 1],
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, 2],
      [-1, -2],
      [1, -2],
    ];
    for (const item of offset) {
      let new_row = i + item[0];
      let new_col = j + item[1];
      if (
        new_row >= 0 &&
        new_row < 8 &&
        new_col >= 0 &&
        new_col < 8 &&
        brd[new_row] &&
        brd[new_row][new_col] &&
        brd[new_row][new_col].player !== player
      ) {
        if (brd[new_row] && brd[new_row][new_col] && brd[new_row][new_col].player !== null && brd[new_row][new_col].player !== player) {
          move[new_row][new_col] = true;
        }
        move[new_row][new_col] = true;
      }
    }
    return move;
  }

  const point = 3;
  const name = player ? "♘" : "♞";
  const row = i,
    col = j;
  const p = player;
  return { moves, point, name, row, col, p };
}
