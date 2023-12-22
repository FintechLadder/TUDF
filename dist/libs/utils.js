"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.isValueAvailable = exports.truncate = exports.rpad = exports.lpad = void 0;
const lodash_1 = __importDefault(require("lodash"));
const lpad = (val, length, padStr = " ") => {
    let result = val.toString();
    while (result.length < length) {
        result = `${padStr}${result}`;
    }
    return result;
};
exports.lpad = lpad;
const rpad = (val, length, padStr = " ") => {
    let result = val.toString();
    while (result.length < length) {
        result = `${result}${padStr}`;
    }
    return result;
};
exports.rpad = rpad;
const truncate = (val, length) => {
    let result = val.toString();
    if (result.length > length) {
        result = result.substr(0, length);
    }
    return result;
};
exports.truncate = truncate;
const isValueAvailable = (val) => {
    return !lodash_1.default.isNil(val);
};
exports.isValueAvailable = isValueAvailable;
const isArray = (val) => {
    return !lodash_1.default.isNil(val) && Array.isArray(val);
};
exports.isArray = isArray;
