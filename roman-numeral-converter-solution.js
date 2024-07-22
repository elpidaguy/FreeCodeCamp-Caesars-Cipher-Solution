
function convertToRoman(num) {

const arabicRomanList = {
   1000: 'M',
   900: 'CM',
   500: 'D',
   400: 'CD',
   100: 'C',
   90: 'XC',
   50: 'L',
   40: 'XL',
   10: 'X',
   9: 'IX',
   5: 'V',
   4: 'IV',
   1: 'I'   
 };

let romanResult = '';
 const ANum = Object.keys(arabicRomanList).reverse();
//  console.log(ANum);

 for(let i=0; i< ANum.length; i++) {
  //  console.log(ANum[i])
  //  console.log(num);
   while (ANum[i] <= num) {
    //  console.log(arabicRomanList[ANum[i]])
    romanResult = romanResult + arabicRomanList[ANum[i]];
     num = num - ANum[i]
   }
 }
 return romanResult;
}

convertToRoman(46);
