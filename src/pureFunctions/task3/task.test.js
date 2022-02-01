"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('parseQs', () => {
    const qs = '?page=2&pageSize=10&total=205&somethingElse=value';
    expect((0, task_1.parseQs)(qs)).toEqual({
        page: '2',
        pageSize: '10',
        total: '205',
        somethingElse: 'value',
    });
});
//# sourceMappingURL=task.test.js.map