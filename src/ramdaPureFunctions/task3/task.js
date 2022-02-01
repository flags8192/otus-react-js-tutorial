"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQs = void 0;
const ramda_1 = require("ramda");
const parseQs = (qs) => {
    const f0 = ramda_1.tail;
    const f1 = (0, ramda_1.split)('&');
    const f2 = (0, ramda_1.map)((0, ramda_1.split)('='));
    const f3 = ramda_1.fromPairs;
    // @ts-ignore
    return (0, ramda_1.compose)(f3, f2, f1, f0)(qs);
};
exports.parseQs = parseQs;
//# sourceMappingURL=task.js.map