const test = require("node:test");
const assert = require("node:assert");

const { changeElem } = require("./02.js");

test("The function returns a new array", () => {
    assert.deepStrictEqual(changeElem([3, 1, 6], 5), [15, 5, 30]);
    assert.deepStrictEqual(changeElem([4, 8, 10], 2), [8, 16, 20]);
    assert.deepStrictEqual(changeElem([2, 4, 6], 3), [6, 12, 18]);
});

