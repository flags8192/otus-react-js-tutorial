"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
test('team to team', () => {
    const originalTeam = Object.freeze({
        size: 15,
        name: 'Tampa Bay Roosters',
        league: 'Minor',
    });
    const expectedTeam = {
        name: 'New York Badgers',
        league: 'Minor',
        roster: 25,
    };
    expect((0, task_1.originalTeamToExpectedTeam)(originalTeam)).toEqual(expectedTeam);
});
//# sourceMappingURL=task.test.js.map