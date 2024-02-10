function king(i, j, player) {
  // moves returns the matrix moves[][];
  //check for which player is calling /1 to make from perspective moves
  //perspective moves required pawn are {pawns}
  function moves(i, j, board) {
    //assining necesarry !!!!!
    const brd = board;
    const offset = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let move = Array(8)
      .fill()
      .map((row_ele, row) =>
        Array(8)
          .fill()
          .map((col_ele, col) => {
            return false;
          })
      );

    offset.forEach(async (item) => {
      const new_row = i + item[0];
      const new_col = j + item[1];
      if (
        new_row >= 0 &&
        new_row < 8 &&
        new_col >= 0 &&
        new_col < 8 &&
        brd[new_row] &&
        brd[new_row][new_col] &&
        brd[new_row][new_col].player !== player
      ) {
        move[new_row][new_col] = true;
      }
      //check if own side piece hindering

      //check if enemy piece can be killed
    });
    console.log(brd);
    return move;
  }

  const point = 100;
  const name = player ? "♔" : "♚";
  const row = i,
    col = j;
  const p = player;
  return { moves, point, name, row, col, p };
}
export default king;
