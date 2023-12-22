import { IContent } from "json-as-xlsx";
import _ from "lodash";
import { FieldSpec, SegmentSpec } from "../libs/interface";
import Segment from "../libs/Segment";

export class BaseSegmentHandler {
  spec: SegmentSpec;

  data: IContent;

  constructor(spec: SegmentSpec, data: IContent) {
    this.spec = spec;
    this.data = data;
  }

  getData() {
    return [this.data];
  }

  toString(): string {
    const segments: Segment[] = this.getData().map((data) => new Segment(this.spec, data));
    return segments.map((segment) => segment.toString()).join("");
  }

  handleStringSplit = (fieldName: string, str: any) => {
    const maxLength: number | undefined = this.spec.fieldSpecs.find((spec: FieldSpec) => spec.mapKey === `${fieldName}_1`)?.length;
    if (_.isNil(maxLength)) {
      throw new Error(`maxLength can't be undefined for field ${fieldName}_1`);
    }
    const result: string[] = [];
    let currentSubstring = "";

    // Split the string at whitespace and iterate through each part
    str.split(/\s+/).forEach((part: string) => {
      // Check if adding the current part exceeds maxLength
      if (currentSubstring.length + part.length < maxLength) {
        // Add the part to the current substring
        currentSubstring += (currentSubstring.length > 0 ? " " : "") + part;
      } else {
        // If adding the current part exceeds maxLength, start a new substring
        result.push(currentSubstring);
        currentSubstring = part;
      }
    });

    // Add the last substring to the result
    if (currentSubstring.length > 0) {
      result.push(currentSubstring);
    }

    const obj: { [key: string]: string } = {};
    result.forEach((part, idx) => {
      obj[`${fieldName}_${idx + 1}`] = part;
    });

    return obj;
  };
}
