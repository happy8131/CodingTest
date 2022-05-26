/**
 * 연결된 정점들
문제
방향이 없는 간선들의 목록이 주어질 때, 연결된 정점의 컴포넌트(그룹들)가 몇 개인지 반환하는 함수를 작성하세요.

입력
인자 1: edges
2차원 Array 타입을 요소로 갖는 시작과 도착 정점이 담겨있는 배열들을 담고 있는 목록 (2차원 배열, 정수 요소)
ex) [[0, 1], [1, 2], [3, 4]]
출력
Number 타입을 리턴해야 합니다.
연결된 정점의 컴포넌트의 수를 숫자로 반환합니다.
주의 사항
주어진 간선은 무향입니다.
[1, 2] 는 정점 1에서 정점 2로도 갈 수 있으며, 정점 2에서 정점 1로도 갈 수 있습니다.
입출력 예시
const result = connectedVertices([
	[0, 1],
	[2, 3],
	[4, 5],
]);
console.log(result); // 3
해당 정점들은 아래와 같은 모양을 하고 있습니다.
0 - 1
2 - 3
4 - 5
 */

function connectedVertices(edges) {
  // TODO: 여기에 코드를 작성합니다.

  // reduce를 이용해 최대 버텍스를 탐색하는 함수 작성
  // maxVertex = 5 (입출력 예시 대입)
  const maxVertex = edges.reduce((a, c) => {
    const bigger = Math.max(...c);
    if (bigger > a) {
      return bigger;
    } else {
      return a;
    }
  }, 0); // 기본값 : 0
  // 혹은 const maxVertex = Math.max(...edges.flat());

  // 최대 버텍스의 길이만큼 인접 리스트 생성
  const adjList = {};
  for (let i = 0; i <= maxVertex; i++) {
    adjList[i] = [];
  }

  // adjList = {
  //  "0": [],
  //  "1": [],
  //  "2": [],
  //  "3": [],
  //  "4": [],
  //  "5": []
  // }

  // 무향 그래프이므로 쌍방으로 연결해준다
  for (let i = 0; i < edges.length; i++) {
    adjList[edges[i][0]].push(edges[i][1]);
    adjList[edges[i][1]].push(edges[i][0]);
  }
  // adjList = {
  //  "0": [1],
  //  "1": [0],
  //  "2": [3],
  //  "3": [2, 4, 5],
  //  "4": [3],
  //  "5": [3]
  // }
  // 인접 리스트 작성

  const visited = {}; // 방문한 버텍스 표시
  let count = 0; // 결과 출력을 위한 변수

  for (let vertex = 0; vertex <= maxVertex; vertex++) {
    // 버텍스 순회 (0 ~ 5)
    if (!visited[vertex]) {
      // 만약 방문한 적이 없는 정점이라면
      dfs(adjList, vertex, visited); // 순회 (dfs or bfs)
      count++; // 카운트 증가
    }
  }
  return count; // 최종 결과
}

function bfs(adjList, vertex, visited) {
  const queue = [vertex]; // 큐 생성
  visited[vertex] = true; // 해당 vertex 체크
  // 만약 vertex가 3이라면
  // queue = [3]

  while (queue.length > 0) {
    const cur = queue.shift();
    // cur = 3
    // queue = []
    for (let i = 0; i < adjList[cur].length; i++) {
      if (!visited[adjList[cur][i]]) {
        queue.push(adjList[cur][i]);
        // queue = [4]
        // queue = [4, 5]
        visited[adjList[cur][i]] = true;
      }
    }
  }
}

function dfs(adjList, vertex, visited) {
  visited[vertex] = true; // 먼저 해당 vertex를 체크한다.
  for (let i = 0; i < adjList[vertex].length; i++) {
    if (!visited[adjList[vertex][i]]) {
      // 만약 vertex가 3이라면
      // adjList[3][1] = 4
      // adjList[3][2] = 5
      dfs(adjList, adjList[vertex][i], visited);
    }
  }
}

const result = connectedVertices([
  [0, 1],
  [2, 3],
  [3, 4],
  [3, 5],
]);
console.log(result); // 2
//해당 정점들은 아래와 같은 모양을 하고 있습니다.

//0 - 1
//2 - 3 - 4
//    \
//    5
