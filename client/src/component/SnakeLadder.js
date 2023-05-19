import React, { useState } from "react";
import background from "./snakeladder.jpeg";

export default function SnakeLadder(props) {
  const generateRandomSnakes = (numSnakes, boardSize) => {
    const snakes = [];
    const ladders = [];

    for (let i = 0; i < numSnakes; i++) {
      let Shead = Math.floor(Math.random() * (boardSize * boardSize));
      let Stail = Math.floor(Math.random() * (boardSize * boardSize));
      let Lhead = Math.floor(Math.random() * (boardSize * boardSize));
      let Ltail = Math.floor(Math.random() * (boardSize * boardSize));
      //check in Shead is higher than Stail
      while (Stail >= Shead) {
        Stail = Math.floor(Math.random() * (boardSize * boardSize));
      }

      //check if index collide
      while (Shead === Lhead || Lhead === Stail) {
        Lhead = Math.floor(Math.random() * (boardSize * boardSize));
      }

      while (Ltail <= Lhead || Ltail === Stail || Ltail === Shead) {
        Ltail = Math.floor(Math.random() * (boardSize * boardSize));
      }
      snakes.push({ Shead, Stail });
      ladders.push({ Lhead, Ltail });
    }
    return [snakes, ladders];
  };

  let n = props.players,
    i = 0;
  const [snakes, ladders] = generateRandomSnakes(4, 10);
  console.log(snakes, ladders, generateRandomSnakes(4, 10));
  const [players, setPlayers] = useState([]);

  const [board, setBoard] = useState(
    Array(10)
      .fill()
      .map((row, i) =>
        Array(10)
          .fill()
          .map((col, j) => {
            const index = i * 10 + j;
            const s = snakes.map((item, i_item) => {
              if (index === item.Shead) return `SH${i_item}`;
              if (index === item.Stail) return `ST${i_item}`;
              return "";
            });
            const l = ladders.map((item, i_item) => {
              if (index === item.Shead) return `LH${i_item}`;
              if (index === item.Stail) return `LT${i_item}`;
              return "";
            });
            return { index: i * 10 + j + 1, snake: s, ladder: l };
          })
      )
  );
  console.log(board);
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>🐍SnakeLadder🪜DEV</h1>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={background} width={500} height={500} />
      </div> */}

      {snakes[0].head}
      {board.map((row, i) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {row.map((col, j) => {
              return (
                <div
                  style={{
                    display: "inline-flex",
                    width: "5rem",
                    height: "5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "2px solid black",
                    background: `${i % 2 === 0 ? (j % 2 === 0 ? "#7b9acc" : "#F5D042") : j % 2 === 1 ? "#7b9acc" : "#F5D042"}`,
                  }}
                >
                  {board[i][j].index}
                  {board[i][j].snake}
                  {board[i][j].ladder}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
