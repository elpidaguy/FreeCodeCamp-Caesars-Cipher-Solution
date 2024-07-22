function telephoneCheck(str) {
  const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))\s?-?\d{3}\s?-?\d{4}$/;
  const res = regExp.test(str);
  return res;
}

telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
