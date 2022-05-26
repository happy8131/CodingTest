/**
 * treeBFS
문제
임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

입력
인자 1 : node
'value', 'children' 속성을 갖는 객체 (Node)
'node.value'는 number 타입
'node.children'은 Node를 요소로 갖는 배열
출력
배열을 리턴해야 합니다.
주의사항
생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
 */

let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  let queue = [node]; // 큐에 들어가는 것부터
  const values = []; // 반환값을 담을 그릇 = values
  while (queue.length > 0) {
    // 인자 node에 뭔가 들어와 있으면,
    const head = queue[0]; // 일단 제일 앞의 노드를 head로 지정
    queue = queue.slice(1); // head는 제외하고, 그 다음 노드부터를  queue array로 한다.

    values.push(head.value); // head.value?? 이렇게 써야 하는군... 그냥 head로 하면 노통과
    // 음.. 여기부터 헷갈리기 시작하는군...
    head.children.forEach((child) => queue.push(child)); // 큐에 하나씩 추가...
  }
  return values;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]
