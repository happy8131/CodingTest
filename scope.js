const total = 4;
const coins = [1, 2, 3];

const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.

  const makeChageFrom = (left, idx) => {
    if (left === 0) return 1;

    let cnt = 0;
    // 지금 사용하고 있는 동전부터만 고려한다.
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChageFrom(left - coins[i], i);
      }
    }

    return cnt;
  };
  // 0번째 동전부터 사용한다.
  return makeChageFrom(total, 0);
};

const output = coinChange(total, coins);
