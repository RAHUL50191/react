import React, { useState } from "react";

export default function Tictactoe() {
  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState(true);
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  function game() {
    let i = 0;
    //if  board filled declare DRAW
    board.findIndex((row) => row.includes(0)) === -1 ? setWinner("DRAW") : i++;
    //check for winner
    for (i = 0; i < 3; i++) {
      //row
      if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        board[i][0] === "X" ? setWinner("X") : setWinner("O");
        console.log(winner);
        return;
      }

      //col

      if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        board[0][i] === "X" ? setWinner("X") : setWinner("O");
        console.log(winner);
        return;
      }
    }
    //diagonal
    if (
      (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
      (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
      board[1][1] === "X" ? setWinner("X") : setWinner("O");
      console.log(winner);
      return;
    }
  }
  function playerSign(e, i, j, player) {
    //set value
    let brd = [...board];
    brd[i][j] = player ? "X" : "O";
    setBoard(brd);
    //check for winner or game over
    game();
    //alter player
    setPlayer(!player);
    e.currentTarget.disabled = true;
  }
  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>❌TIC TAC TOE⭕</h2>
      <h4 style={{ display: "flex", justifyContent: "center" }}>PlayerTurn: {player ? "X" : "O"}</h4>
      <h4 style={{ display: "flex", justifyContent: "center" }}>{winner ? "Winner IS:" + winner : null}</h4>
      {board.map((i, i_index) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {i.map((j, j_index) => {
              return (
                <div style={{ display: "inline" }}>
                  <button onClick={(e) => playerSign(e, i_index, j_index, player)} style={{ height: "5rem", width: "5rem" }} disabled={winner}>
                    {j}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
