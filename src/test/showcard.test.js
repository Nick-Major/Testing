import showCard from "../showcard/showcard";

test("must choose a card", () => {
    expect(showCard(4024007183645802)).toBe("Visa");
    expect(showCard(5416768397601955)).toBe("MasterCard");
    expect(showCard(378594162396515)).toBe("AmericanExpress");
    expect(showCard(6011052882395226)).toBe("Discover");
    expect(showCard(3536044822291618)).toBe("JCB");
    expect(showCard(30284216703813)).toBe("DinersClub");
    expect(showCard(2201382000000013)).toBe("Mir");
  });
  
  test("should abort validation if the card number is invalid", () => {
    expect(showCard(1234567890123456)).toBe(undefined);
});