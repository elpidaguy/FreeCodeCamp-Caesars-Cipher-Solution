function checkCashRegister(price, cash, cid) {

let currency = {
    "ONE HUNDRED": 100, 
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

  let totalFunds = 0;
  cid.forEach(x => {
    totalFunds += x[1];
  })

  totalFunds = totalFunds.toFixed(2);
  // console.log(totalFunds)
  let returnChange = cash-price;

  let newChange = [];

  // console.log(returnChange)

  if (totalFunds < returnChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (totalFunds === returnChange.toFixed(2)) {
    return {status: "CLOSED", change: [...cid]};
  } else {
    let newCid = cid.reverse()
    for (let item of newCid) {
      //console.log(item)
      //item[1] = item[1].toFixed(2); // get 2 decimal round

      let unitCost = 0;
      while(item[1] > 0 && returnChange >= currency[item[0]]){
        unitCost += currency[item[0]];
        item[1] -= currency[item[0]];
        returnChange -= currency[item[0]];
        returnChange = returnChange.toFixed(2)
      }

      if (unitCost > 0) {
        newChange.push([item[0], unitCost]);
      }
    }
    console.log(newChange)

    if (returnChange > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  }


  return {status: "OPEN", change: newChange}
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
