import React, { useState, useEffect } from "react";
import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";
import Rock from "./pieces/Rock";
import Pawn from "./pieces/Pawn";
import N from "./pieces/Null";
import fmoves from "./utils/fmoves";

export default function Chess() {
  // we change color if moves[][] is listed in function and set when onclicked board[i][j]
  //   pawn is the selected as Non-utilPiece ie moves=false
  const [piece, setPiece] = useState(N());
  //true for white ,,false for black to switch b/w players
  const [player, setPlayer] = useState(true);
  const [moves, setMoves] = useState(piece.moves(0, 0, true));
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState("");

  const [board, setBoard] = useState(
    Array(8)
      .fill()
      .map((row, i) =>
        Array(8)
          .fill()
          .map((col, j) => {
            if (i === 6) {
              return { name: Pawn(i, j, player).name, player: player };
            } else if (i === 7 && (j === 0 || j === 7)) {
              return { name: Rock(i, j, player).name, player: player };
            } else if (i === 7 && (j === 1 || j === 6)) {
              return { name: Knight(i, j, player).name, player: player };
            } else if (i === 7 && (j === 2 || j === 5)) {
              return { name: Bishop(i, j, player).name, player: player };
            } else if (i === 7 && j === 3) {
              return { name: Queen(i, j, player).name, player: player };
            } else if (i === 7 && j === 4) {
              return { name: King(i, j, player).name, player: player };
            } else if (i === 1) {
              return { name: Pawn(i, j, !player).name, player: !player };
            } else if (i === 0 && (j === 0 || j === 7)) {
              return { name: Rock(i, j, !player).name, player: !player };
            } else if (i === 0 && (j === 1 || j === 6)) {
              return { name: Knight(i, j, !player).name, player: !player };
            } else if (i === 0 && (j === 2 || j === 5)) {
              return { name: Bishop(i, j, !player).name, player: !player };
            } else if (i === 0 && j === 3) {
              return { name: Queen(i, j, !player).name, player: !player };
            } else if (i === 0 && j === 4) {
              return { name: King(i, j, !player).name, player: !player };
            } else {
              return { name: N(null).name, player: null };
            }
          })
      )
  );
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);

  useEffect(() => {
    if (piece) {
      setMoves(piece.moves(selectedRow, selectedCol, board));
    }
  }, [piece, selectedRow, selectedCol, board]);
  function getPieceName(i, j) {
    return board[i][j].name === King(i, j, board[i][j].player).name
      ? King
      : board[i][j].name === Queen(i, j, board[i][j].player).name
      ? Queen
      : board[i][j].name === Rock(i, j, board[i][j].player).name
      ? Rock
      : board[i][j].name === Bishop(i, j, board[i][j].player).name
      ? Bishop
      : board[i][j].name === Knight(i, j, board[i][j].player).name
      ? Knight
      : board[i][j].name === Pawn(i, j, board[i][j].player).name
      ? Pawn
      : N;
  }
  function handlePawn(i, j) {
    if (board[i][j].player === player) {
      setSelectedRow(i);
      setSelectedCol(j);
      console.log(board[i][j]);
      // const fname = getPieceName(i, j);
      // setPiece(fname(i, j, board[i][j].player));
      setPiece(getPieceName(i, j)(i, j, board[i][j].player));
      setMoves(piece.moves(i, j, [...board]));
    }
  }

  useEffect(() => {
    setMoves(fmoves);
  }, [board]);
  useEffect(() => {
    if (score.player1 >= 100) {
      setWinner("PLAYER1");
    } else if (score.player2 >= 100) {
      setWinner("PLAYER2");
    }
  }, [score]);
  function handlePosition(i, j) {
    console.log(i, j);
    const prev_i = piece.row,
      prev_j = piece.col;
    setBoard((oldBoard) => {
      return oldBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowIndex === i && colIndex === j) {
            player
              ? setScore((oldscore) => {
                  return { player1: oldscore.player1 + getPieceName(i, j)(i, j, player).point, player2: oldscore.player2 };
                })
              : setScore((oldscore) => {
                  return { player1: oldscore.player1, player2: oldscore.player2 + getPieceName(i, j)(i, j, player).point };
                });
            if (score.player1 >= 100) {
              setWinner("PLAYER1");
            } else if (score.player2 >= 100) {
              setWinner("PLAYER2");
            }
            setPiece(piece);
            console.log(piece);

            return { name: piece.name, player: piece.p };
          } else if (rowIndex === prev_i && colIndex === prev_j) {
            return { name: "", player: null };
          } else {
            return cell;
          }
        })
      );
    });
    setPlayer(!player);
    setMoves(fmoves);
  }

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        CHESS{winner === "" ? piece.name : null}
        <br />
      </h2>
      {winner === "" ? (
        <>
          <p style={{ display: "flex", justifyContent: "center" }}>PLAYER TURN:{player ? King(0, 0, true).name : King(0, 0, false).name}</p>

          <p style={{ display: "flex", justifyContent: "center" }}>
            PLAYER1: {score.player1}
            PLAYER2: {score.player2}
          </p>
        </>
      ) : null}

      {winner === "" ? (
        board.map((row, i) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            {row.map((col, j) => {
              return (
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: `${
                      moves[i][j] === true ? "lightgreen" : i % 2 === 0 ? (j % 2 === 0 ? "black" : "white") : j % 2 === 1 ? "black" : "white"
                    }`,
                    color: `${i % 2 === 1 ? (j % 2 === 0 ? "black" : "white") : j % 2 === 1 ? "black" : "white"}`,
                    height: "5rem",
                    width: "5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "50px",
                  }}
                  onClick={() => (moves[i][j] ? handlePosition(i, j) : handlePawn(i, j))}
                >
                  {board[i][j].name}
                </div>
              );
            })}
          </div>
        ))
      ) : (
        <div style={{ display: "flex", justifyContent: "center", fontSize: "2.5rem" }}>
          {winner === "PLAYER1" ? `Player ${King(0, 0, true).name}  is the winner!` : null}
          {winner === "PLAYER2" ? `Player ${King(0, 0, false).name}  is the winner!` : null}
        </div>
      )}
    </div>
  );
}
