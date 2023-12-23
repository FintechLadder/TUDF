"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSegmentHandler = void 0;
const baseSegmentHandler_1 = require("./baseSegmentHandler");
const lodash_1 = __importDefault(require("lodash"));
class AddressSegmentHandler extends baseSegmentHandler_1.BaseSegmentHandler {
    cleanAddress(inputString) {
        const cleanedString = inputString.replace(/[:-]/g, "");
        return cleanedString;
    }
    getSegmentWiseDataList() {
        const fieldName = "address_1";
        if (lodash_1.default.isNil(this.data) || lodash_1.default.isNil(this.data[fieldName])) {
            throw new Error(`Field ${fieldName} is missing`);
        }
        const cleanedStr = this.cleanAddress(this.data[fieldName].toString());
        const splitAddress = this.splitIntoFields(fieldName, cleanedStr);
        const newData = Object.assign(Object.assign({}, this.data), splitAddress);
        return [newData];
    }
}
exports.AddressSegmentHandler = AddressSegmentHandler;
