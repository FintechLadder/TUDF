export type FieldType = "A" | "N" | "AN" | "P" | "ANS";

export interface FixedLengthFieldSpec {
  name: string;
  type: FieldType;
  tag?: string;
  length: number;
  val?: any;
  mapKey?: string;
  mapFunc?: any;
  required?: boolean;
  defaultVal?: any;
}
export interface VaryLengthFieldSpec {
  name: string;
  type: FieldType;
  tag: string;
  length?: number;
  val?: any;
  mapKey?: string;
  mapFunc?: any;
  required?: boolean;
  defaultVal?: any;
}
export type FieldSpec = VaryLengthFieldSpec | FixedLengthFieldSpec;

export type LengthType = "vary" | "fixed";

export interface SegmentSpec {
  lengthType: LengthType;
  fieldSpecs: Array<FieldSpec>;
}