const {Quantity} = require("./quantity")
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, INCH, FOOT, YARD, FURLONG, MILE} = require("./unit")



describe('quantity', () => {
  describe('is equal' , () => {
    test('a tbs is equal to a tbs', () => {
      expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
    });
    test('a tbs is not equal to 2 tbs', () => {
        expect(new Quantity(1, TABLESPOON).isEqual(new Quantity(2, TABLESPOON))).toBe(false)
      });
      test('a tbs is not equal to a tsp', () => {
        expect(new Quantity(1, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(false)
      });
      test('3 tsp is equal to a tbs', () => {
        expect(new Quantity(3, TEASPOON).isEqual(new Quantity(1, TABLESPOON))).toBe(true)
      });
      test('1 oz is equal to 2 tbs', () => {
        expect(new Quantity(1, OUNCE).isEqual(new Quantity(2, TABLESPOON))).toBe(true)
      });
      test('1 cup is equal to 8 oz', () => {
        expect(new Quantity(1, CUP).isEqual(new Quantity(8, OUNCE))).toBe(true)
      });
      test('1 pint is equal to 2 cups', () => {
        expect(new Quantity(1, PINT).isEqual(new Quantity(2, CUP))).toBe(true)
      });
      test('1 quart is equal to 2 pints', () => {
        expect(new Quantity(1, QUART).isEqual(new Quantity(2, PINT))).toBe(true)
      });
      test('1 gallon is equal to 4 quarts', () => {
        expect(new Quantity(1, GALLON).isEqual(new Quantity(4, QUART))).toBe(true)
      });
      test('32 tablespoons is equal to 2 cups', () => {
        expect(new Quantity(32, TABLESPOON).isEqual(new Quantity(2, CUP))).toBe(true)
      });
      test('32 tablespoons is equal to 2 cups', () => {
        expect(new Quantity(2, CUP).isEqual(new Quantity(32, TABLESPOON))).toBe(true)
      });
      test('1 inch is equal to 1 inch', () => {
        expect(new Quantity(1, INCH).isEqual(new Quantity(1, INCH))).toBe(true)
      });
      test('12 inches is equal to 1 foot', () => {
        expect(new Quantity(12, INCH).isEqual(new Quantity(1, FOOT))).toBe(true)
      });
      test('3 feet is equal to 1 yard', () => {
        expect(new Quantity(3, FOOT).isEqual(new Quantity(1, YARD))).toBe(true)
      });
      test('220 yards is equal to 1 furlong', () => {
        expect(new Quantity(220, YARD).isEqual(new Quantity(1, FURLONG))).toBe(true)
      });
      test('8 furlongs is equal to 1 mile', () => {
        expect(new Quantity(8, FURLONG).isEqual(new Quantity(1, MILE))).toBe(true)
      });
      test('8 furlongs is not equal to 3 feet', () => {
        expect(new Quantity(8, FURLONG).isEqual(new Quantity(3, FOOT))).toBe(false)
      });
      test('1 inch is not equal to 1 teaspoon', () => {
        expect(new Quantity(1, INCH).isEqual(new Quantity(1, TEASPOON))).toBe(false)
      });
  })  
  describe('add' , () => {
    test('1tsp add 1tsp is 2tsp', () => {
      expect(new Quantity(1, TEASPOON).add(new Quantity(1, TEASPOON)).isEqual(new Quantity(2, TEASPOON))).toBe(true)
    });
    test('1tsp add 2tsp is 3tsp', () => {
      expect(new Quantity(1, TEASPOON).add(new Quantity(2, TEASPOON)).isEqual(new Quantity(3, TEASPOON))).toBe(true)
    });
    test('1tbl add 1tsp is 4tsp', () => {
      expect(new Quantity(1, TABLESPOON).add(new Quantity(1, TEASPOON)).isEqual(new Quantity(4, TEASPOON))).toBe(true)
    });
    test('4 quarts add 1 gallon is 32 cups or 16 pints', () => {
      expect(new Quantity(4, QUART).add(new Quantity(1, GALLON)).isEqual(new Quantity(32, CUP))).toBe(true)
      expect(new Quantity(4, QUART).add(new Quantity(1, GALLON)).isEqual(new Quantity(16, PINT))).toBe(true)
    });
    test('12 inches add 2 feet is 1 yard', () => {
      expect(new Quantity(12, INCH).add(new Quantity(2, FOOT)).isEqual(new Quantity(1, YARD))).toBe(true)
    });
    test('1 inch add 1 teaspoon throws an error', () => {
      expect(() => new Quantity(1, INCH).add(new Quantity(1, TEASPOON))).toThrow("These quantities can't be added.")
    });
    test('12 quarts add 4 yards throws an error', () => {
      expect(() => new Quantity(12, QUART).add(new Quantity(4, YARD))).toThrow("These quantities can't be added.")
    });
  })
});

