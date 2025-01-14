document.getElementById("convert-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("number").value;
    const outputElement = document.getElementById("output");
  
    // Check for invalid input
    if (numberInput === "") {
      outputElement.textContent = "Please enter a valid number";
      return;
    }
  
    const number = parseInt(numberInput);
  
    if (number < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
      return;
    }
  
    if (number >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
      return;
    }
  
    outputElement.textContent = convertToRoman(number);
  });
  
  function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ];
  
    let result = "";
  
    for (const numeral of romanNumerals) {
      while (num >= numeral.value) {
        result += numeral.symbol;
        num -= numeral.value;
      }
    }
  
    return result;
  }