import { SegmentSpec } from "../libs/interface";

const TELEPHONE_SPEC: SegmentSpec = {
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

export default TELEPHONE_SPEC;
