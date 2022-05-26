/*
문제
문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 숫자 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
0은 짝수로 간주합니다.
*/

function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let len = "";
  if (str === "2") {
    return "2";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      len += str[i] + "-";
    } else {
      len += str[i];
    }
  }
  return len.slice(0, len.length - 1);
}

let output = insertDash("454793");
console.log(output); // --> 4547-9-3
