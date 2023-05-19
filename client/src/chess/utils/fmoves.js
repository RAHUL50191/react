export default function fmoves() {
  return Array(8)
    .fill()
    .map((row, i) =>
      Array(8)
        .fill()
        .map((col, j) => {
          return false;
        })
    );
}
