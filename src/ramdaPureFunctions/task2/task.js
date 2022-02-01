"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQs = void 0;
const ramda_1 = require("ramda");
const createQs = (qsObj) => {
    const f0 = ramda_1.toPairsIn;
    const f1 = (o) => o.map(([k, v]) => `${k}=${v}`);
    const f2 = (0, ramda_1.join)('&');
    const f3 = (0, ramda_1.concat)('?');
    return (0, ramda_1.compose)(f3, f2, f1, f0)(qsObj);
};
exports.createQs = createQs;
//# sourceMappingURL=task.js.map