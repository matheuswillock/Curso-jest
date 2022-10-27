const calc = require('./calc')

describe('should return the calculation between a and b', () => {

  const a = 10;
  const b = 20;

  test(`should return the sum`, () => {

    const sum = calc.sum(a, b)

    expect(sum).toBe(30)

  })

  test(`should return the subtraction`, () => {

    const sub = calc.subtraction(10, 20)

    expect(sub).toBe(-10)

  })

  test(`should return the multiplication`, () => {

    const multi = calc.multiplication(10, 20)

    expect(multi).toBe(200)

  })

  test(`should return the division`, () => {

    const div = calc.division(10, 20)

    expect(div).toBe(0.5)

  })
})
