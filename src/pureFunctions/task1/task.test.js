"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('getTopName', () => {
    const teams = [
        { name: 'Lions', score: 5 },
        { name: 'Tigers', score: 4 },
        { name: 'Bears', score: 6 },
        { name: 'Monkeys', score: 2 },
    ];
    expect((0, task_1.getTopName)(teams)).toBe('Bears');
});
//# sourceMappingURL=task.test.js.map