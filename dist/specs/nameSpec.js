"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NAME_SPEC = {
    lengthType: "vary",
    fieldSpecs: [
        {
            tag: "PN",
            name: "Segment Tag",
            required: true,
            type: "AN",
            length: 3,
            val: "N01",
        },
        {
            tag: "01",
            name: "Consumer Name Field1",
            required: true,
            type: "P",
            length: 26,
            mapKey: "customer_name_1",
        },
        {
            tag: "02",
            name: "Consumer Name Field2",
            type: "P",
            length: 26,
            mapKey: "customer_name_2",
        },
        {
            tag: "03",
            name: "Consumer Name Field3",
            type: "P",
            length: 26,
            mapKey: "customer_name_3",
        },
        {
            tag: "04",
            name: "Consumer Name Field4",
            type: "P",
            length: 26,
            mapKey: "customer_name_4",
        },
        {
            tag: "05",
            name: "Consumer Name Field5",
            type: "P",
            length: 26,
            mapKey: "customer_name_5",
        },
        {
            tag: "07",
            name: "Date of Birth",
            required: true,
            type: "N",
            length: 8,
            mapKey: "dob",
        },
        {
            tag: "08",
            name: "Gender",
            required: true,
            type: "N",
            length: 1,
            mapKey: "gender",
        },
    ],
};
exports.default = NAME_SPEC;
