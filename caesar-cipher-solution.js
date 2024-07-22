function rot13(str) {
  const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphArr = alph.split('');
  // console.log(alphArr);

  let inpArr = str.split('');

  let op = '';

  inpArr.forEach((x) => {
    if (!alph.includes(x)){
      op += x;
    } else {
      const index = alphArr.indexOf(x)+1;

      // console.log(index);

      if ((parseInt(index) + 13) > 26) {
        const newIndex = (parseInt(index)+13)-26;
        // console.log(newIndex)
        op += alphArr[newIndex-1];
      } else {
        const newIndex = parseInt(index) + 13;
        op += alphArr[newIndex-1];
      }
    }
    // console.log(index)
  })

console.log(op)
  return op;
}

// rot13("R");
rot13("SERR PBQR PNZC");
