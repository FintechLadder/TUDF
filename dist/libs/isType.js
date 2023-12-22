"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = void 0;
const isAlphabetic = (value) => {
    return /^[-_/a-zก-์.]+$/i.test(value);
};
const isNumeric = (value) => {
    return /^[0-9.-]+$/.test(value);
};
const isAlphaNumeric = (value) => {
    return /^[-_/a-zก-์0-9.*]+$/i.test(value);
};
const isAlphaNumericWithSpace = (value) => {
    return /^[-_/a-zก-์0-9.* ]+$/i.test(value);
};
const isPrintable = () => {
    return true;
};
const isType = (type, value) => {
    const validators = {
        A: isAlphabetic,
        N: isNumeric,
        AN: isAlphaNumeric,
        P: isPrintable,
        ANS: isAlphaNumericWithSpace,
    };
    const validator = validators[type];
    let result;
    if (validator) {
        result = validator(value);
    }
    else {
        result = false;
    }
    return result;
};
exports.isType = isType;
