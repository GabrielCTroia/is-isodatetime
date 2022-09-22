"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toISOMonth = exports.isValidISOMonth = exports.ISOMonthBrand = exports.toISOYear = exports.isValidISOYear = exports.ISOYearBrand = exports.toISODate = exports.isValidISODate = exports.ISODateBrand = void 0;
var parseISO_1 = require("date-fns/parseISO");
var isValid_1 = require("date-fns/isValid");
// The ISO 8601 Date format
//  See https://en.wikipedia.org/wiki/ISO_8601
// This idea is 100% borrowed from this article:
//  https://spin.atomicobject.com/2017/06/19/strongly-typed-date-string-typescript/
// It works pretty nice o be able to take a string and brand with a nominal type!
// Also see https://basarat.gitbooks.io/typescript/docs/tips/nominalTyping.html
var ISODateBrand;
(function (ISODateBrand) {
    ISODateBrand["_"] = "";
})(ISODateBrand = exports.ISODateBrand || (exports.ISODateBrand = {}));
/**
 * This function checks if the given string is of the ISO Format (yyyy-mm-dd)
 * and if the actual date is a valid one - i.e. not 2014-45-99 or even not 2014-02-31
 *
 * @param s
 */
var isValidISODate = function (s) {
    return s.match(/^\d{4}-\d{2}-\d{2}$/) !== null && (0, isValid_1.default)((0, parseISO_1.default)(s));
};
exports.isValidISODate = isValidISODate;
/**
 * This maintains ISO Timezone
 *
 * @param date
 */
function toISODate(date) {
    if (typeof date === "string") {
        if ((0, exports.isValidISODate)(date)) {
            return date;
        }
        throw new Error("toISODate() Invalid String Error: ".concat(date));
    }
    var dateString = date.toISOString().slice(0, 10);
    if ((0, exports.isValidISODate)(dateString)) {
        return dateString;
    }
    throw new Error("toISODate() Invalid Date Error: ".concat(date));
}
exports.toISODate = toISODate;
// By the same style we can export a few more helper types
var ISOYearBrand;
(function (ISOYearBrand) {
    ISOYearBrand["_"] = "";
})(ISOYearBrand = exports.ISOYearBrand || (exports.ISOYearBrand = {}));
var isValidISOYear = function (s) {
    return String(s).match(/^\d{4}$/) !== null;
};
exports.isValidISOYear = isValidISOYear;
/**
 * This maintains ISO Timezone
 *
 * @param date
 */
function toISOYear(date) {
    if (typeof date === "string") {
        if ((0, exports.isValidISODate)(date)) {
            // If it's a valid ISO Date just return the year portion
            return date.slice(0, 4);
        }
        if ((0, exports.isValidISOYear)(date)) {
            return date;
        }
        throw new Error("isValidYearString() Invalid String Error: ".concat(date));
    }
    // const dateString = String(date.getFullYear());
    var dateString = date.toISOString().slice(0, 4);
    if ((0, exports.isValidISOYear)(dateString)) {
        return dateString;
    }
    throw new Error("isValidDateString() Invalid Date Error: ".concat(date));
}
exports.toISOYear = toISOYear;
// By the same style we can export a few more helper types
var ISOMonthBrand;
(function (ISOMonthBrand) {
    ISOMonthBrand["_"] = "";
})(ISOMonthBrand = exports.ISOMonthBrand || (exports.ISOMonthBrand = {}));
var isValidISOMonth = function (s) {
    return String(s).match(/^\d{2}$/) !== null && Number(s) > 0 && Number(s) < 13;
};
exports.isValidISOMonth = isValidISOMonth;
function toISOMonth(date) {
    if (typeof date === "string") {
        if ((0, exports.isValidISODate)(date)) {
            // If it's a valid ISO Date just return the year portion
            return date.slice(5, 7);
        }
        if ((0, exports.isValidISOMonth)(date)) {
            return date;
        }
        throw new Error("toValidISOMonth() Invalid String Error: ".concat(date));
    }
    var dateString = date.toISOString().slice(5, 7);
    if ((0, exports.isValidISOMonth)(dateString)) {
        return dateString;
    }
    throw new Error("toValidISOMonth() Invalid Date Error: ".concat(date));
}
exports.toISOMonth = toISOMonth;
//# sourceMappingURL=ISODate.js.map