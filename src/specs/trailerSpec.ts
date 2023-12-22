import { SegmentSpec } from "../libs/interface";

const TRAILER_SPEC: SegmentSpec = {
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

export default TRAILER_SPEC;
