"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('createQs', () => {
    const qsObj = {
        page: '2',
        pageSize: '10',
        total: '205',
        somethingElse: 'value',
    };
    expect((0, task_1.createQs)(qsObj)).toBe('?page=2&pageSize=10&total=205&somethingElse=value');
});
//# sourceMappingURL=task.test.js.map