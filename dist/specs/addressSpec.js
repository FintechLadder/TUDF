"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ADDRESS_SPEC = {
    lengthType: "vary",
    fieldSpecs: [
        {
            tag: "PA",
            name: "Segment Tag",
            required: true,
            type: "AN",
            length: 3,
            val: "A01",
        },
        {
            tag: "01",
            name: "Address Line1",
            required: true,
            type: "P",
            length: 40,
            mapKey: "address_1_1",
        },
        {
            tag: "02",
            name: "Address Line2",
            type: "P",
            length: 40,
            mapKey: "address_1_2",
        },
        {
            tag: "03",
            name: "Address Line3",
            type: "P",
            length: 40,
            mapKey: "address_1_3",
        },
        {
            tag: "04",
            name: "Address Line4",
            type: "P",
            length: 40,
            mapKey: "address_1_4",
        },
        {
            tag: "05",
            name: "Address Line4",
            type: "P",
            length: 40,
            mapKey: "address_1_5",
        },
        {
            tag: "06",
            name: "State Code",
            required: true,
            type: "N",
            length: 2,
            mapKey: "state_code_1",
        },
        {
            tag: "07",
            name: "PIN Code",
            required: true,
            type: "P",
            length: 10,
            mapKey: "pin_code_1",
        },
        {
            tag: "08",
            name: "Address Category",
            required: true,
            type: "N",
            length: 2,
            mapKey: "address_category_1",
        },
        {
            tag: "08",
            name: "Residence Code",
            type: "N",
            length: 2,
            mapKey: "residence_code_1",
        },
    ],
};
exports.default = ADDRESS_SPEC;
