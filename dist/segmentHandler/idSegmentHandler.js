"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdSegmentHandler = void 0;
const baseSegmentHandler_1 = require("./baseSegmentHandler");
class IdSegmentHandler extends baseSegmentHandler_1.BaseSegmentHandler {
    getSegmentWiseDataList() {
        const newData = [
            {
                id: "I01",
                id_type: "01",
                id_number: this.data.pan,
            },
            {
                id: "I02",
                id_type: "06",
                id_number: this.data.aadhaar_number,
            },
        ];
        return newData;
    }
}
exports.IdSegmentHandler = IdSegmentHandler;
