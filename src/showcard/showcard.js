export default function showCard(input) {
    const number = input.toString().split("").map(Number);

    if (number[0] === 4) {
        return "Visa";
    } else if (number[0] === 5 && number[1] >= 1 && number[1] <= 5) {
        return "MasterCard";
    } else if ((number[0] === 3 && number[1] === 4) || number[1] === 7) {
        return "AmericanExpress";
    } else if (number[0] === 6 && number[1] >= 0 && number[1] <= 5) {
        return "Discover";
    } else if (
        number[0] === 3 &&
        number[1] === 5 &&
        number[2] >= 2 &&
        number[2] <= 8
    ) {
        return "JCB";
    } else if (
        number[0] === 3 &&
        number[1] === 0 &&
        number[2] >= 0 &&
        number[2] <= 5
    ) {
        return "DinersClub";
    } else if (number[0] === 2 && number[1] === 2) {
        return "Mir";
    }
  return;
}
