"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toISODateTime = exports.isValidISODateTime = exports.ISODateTimeBrand = void 0;
var parseISO_1 = require("date-fns/parseISO");
var isValid_1 = require("date-fns/isValid");
var ISODateTimeBrand;
(function (ISODateTimeBrand) {
    ISODateTimeBrand["_"] = "";
})(ISODateTimeBrand = exports.ISODateTimeBrand || (exports.ISODateTimeBrand = {}));
// Stolen from this Stack Overflow Answer:
// https://stackoverflow.com/a/37563868/2093626
// This validates time not only dates as most of the other libraries
var ISO8601FullRegex = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
var isValidISODateTime = function (s) {
    return s.match(ISO8601FullRegex) !== null && (0, isValid_1.default)((0, parseISO_1.default)(s));
};
exports.isValidISODateTime = isValidISODateTime;
var toISODateTime = function (d) {
    if (typeof d === 'string') {
        if ((0, exports.isValidISODateTime)(d)) {
            return d;
        }
        throw new Error("toValidISOString() Invalid String Error: ".concat(d));
    }
    var generatedISOString = d.toISOString();
    if (!(0, exports.isValidISODateTime)(generatedISOString)) {
        throw new Error("toValidISOString() Invalid Date Error: ".concat(d));
    }
    return generatedISOString;
};
exports.toISODateTime = toISODateTime;
//# sourceMappingURL=ISODateTime.js.map