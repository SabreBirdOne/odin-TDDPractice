import analyzeArray from "./analyzeArray";

test("analyzeArray test 1", () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("analyzeArray one element", () => {
    expect(analyzeArray([9]))
    .toStrictEqual({
        average: 9,
        min: 9,
        max: 9,
        length: 1
    })
})