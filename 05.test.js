const test = require("node:test");
const assert = require("node:assert");

const { checkElem } = require("./05.js");

test("Check if element exists in array based on the callback function", () => {
    assert.strictEqual(checkElem([1, 2, 3, 4], (elem) => elem == 3), true);
    assert.strictEqual(checkElem([1, 2, 4, 5], (elem) => elem == 3), false);
    assert.strictEqual(checkElem([], (elem) => elem == 3), false);
    assert.strictEqual(checkElem([1, 2, 3, 4], (elem) => elem % 2 == 0), true);
});
