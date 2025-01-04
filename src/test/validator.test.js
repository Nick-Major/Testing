import { isValid } from "../validator/validator";

test.each([
    [4155088469983464, true],
    [6011605960422137, true],
  ])("card number is valid", (number) => {
    expect(isValid(number)).toBe(true);
  });
  
  test.each([
    [4155088469983465, false],
    [6011605960422138, false],
  ])("card number is invalid", (number) => {
    expect(isValid(number)).toBe(false);
});