"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameSegmentHandler = void 0;
const baseSegmentHandler_1 = require("./baseSegmentHandler");
const lodash_1 = __importDefault(require("lodash"));
class NameSegmentHandler extends baseSegmentHandler_1.BaseSegmentHandler {
    cleanCustomerName(inputString) {
        const cleanedString = inputString.replace(/[~!#$%^&*=|?+,@/\\]/g, "");
        return cleanedString;
    }
    getData() {
        const fieldName = "customer_name";
        if (lodash_1.default.isNil(this.data) || lodash_1.default.isNil(this.data[fieldName])) {
            throw new Error(`Field ${fieldName} is missing`);
        }
        const cleanedStr = this.cleanCustomerName(this.data[fieldName].toString());
        const splitCustomerName = this.handleStringSplit(fieldName, cleanedStr);
        const newData = Object.assign(Object.assign({}, this.data), splitCustomerName);
        return [newData];
    }
}
exports.NameSegmentHandler = NameSegmentHandler;
