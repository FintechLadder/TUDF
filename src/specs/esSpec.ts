import { SegmentSpec } from "../libs/interface";

const ES_SPEC: SegmentSpec = {
  lengthType: "fixed",
  fieldSpecs: [
    {
      name: "End Segment",
      required: true,
      type: "AN",
      length: 6,
      val: "ES02**",
    },
  ],
};
export default ES_SPEC;
