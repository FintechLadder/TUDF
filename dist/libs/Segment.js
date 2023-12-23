"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const utils_1 = require("./utils");
const Field_1 = __importDefault(require("./Field"));
class Segment {
    constructor(spec, data) {
        if (typeof spec === "undefined" ||
            typeof spec.fieldSpecs === "undefined" ||
            // Default lengthType for field that does not specified lengthType
            typeof spec.lengthType === "undefined") {
            throw new Error(`Missing spec, spec.fieldSpecs or spec.lengthType from ${util_1.default.inspect(spec)}`);
        }
        this.fieldSpecs = spec.fieldSpecs;
        this.lengthType = spec.lengthType;
        this.data = data;
    }
    toString() {
        return this.fieldSpecs
            .map((fieldSpec) => {
            let mappedVal;
            // If fieldSpec has val property use it first
            if ((0, utils_1.isValueAvailable)(fieldSpec.val)) {
                mappedVal = fieldSpec.val;
            }
            else {
                if (!fieldSpec.mapKey) {
                    throw new Error(`mapKey is missing from fieldSpec ${util_1.default.inspect(fieldSpec)}`);
                }
                mappedVal = this.data[fieldSpec.mapKey];
                if (fieldSpec.mapFunc) {
                    mappedVal = fieldSpec.mapFunc(mappedVal);
                }
            }
            const field = new Field_1.default(fieldSpec, mappedVal, fieldSpec.defaultVal);
            return field.toString(this.lengthType);
        })
            .reduce((result, fieldStr) => `${result}${fieldStr}`);
    }
}
exports.default = Segment;
