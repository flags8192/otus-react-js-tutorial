"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalTeamToExpectedTeam = void 0;
const originalTeamToExpectedTeam = (team) => ({
    ...team,
    captain: { ...team.captain, age: 28 },
});
exports.originalTeamToExpectedTeam = originalTeamToExpectedTeam;
//# sourceMappingURL=task.js.map