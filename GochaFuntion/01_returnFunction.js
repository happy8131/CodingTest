// 문제
// 'Hello HoF!' 리턴하는 함수를 리턴해야 합니다.

// 입력
// 없음
// 출력
// 함수를 리턴해야 합니다.
// 주의 사항
// 리턴하는 함수의 입력값은 없습니다.

function returnFunction() {
  // TODO: 여기에 코드를 작성합니다.
  return function () {
    return "Hello HoF!";
  };
}

let output = returnFunction();
console.log(output()); // --> 'Hello HoF!'
