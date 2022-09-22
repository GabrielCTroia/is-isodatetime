"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ISODateTime_1 = require("./ISODateTime");
describe('ISO DateTime isValid', function () {
    test('a valid ISO date time string', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('2019-11-06T03:45:59.611Z')).toBe(true);
    });
    test('valid if missing date time zone', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('2019-11-06T03:45:59.611')).toBe(true);
    });
    test('invalid if missing time', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('2019-11-06')).toBe(false);
    });
    test('invalid if missing date', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('03:45:59.611')).toBe(false);
    });
    test('invalid if random string', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('asd')).toBe(false);
    });
    test('invalid if invalid month day combination', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('2019-02-30T03:45:59.611')).toBe(false);
    });
    test('invalid ISO Basic format (no seperators)', function () {
        expect((0, ISODateTime_1.isValidISODateTime)('20191106T034559611Z')).toBe(false);
    });
});
describe('ISO DateTime toISODateTime', function () {
    test('a Date Object', function () {
        expect((0, ISODateTime_1.toISODateTime)(new Date(1571865848345))).toBe('2019-10-23T21:24:08.345Z');
    });
    test('a valid ISODateTime string', function () {
        expect((0, ISODateTime_1.toISODateTime)('2019-10-23T21:24:08.345Z')).toBe('2019-10-23T21:24:08.345Z');
    });
    test('an invalid string', function () {
        expect(function () { return (0, ISODateTime_1.toISODateTime)('20190223'); }).toThrow();
    });
    test('a valid ISODate', function () {
        expect(function () { return (0, ISODateTime_1.toISODateTime)('2019-10-23'); }).toThrow();
    });
    test('maintains the UTC Timezone not the local one', function () {
        expect((0, ISODateTime_1.toISODateTime)(new Date('Tue Dec 31 2019 19:00:00 GMT-0500'))).toBe('2020-01-01T00:00:00.000Z');
    });
});
//# sourceMappingURL=ISODateTime.test.js.map