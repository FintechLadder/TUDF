"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TELEPHONE_SPEC = {
    lengthType: "vary",
    fieldSpecs: [
        {
            tag: "PT",
            name: "Segment Tag",
            required: true,
            type: "AN",
            length: 3,
            val: "T01",
        },
        {
            tag: "01",
            name: "Telephone Number",
            required: true,
            type: "P",
            length: 20,
            mapKey: "mobile_number",
        },
        {
            tag: "03",
            name: "Telephone Type",
            type: "P",
            length: 20,
            val: "01",
            defaultVal: "00",
        },
    ],
};
exports.default = TELEPHONE_SPEC;
