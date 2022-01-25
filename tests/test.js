// const returnSillyText = require("./../sillyText.js");
import returnSillyText from "./../sillyText.js";

const EXPECTED_TEXT = "I'm a silly string";

beforeEach(() => {});

describe("", () => {
  it("Funkcja zwraca silly string", async () => {
    const text = returnSillyText();
    expect(text).toBe(EXPECTED_TEXT);
  });
});
