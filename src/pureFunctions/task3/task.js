"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQs = void 0;
const parseQs = (qs) => qs
    .slice(1)
    .split('&')
    .map((v) => v.split('='))
    .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});
exports.parseQs = parseQs;
//# sourceMappingURL=task.js.map