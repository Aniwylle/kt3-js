const test = require("node:test");
const assert = require("node:assert");

const { devisionBySeven } = require("./01.js");

test("The number is divided by seven", () => {
    assert.strictEqual(devisionBySeven(14), true);
    assert.strictEqual(devisionBySeven(21), true);
    assert.strictEqual(devisionBySeven(77), true);
  });

  test("The number is not divided by seven", () => {
    assert.strictEqual(devisionBySeven(13), false);
    assert.strictEqual(devisionBySeven('Arnold'), false);
    assert.strictEqual(devisionBySeven(33), false);
  });
  