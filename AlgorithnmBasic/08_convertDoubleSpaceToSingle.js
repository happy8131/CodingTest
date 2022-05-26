// convertDoubleSpaceToSingle
// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// string 타입의 문자열
// 주의 사항
// 두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  let len = str.replace(/  /g, " ");
  return len;
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
