function numberToWords(num) {
  if (!Number.isInteger(num) || num < 0 || num > 99999) return "";

  const ones = [
    "zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
  ];

  const tens = [
    "", "", "twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

  function convertBelowThousand(n) {
    let result = "";
    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + " hundred";
      n %= 100;
      if (n > 0) result += " ";
    }
    if (n >= 20) {
      result += tens[Math.floor(n / 10)];
      if (n % 10 !== 0) result += " " + ones[n % 10];
    } else if (n > 0) {
      result += ones[n];
    }
    return result;
  }

  if (num === 0) return "zero";

  let words = "";

  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    words += convertBelowThousand(thousands) + " thousand";
    const remainder = num % 1000;
    if (remainder > 0) words += " " + convertBelowThousand(remainder);
  } else {
    words += convertBelowThousand(num);
  }

  return words.trim();
}
console.log(numberToWords(0));       // "zero"
console.log(numberToWords(27));      // "twenty seven"
console.log(numberToWords(100));     // "one hundred"
console.log(numberToWords(7012));    // "seven thousand twelve"
console.log(numberToWords(99205));   // "ninety nine thousand two hundred five"
console.log(numberToWords(123456));  // "" (out of range)
