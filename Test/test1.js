function test1(A, B) {
  // TODO: 여기에 코드를 작성하세요.
  let sum = 0;
  if (A > B) {
    for (let i = 0; i < A; i++) {
      if (A % i === 0 && B % i === 0) {
        sum = i;
      }
    }
  } else {
    for (let i = 0; i < B; i++) {
      if (A % i === 0 && B % i === 0) {
        sum = i;
      }
    }
  }
  return sum;
}
