const { add } = require("../arithmetica")

test(' 2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
  });

    test(' 4444444 + 6666666 is equal to 5', () => {
        expect(add(4444444,6666666)).toBe(11111110);
    });