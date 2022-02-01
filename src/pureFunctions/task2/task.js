"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQs = void 0;
const createQs = (o) => Object.keys(o).reduce((a, c, i) => `${a}${(i && '&') || ''}${c}=${o[c]}`, '?');
exports.createQs = createQs;
//# sourceMappingURL=task.js.map