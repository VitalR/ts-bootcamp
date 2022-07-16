"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParsts = dateString
        .split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParsts[2], dateParsts[1] - 1, dateParsts[0]);
};
exports.dateStringToDate = dateStringToDate;
