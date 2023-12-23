import util from "util";
import { isValueAvailable } from "./utils";
import { FieldSpec, LengthType, SegmentSpec } from "./interface";
import Field from "./Field";
import { IContent } from 'json-as-xlsx';

export default class Segment {
  lengthType: LengthType;

  fieldSpecs: FieldSpec[];

  data: IContent;

  constructor(spec: SegmentSpec, data: IContent) {
    if (
      typeof spec === "undefined" ||
      typeof spec.fieldSpecs === "undefined" ||
      // Default lengthType for field that does not specified lengthType
      typeof spec.lengthType === "undefined"
    ) {
      throw new Error(`Missing spec, spec.fieldSpecs or spec.lengthType from ${util.inspect(spec)}`);
    }
    this.fieldSpecs = spec.fieldSpecs;
    this.lengthType = spec.lengthType;
    this.data = data;
  }

  toString() {
    return this.fieldSpecs
      .map((fieldSpec) => {
        let mappedVal;
        // If fieldSpec has val property use it first
        if (isValueAvailable(fieldSpec.val)) {
          mappedVal = fieldSpec.val;
        } else {
          if (!fieldSpec.mapKey) {
            throw new Error(`mapKey is missing from fieldSpec ${util.inspect(fieldSpec)}`);
          }
          mappedVal = this.data[fieldSpec.mapKey];
          if (fieldSpec.mapFunc) {
            mappedVal = fieldSpec.mapFunc(mappedVal);
          }
        }
        const field = new Field(fieldSpec, mappedVal, fieldSpec.defaultVal);

        return field.toString(this.lengthType);
      })
      .reduce((result, fieldStr) => `${result}${fieldStr}`);
  }
}
