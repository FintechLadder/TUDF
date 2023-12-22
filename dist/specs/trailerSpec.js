"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TRAILER_SPEC = {
    lengthType: "fixed",
    fieldSpecs: [
        {
            name: "Trailer Segment",
            type: "A",
            length: 4,
            required: true,
            val: "TRLR",
        },
    ],
};
exports.default = TRAILER_SPEC;
