function main() {
  const daily = [128, 97, 121, 123, 98, 97, 105];

  console.log(maxProfit(daily));
}

function maxProfit(daily) {
  let d1 = 0;
  let d2 = 0;

  let result = {
    index: null,
    profit: 0
  };

  for (let i = 0; i < daily.length; i++) {
    if (i === daily.length - 1) {
      d1 = daily[i];
      d2 = daily[0];
    } else {
      d1 = daily[i];
      d2 = daily[+1];
    }

    if (d2 > d1 && d2 - d1 > result.profit) {
      result.index = i;
      result.profit = d2 - d1;
    }

  }

  return result;

}

main();