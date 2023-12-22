"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TudfWriter = void 0;
const baseSegmentHandler_1 = require("./segmentHandler/baseSegmentHandler");
const nameSegmentHandler_1 = require("./segmentHandler/nameSegmentHandler");
const idSegmentHandler_1 = require("./segmentHandler/idSegmentHandler");
const addressSegmentHandler_1 = require("./segmentHandler/addressSegmentHandler");
const headerSpec_1 = __importDefault(require("./specs/headerSpec"));
const trailerSpec_1 = __importDefault(require("./specs/trailerSpec"));
const nameSpec_1 = __importDefault(require("./specs/nameSpec"));
const idSpec_1 = __importDefault(require("./specs/idSpec"));
const telephoneSpec_1 = __importDefault(require("./specs/telephoneSpec"));
const addressSpec_1 = __importDefault(require("./specs/addressSpec"));
const accountSpec_1 = __importDefault(require("./specs/accountSpec"));
const esSpec_1 = __importDefault(require("./specs/esSpec"));
class TudfWriter {
    constructor(recordsData, headerData) {
        this.recordsData = recordsData;
        this.headerData = headerData;
    }
    toString() {
        const headerString = new baseSegmentHandler_1.BaseSegmentHandler(headerSpec_1.default, this.headerData).toString();
        const recordsString = this.getRecordsString(this.recordsData);
        const trailerString = new baseSegmentHandler_1.BaseSegmentHandler(trailerSpec_1.default, {}).toString();
        return [headerString, recordsString, trailerString].join("");
    }
    getRecordsString(recordsData) {
        return recordsData.map((recordData) => this.getRecordSegmentString(recordData)).join("");
    }
    getRecordSegmentString(recordData) {
        return [
            new nameSegmentHandler_1.NameSegmentHandler(nameSpec_1.default, recordData).toString(),
            new idSegmentHandler_1.IdSegmentHandler(idSpec_1.default, recordData).toString(),
            new baseSegmentHandler_1.BaseSegmentHandler(telephoneSpec_1.default, recordData).toString(),
            new addressSegmentHandler_1.AddressSegmentHandler(addressSpec_1.default, recordData).toString(),
            new baseSegmentHandler_1.BaseSegmentHandler(accountSpec_1.default, recordData).toString(),
            new baseSegmentHandler_1.BaseSegmentHandler(esSpec_1.default, recordData).toString(),
        ].join("");
    }
}
exports.TudfWriter = TudfWriter;
