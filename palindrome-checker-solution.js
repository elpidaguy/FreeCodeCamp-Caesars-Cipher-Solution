function palindrome(str) {
  const lowercase = str.toLowerCase();
  const regex = lowercase.match(/[a-z0-9]/g)
  const joinFinal = regex.join("");
  const reverse = regex.reverse().join("");

  return joinFinal === reverse;
}

palindrome("elpidaguy");
