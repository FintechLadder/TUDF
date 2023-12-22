"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const isType_1 = require("./isType");
const utils_1 = require("./utils");
class Field {
    constructor(spec, val, defaultVal) {
        this.spec = spec;
        if ((0, utils_1.isValueAvailable)(defaultVal)) {
            this.val = val || defaultVal;
        }
        else {
            this.val = val;
        }
    }
    toString(lengthType = "vary") {
        let result;
        const { spec } = this;
        // Check for blank field
        if (!(0, utils_1.isValueAvailable)(this.val) || this.val === "") {
            // Required field cannot be blank
            if (spec.required) {
                throw new TypeError(`Required field ${spec.name} not found in ${util_1.default.inspect(this)}`);
            }
            // This field is optional return empty string
            return "";
        }
        this.val = this.val.toString();
        // Validate input type
        if (!(0, isType_1.isType)(spec.type, this.val)) {
            throw new TypeError(`${spec.name} must be ${spec.type}, Field val = ${util_1.default.inspect(this.val)}`);
        }
        // this.length is a required field
        // Throw error if this.length is not provided
        if (spec.length === undefined) {
            throw new Error(`Missing length property in ${spec.name} field, Field data = ${util_1.default.inspect(this)}`);
        }
        if (lengthType === "fixed") {
            // Zero padding for type N
            if (spec.type === "N") {
                result = (0, utils_1.lpad)(this.val, spec.length, "0");
                // For Type A and AN convert to upper case before padding
            }
            else if (spec.type === "A" || spec.type === "AN" || spec.type === "ANS") {
                result = (0, utils_1.rpad)(this.val.toUpperCase(), spec.length, " ");
                // Type P can be any printable letter include upper and lower case
            }
            else {
                result = (0, utils_1.rpad)(this.val, spec.length);
            }
            result = (0, utils_1.truncate)(result, spec.length);
        }
        else {
            // Variable length field need tag
            if (spec.tag === undefined) {
                throw new Error(`Missing tag property in ${spec.name} field, Field data = ${util_1.default.inspect(this)}`);
            }
            // Add tag and length(2 digits) as a prefix
            // convert length 1 - 9 to 01 - 09
            const resultLength = (0, utils_1.lpad)(this.val.length, 2, "0");
            result = spec.tag + resultLength + this.val;
        }
        return result;
    }
}
exports.default = Field;
