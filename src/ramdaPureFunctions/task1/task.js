"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopName = void 0;
const ramda_1 = require("ramda");
const getTopName = (teams) => {
    const getTeamName = (team) => team.name;
    const sortTeam = (0, ramda_1.sort)((a, b) => b.score - a.score);
    const getTopTeam = (a) => a[0];
    return (0, ramda_1.compose)(getTeamName, getTopTeam, sortTeam)(teams);
};
exports.getTopName = getTopName;
//# sourceMappingURL=task.js.map