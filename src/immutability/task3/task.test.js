"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('team to team deep', () => {
    const originalTeam = Object.freeze({
        name: 'Tampa Bay Roosters',
        captain: {
            name: 'Bryan Downey',
            age: 27,
        },
    });
    const expectedTeam = {
        name: 'Tampa Bay Roosters',
        captain: {
            name: 'Bryan Downey',
            age: 28,
        },
    };
    expect((0, task_1.originalTeamToExpectedTeam)(originalTeam)).toEqual(expectedTeam);
});
//# sourceMappingURL=task.test.js.map