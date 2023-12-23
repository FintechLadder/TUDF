"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSegmentHandler = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Segment_1 = __importDefault(require("../libs/Segment"));
class BaseSegmentHandler {
    constructor(spec, data) {
        this.splitIntoFields = (fieldName, str) => {
            var _a;
            const maxLength = (_a = this.spec.fieldSpecs.find((spec) => spec.mapKey === `${fieldName}_1`)) === null || _a === void 0 ? void 0 : _a.length;
            if (lodash_1.default.isNil(maxLength)) {
                throw new Error(`maxLength can't be undefined for field ${fieldName}_1`);
            }
            const result = [];
            let currentSubstring = "";
            // Split the string at whitespace and iterate through each part
            str.split(/\s+/).forEach((part) => {
                // Check if adding the current part exceeds maxLength
                if (currentSubstring.length + part.length < maxLength) {
                    // Add the part to the current substring
                    currentSubstring += (currentSubstring.length > 0 ? " " : "") + part;
                }
                else {
                    // If adding the current part exceeds maxLength, start a new substring
                    result.push(currentSubstring);
                    currentSubstring = part;
                }
            });
            // Add the last substring to the result
            if (currentSubstring.length > 0) {
                result.push(currentSubstring);
            }
            const obj = {};
            result.forEach((part, idx) => {
                obj[`${fieldName}_${idx + 1}`] = part;
            });
            return obj;
        };
        this.spec = spec;
        this.data = data;
    }
    getSegmentWiseDataList() {
        return [this.data];
    }
    toString() {
        const segments = this.getSegmentWiseDataList().map((data) => new Segment_1.default(this.spec, data));
        return segments.map((segment) => segment.toString()).join("");
    }
}
exports.BaseSegmentHandler = BaseSegmentHandler;
