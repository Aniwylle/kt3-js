const test = require("node:test");
const assert = require("node:assert");

const { reverseIndex } = require("./04.js");

test("Reverse index of array", () => {
    assert.deepStrictEqual(reverseIndex([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    assert.deepStrictEqual(reverseIndex(["hello", "world"]), ["world", "hello"]);
    assert.deepStrictEqual(reverseIndex([]), []);
    assert.deepStrictEqual(reverseIndex([123]), [123]);
});
