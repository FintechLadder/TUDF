"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ID_SPEC = {
    lengthType: "vary",
    fieldSpecs: [
        {
            tag: "ID",
            name: "Segment Tag",
            required: true,
            type: "AN",
            length: 3,
            mapKey: "id",
        },
        {
            tag: "01",
            name: "ID Type",
            required: true,
            type: "N",
            length: 2,
            mapKey: "id_type",
        },
        {
            tag: "02",
            name: "ID Number",
            type: "P",
            length: 30,
            mapKey: "id_number",
        },
        {
            tag: "03",
            name: "Issue Date",
            type: "N",
            length: 8,
            mapKey: "issue_date",
        },
        {
            tag: "04",
            name: "Expiration Date",
            type: "N",
            length: 8,
            mapKey: "expiry_date",
        },
    ],
};
exports.default = ID_SPEC;
