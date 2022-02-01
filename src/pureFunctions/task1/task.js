"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopName = void 0;
const getTopName = (t = []) => t.sort((a, b) => b.score - a.score)[0]?.name;
exports.getTopName = getTopName;
//# sourceMappingURL=task.js.map