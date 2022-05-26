const N = 3;
const M = 2;

const visited = new Array(N);
let output = [];

let arr = [];
function dfs(cnt) {
  if (cnt === M) {
    arr.push(parseInt(output.join("")));

    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);

    dfs(cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(arr);


function test2 (n, m) {
  // TODO: 여기에 코드를 작성하세요.

  const visited = new Array(n)
  let output = [];
  let arr = [];

  function dfs(cnt){
    if(cnt === m){
      arr.push(parseInt(output.join("")));

      return;
    }
  

  for(let i = 0; i < n; i++){
    if(visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1)
 
    dfs(cnt +1)
    output.pop();
    visited[i] = false;
    }
  }
  dfs(0)
  return arr;
};