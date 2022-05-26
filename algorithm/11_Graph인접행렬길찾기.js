/**
 * 인접 행렬 길찾기
문제
주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환해야 합니다.

입력
인자 1: matrix
Array 타입을 요소로 갖는 인접 행렬이 담긴 2차원 배열
인자 2: from
Number 타입의 시작 정점
인자 3: to
Number 타입의 도착 정점
출력
boolean 타입을 리턴해야 합니다.

 */

function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.

  //길을 하나 만들건데,, 방문했는지에 길입니다.
  let path = new Array(matrix.length).fill(false);
  // path = [false, false, false, false]

  let location = [from]; // [0] 길이는 1;
  path[from] = true;
  // [true, false, false, false]

  while (location.length > 0) {
    //길이가 0이 될때까지
    // 현재위치의 변수
    let now = location.shift(); // 2
    //base case
    if (now === to) return true; //to = 2

    for (let i = 0; i < matrix.length; i++) {
      // 두가지 조건이 설입되어야한다.
      // 1번 path[i] ===false이고 2번 matrix[now][i] === 1
      if (matrix[now][i] === 1 && !path[i]) {
        path[i] === true;
        location.push(i);
      }
    }
  }
  return false;
}

const result = getDirections(
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ],
  0,
  2
);
console.log(result); // true
// 정점 0에서 2로 가는 길이 존재하는지 확인합니다.
// 0 --> 1 로 가는 간선이 존재하고, 1 --> 2 로 가는 간선이 존재하기 때문에 true를 반환합니다.

const result2 = getDirections(
  [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
  ],
  1,
  4
);
console.log(result); // false

// 정점 1에서 4로 가는 길이 존재하는지 확인합니다.
// 1 --> 3,
// 3 --> 1 (정점 1을 다녀왔으니 다시 돌아가지 않습니다),
// 3 --> 2,
// 2 --> 1 (정점 1을 다녀왔으니 다시 돌아가지 않습니다)
// ...으로, 4에 도달할 수 없습니다.
