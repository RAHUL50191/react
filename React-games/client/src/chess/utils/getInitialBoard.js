import Bishop from "../pieces/Bishop";
import King from "../pieces/King";
import Knight from "../pieces/Knight";
import N from "../pieces/Null";
import Pawn from "../pieces/Pawn";
import Queen from "../pieces/Queen";
import Rock from "../pieces/Rock";

export default function getInitialBoard() {
  const player = true;
  return Array(8)
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
    );
}
