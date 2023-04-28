function convertToRoman(num) {
    let romanNumeral = '';
  
    if (num >= 1000) {
        
      romanNumeral += 'M'.repeat(Math.floor(num / 1000));
      num %= 1000;
    }
  
    if (num >= 900) {
      romanNumeral += 'CM';
      num -= 900;
    }
  
    if (num >= 500) {
      romanNumeral += 'D';
      num -= 500;
    }
  
    if (num >= 400) {
      romanNumeral += 'CD';
      num -= 400;
    }
  
    if (num >= 100) {
      romanNumeral += 'C'.repeat(Math.floor(num / 100));
      num %= 100;
    }
  
    if (num >= 90) {
      romanNumeral += 'XC';
      num -= 90;
    }
  
    if (num >= 50) {
      romanNumeral += 'L';
      num -= 50;
    }
  
    if (num >= 40) {
      romanNumeral += 'XL';
      num -= 40;
    }
  
    if (num >= 10) {
      romanNumeral += 'X'.repeat(Math.floor(num / 10));
      num %= 10;
    }
  
    if (num >= 9) {
      romanNumeral += 'IX';
      num -= 9;
    }
  
    if (num >= 5) {
      romanNumeral += 'V';
      num -= 5;
    }
  
    if (num >= 4) {
      romanNumeral += 'IV';
      num -= 4;
    }
  
    if (num >= 1) {
      romanNumeral += 'I'.repeat(num);
    }
  
    return romanNumeral;
  }
  

  console.log(convertToRoman(2000));
