const test = require("node:test");
const assert = require("node:assert");

const { sumElems } = require("./03.js");

test("return the sum of the elements", () => {
    assert.strictEqual(sumElems(['5', '2', '1']), 8);
    assert.strictEqual(sumElems(['1', '1', '1']), 3); 
    assert.strictEqual(sumElems(['0', '123', '3']), 126); 
});
