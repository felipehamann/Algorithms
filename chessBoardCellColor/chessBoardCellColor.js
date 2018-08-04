//Check out My YouTube Channel https://www.YouTube.com/CodingTutorials360
//Video Walkthrough - https://www.youtube.com/watch?v=Wgn50_xkAG4
function chessBoardCellColor(cell1, cell2) {
  const board = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8
  };
  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}