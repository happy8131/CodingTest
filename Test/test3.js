const board1 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0],
];

const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0],
];

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];

function test3(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const LEN = board.length;
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN; // Out 될 경우
  const isPassed = (y, x) => board[y][x]; //한번 더 방문한 경우
  let Y = 0;
  let X = 0;
  let score = 0;
  for (let i = 0; i < operation.length; i++) {
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;
    if (isValid(Y, X) === false) {
      Y = Y - dY; //원래 위치로 돌려줘야한다
      X = X - dX;
      continue;
    }
    if (isPassed(Y, X) === "passed") {
      // 왔던자리 인 경우 passed인지로 확인
      continue;
    }
    // 위 모든 조건을 통과한 경우
    score += board[Y][X]; // score에 수를 합쳐주고
    board[Y][X] = "passed"; //방문했으니 그 자리에 -1를 넣어서 왔다고 표시하기
  }
  return score;
}
const output1 = test3(board3, "DDRRRUDUDUD");
console.log(output1);

/*
function test3(board, operation) {
      let row = 0, col = 0, sum = 0;

      function boarder(horse) {
        if(horse === 'U' && row - 1 >= 0) return true;
        if(horse === 'D' && row + 1 < board.length) return true; 
        if(horse === 'L' && col - 1 >= 0) return true;
        if(horse === 'R' && col + 1 < board[0].length) return true;

        return false;
      }

      let checked = new Array(board.length).fill(false).map(() => Array(board.length).fill(false));

      for(let i = 0; i < operation.length; i++) {
        if(!boarder(operation[i])) {
          continue;
        }
        else {
          if(operation[i] === 'U') {
            row--;
            if(!checked[row][col]) {
              checked[row][col] = true;
              sum += board[row][col]
            }
          }
          if(operation[i] === 'D') {
            row++;
            if(!checked[row][col]) {
              checked[row][col] = true;
              sum += board[row][col]
            }
          }
          if(operation[i] === 'L') {
            col--;
            if(!checked[row][col]) {
              checked[row][col] = true;
              sum += board[row][col]
            }
          }
          if(operation[i] === 'R') {
            col++;
            if(!checked[row][col]) {
              checked[row][col] = true;
              sum += board[row][col]
            }
          }
        }
      }
      return sum;
    }
 */
