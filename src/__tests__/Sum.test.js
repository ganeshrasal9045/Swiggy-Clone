import { Sum } from "../components/Sum"


test("sum function should calculate the sum of two numbers", () => {
    const result = Sum(2,5);

    //Assertion
    expect(result).toBe(7);
})