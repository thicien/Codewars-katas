function numberToEnglish(num) {
  
  if (!Number.isInteger(num) || num < 0 || num > 99999) return "";
  if (num === 0) return "zero";

  const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  ];
  const teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                 "sixteen", "seventeen", "eighteen","nineteen",
  ];
  
  const tens = [
    "",
    "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
  ];

    function convertHundreds(n) {
    let words = "";

    if (n >= 100) {
      words += ones[Math.floor(n / 100)] + " hundred";
      n %= 100;
      if (n > 0) words += " ";
    }

    if (n >= 20) {
      words += tens[Math.floor(n / 10)];
      n %= 10;
      if (n > 0) words += " " + ones[n];
    } else if (n >= 10) {
      words += teens[n - 10];
    } else if (n > 0) {
      words += ones[n];
    }
    return words.trim();
  }
  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;

  let result = "";

  if (thousands > 0) {
    result += convertHundreds(thousands) + " thousand";
    if (remainder > 0) result += " ";
  }
  if (remainder > 0) {
    result += convertHundreds(remainder);
  }
  return result.trim();
}
console.log(numberToEnglish(0));
console.log(numberToEnglish(45));
console.log(numberToEnglish(3476));
console.log(numberToEnglish(32987));
console.log(numberToEnglish(200980));
console.log(numberToEnglish(1000));