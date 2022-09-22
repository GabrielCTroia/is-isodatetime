"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ISODate_1 = require("./ISODate");
describe("ISO Date", function () {
    describe("isValid", function () {
        test("a valid date this year", function () {
            expect((0, ISODate_1.isValidISODate)("2014-02-21")).toBe(true);
        });
        test("a year with 3 digits", function () {
            expect((0, ISODate_1.isValidISODate)("201-02-21")).toBe(false);
        });
        test("a year with 5 digits", function () {
            expect((0, ISODate_1.isValidISODate)("20102-02-21")).toBe(false);
        });
        test("an out of bound month", function () {
            expect((0, ISODate_1.isValidISODate)("2019-13-21")).toBe(false);
        });
        test("a 00 month", function () {
            expect((0, ISODate_1.isValidISODate)("2019-00-21")).toBe(false);
        });
        test("an out of bound day", function () {
            expect((0, ISODate_1.isValidISODate)("2019-01-32")).toBe(false);
        });
        test("a 00 day", function () {
            expect((0, ISODate_1.isValidISODate)("2019-01-00")).toBe(false);
        });
        test("an out of bound day of specific month", function () {
            expect((0, ISODate_1.isValidISODate)("2019-02-30")).toBe(false);
        });
        test("an out of bound day of specific month of a nonleap year", function () {
            expect((0, ISODate_1.isValidISODate)("2015-02-29")).toBe(false);
        });
        test("a normally out of bound day of specific month of leap year ", function () {
            expect((0, ISODate_1.isValidISODate)("2016-02-29")).toBe(true);
        });
        test("does NOT work with an ISOString (2019-10-31T00:16:59.998Z)", function () {
            expect((0, ISODate_1.isValidISODate)("2019-10-31T00:16:59.998Z")).toBe(false);
        });
    });
    describe("toISODate", function () {
        test("a Date Object", function () {
            expect((0, ISODate_1.toISODate)(new Date(1571865848345))).toBe("2019-10-23");
        });
        test("a valid string", function () {
            expect((0, ISODate_1.toISODate)("2019-02-23")).toBe("2019-02-23");
        });
        test("an invalid string", function () {
            expect(function () { return (0, ISODate_1.toISODate)("20190223"); }).toThrow();
        });
        test("toISODate returns in UTC Timezone, not the local one!", function () {
            expect((0, ISODate_1.toISODate)(new Date("Mon Nov 04 2019 23:00:00 GMT-0500"))).toBe("2019-11-05");
        });
    });
});
describe("ISO Year", function () {
    describe("isValid", function () {
        test("a valid year", function () {
            expect((0, ISODate_1.isValidISOYear)("2014")).toBe(true);
        });
        test("a year with 5 digits", function () {
            expect((0, ISODate_1.isValidISOYear)("20142")).toBe(false);
        });
        test("a year with 3 digits", function () {
            expect((0, ISODate_1.isValidISOYear)("201")).toBe(false);
        });
        test("a year w/ digits and letters", function () {
            expect((0, ISODate_1.isValidISOYear)("2o12")).toBe(false);
        });
        test("fails with a valid ISODate", function () {
            expect((0, ISODate_1.isValidISOYear)("2012-01-22")).toBe(false);
        });
    });
    describe("toISOYear", function () {
        test("valid digits of format yyyy", function () {
            expect((0, ISODate_1.toISOYear)("2323")).toBe("2323");
        });
        test("valid ISODate", function () {
            expect((0, ISODate_1.toISOYear)("2323-02-12")).toBe("2323");
        });
        test("valid Date objecet", function () {
            expect((0, ISODate_1.toISOYear)(new Date(1571865848345))).toBe("2019");
        });
        test("digits too short", function () {
            expect(function () { return (0, ISODate_1.toISOYear)("232"); }).toThrow();
        });
        test("digits too long", function () {
            expect(function () { return (0, ISODate_1.toISOYear)("23223"); }).toThrow();
        });
        test("letters", function () {
            expect(function () { return (0, ISODate_1.toISOYear)("asda"); }).toThrow();
        });
        test("invalid ISO Date", function () {
            expect(function () { return (0, ISODate_1.toISOYear)("2012-01-00"); }).toThrow();
        });
        test("toISODate returns in UTC Timezone, not the local one!", function () {
            expect((0, ISODate_1.toISOYear)(new Date("Tue Dec 31 2019 20:00:00 GMT-0500"))).toBe("2020");
        });
    });
});
describe("ISO Month", function () {
    describe("isValid", function () {
        test("a valid month at upper boundary", function () {
            expect((0, ISODate_1.isValidISOMonth)("12")).toBe(true);
        });
        test("a valid month at lower boundary", function () {
            expect((0, ISODate_1.isValidISOMonth)("01")).toBe(true);
        });
        test("a valid month in the middle", function () {
            expect((0, ISODate_1.isValidISOMonth)("05")).toBe(true);
        });
        test("a month with 3 digits", function () {
            expect((0, ISODate_1.isValidISOYear)("123")).toBe(false);
        });
        test("a month with 1 digits", function () {
            expect((0, ISODate_1.isValidISOYear)("1")).toBe(false);
        });
        test("a month w/ digits and letters", function () {
            expect((0, ISODate_1.isValidISOYear)("1o")).toBe(false);
        });
        test("fails with a valid ISODate", function () {
            expect((0, ISODate_1.isValidISOYear)("2012-01-22")).toBe(false);
        });
    });
    describe("toISOYear", function () {
        test("valid digits of format mm", function () {
            expect((0, ISODate_1.toISOMonth)("12")).toBe("12");
        });
        test("valid ISODate", function () {
            expect((0, ISODate_1.toISOMonth)("2323-02-12")).toBe("02");
        });
        test("valid Date objecet", function () {
            expect((0, ISODate_1.toISOMonth)(new Date(1571865848345))).toBe("10");
        });
        test("digits too short", function () {
            expect(function () { return (0, ISODate_1.toISOMonth)("1"); }).toThrow();
        });
        test("digits too long", function () {
            expect(function () { return (0, ISODate_1.toISOMonth)("123"); }).toThrow();
        });
        test("letters", function () {
            expect(function () { return (0, ISODate_1.toISOMonth)("asda"); }).toThrow();
        });
        test("invalid ISO Date", function () {
            expect(function () { return (0, ISODate_1.toISOMonth)("2012-01-00"); }).toThrow();
        });
        test("toISODate returns in UTC Timezone, not the local one!", function () {
            expect((0, ISODate_1.toISOMonth)(new Date("Tue Dec 31 2019 20:00:00 GMT-0500"))).toBe("01");
        });
    });
});
//# sourceMappingURL=ISODate.test.js.map