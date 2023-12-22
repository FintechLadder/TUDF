import { SegmentSpec } from "../libs/interface";

const HEADER_SPEC: SegmentSpec = {
  lengthType: "fixed",
  fieldSpecs: [
    {
      name: "Segment Tag",
      type: "A",
      length: 4,
      required: true,
      val: "TUDF",
    },
    {
      name: "Version",
      type: "N",
      length: 2,
      required: true,
      val: 12,
    },
    {
      name: "Reporting Member / Processor User ID",
      type: "P",
      length: 30,
      required: true,
      mapKey: "reportingMemberId",
    },
    {
      name: "Reporting Member / Processor Short Name",
      type: "ANS",
      length: 16,
      required: true,
      mapKey: "reportingMemberShortName",
    },
    {
      name: "Cycle Identification",
      type: "AN",
      length: 2,
      required: true,
      mapKey: "cycleIdentification",
    },
    {
      name: "Date Reported and Certified",
      type: "N",
      length: 8,
      required: true,
      mapKey: "dateReported",
    },
    {
      name: "Reporting Password",
      type: "P",
      length: 30,
      required: true,
      mapKey: "reportingPassword",
      defaultVal: " ",
    },
    {
      name: "Authentication Method",
      type: "A",
      length: 1,
      required: true,
      mapKey: "authenticationMethod",
    },
    {
      name: "Future Use",
      type: "P",
      length: 5,
      required: true,
      mapKey: "futureUse",
      defaultVal: "00000",
    },
    {
      name: "Member Data",
      type: "P",
      length: 48,
      required: true,
      mapKey: "memberData",
      defaultVal: " ",
    },
  ],
};

export default HEADER_SPEC;
