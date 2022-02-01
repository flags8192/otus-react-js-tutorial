"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('array to array', () => {
    const originalArray = Object.freeze([1, 2, 3, 4]);
    const expectedArray = ['two', 3, 4, 5];
    expect((0, task_1.originalArrayToExpectedArray)(originalArray)).toEqual(expectedArray);
});
//# sourceMappingURL=task.test.js.map