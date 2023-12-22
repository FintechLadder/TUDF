import util from "util";
import { isType } from "./isType";
import { isValueAvailable, lpad, rpad, truncate } from "./utils";
import { FieldSpec } from "./interface";

export default class Field {
  spec: FieldSpec;

  val: any;

  constructor(spec: FieldSpec, val: any, defaultVal: any) {
    this.spec = spec;
    if (isValueAvailable(defaultVal)) {
      this.val = val || defaultVal;
    } else {
      this.val = val;
    }
  }

  toString(lengthType = "vary") {
    let result;
    const { spec } = this;
    // Check for blank field
    if (!isValueAvailable(this.val) || this.val === "") {
      // Required field cannot be blank
      if (spec.required) {
        throw new TypeError(`Required field ${spec.name} not found in ${util.inspect(this)}`);
      }
      // This field is optional return empty string
      return "";
    }

    this.val = this.val.toString();

    // Validate input type
    if (!isType(spec.type, this.val)) {
      throw new TypeError(`${spec.name} must be ${spec.type}, Field val = ${util.inspect(this.val)}`);
    }

    // this.length is a required field
    // Throw error if this.length is not provided
    if (spec.length === undefined) {
      throw new Error(`Missing length property in ${spec.name} field, Field data = ${util.inspect(this)}`);
    }

    if (lengthType === "fixed") {
      // Zero padding for type N
      if (spec.type === "N") {
        result = lpad(this.val, spec.length, "0");

        // For Type A and AN convert to upper case before padding
      } else if (spec.type === "A" || spec.type === "AN" || spec.type === "ANS") {
        result = rpad(this.val.toUpperCase(), spec.length, " ");

        // Type P can be any printable letter include upper and lower case
      } else {
        result = rpad(this.val, spec.length);
      }
      result = truncate(result, spec.length);
    } else {
      // Variable length field need tag
      if (spec.tag === undefined) {
        throw new Error(`Missing tag property in ${spec.name} field, Field data = ${util.inspect(this)}`);
      }
      // Add tag and length(2 digits) as a prefix
      // convert length 1 - 9 to 01 - 09
      const resultLength = lpad(this.val.length, 2, "0");
      result = spec.tag + resultLength + this.val;
    }

    return result;
  }
}
