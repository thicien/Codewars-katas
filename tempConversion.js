function convertTemp(temp, from_scale, to_scale) {
  //..
    if (from_scale === to_scale) return Math.round(temp);
  
    function toCelsius(t, scale) {
        switch (scale) {
            case "C":  return t;
            case "F":  return (t - 32) * 5 / 9;
            case "K":  return t - 273.15;
            case "R":  return (t - 491.67) * 5 / 9;
            case "De": return 100 - t * 2 / 3;
            case "N":  return t * 100 / 33;
            case "Re": return t * 5 / 4;
            case "Ro": return (t - 7.5) * 40 / 21;
            default: throw new Error("Invalid from_scale");
        }
    }
  
    function fromCelsius(t, scale) {
        switch (scale) {
            case "C":  return t;
            case "F":  return t * 9 / 5 + 32;
            case "K":  return t + 273.15;
            case "R":  return (t + 273.15) * 9 / 5;
            case "De": return (100 - t) * 3 / 2;
            case "N":  return t * 33 / 100;
            case "Re": return t * 4 / 5;
            case "Ro": return t * 21 / 40 + 7.5;
            default: throw new Error("Invalid to_scale");
        }
    }
    const celsius = toCelsius(temp, from_scale);
    const result = fromCelsius(celsius, to_scale);
    return Math.round(result);
}
console.log(convertTemp(100, "C", "F"));   
console.log(convertTemp(40, "Re", "C"));    
console.log(convertTemp(60, "De", "F"));  
console.log(convertTemp(373.15, "K", "N")); 
console.log(convertTemp(666, "K", "K"));