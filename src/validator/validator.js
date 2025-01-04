export function isValid(input) {
    // переворачиваем введенный номер и приводим к числовому виду
    const digits = input.toString().split("").reverse().map(Number);
    let sum = 0;
    let checksum = digits[0];
    let isSecond = true;
  
    // проходимся по числу в обратном порядке, кроме первой цифры (checksum)
    for (let i = 1; i < digits.length; i++) {
      let digit = digits[i];
  
      // удваиваем значение каждой второй цифры, начиная с самой правой цифры
      if (isSecond) {
        digit *= 2;
        // если полученное значение больше 9, вычитаем 9 из него, чтобы получить сумму цифр в диапазоне от 0 до 9
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit; // добавляем полученное значение к общей сумме
      isSecond = !isSecond; // после каждой итерации инвертируем флаг на противоположное значение
    }
    return 10 - (sum % 10) == checksum; // сравниваем полученную контрольную сумму с последней цифрой номера карты
}