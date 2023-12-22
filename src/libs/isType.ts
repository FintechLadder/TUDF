import { FieldType } from "./interface";

const isAlphabetic = (value: any) => {
  return /^[-_/a-zก-์.]+$/i.test(value);
};

const isNumeric = (value: any) => {
  return /^[0-9.-]+$/.test(value);
};

const isAlphaNumeric = (value: any) => {
  return /^[-_/a-zก-์0-9.*]+$/i.test(value);
};

const isAlphaNumericWithSpace = (value: any) => {
  return /^[-_/a-zก-์0-9.* ]+$/i.test(value);
};

const isPrintable = () => {
  return true;
};

export const isType = (type: FieldType, value: any) => {
  const validators = {
    A: isAlphabetic,
    N: isNumeric,
    AN: isAlphaNumeric,
    P: isPrintable,
    ANS: isAlphaNumericWithSpace,
  };

  const validator = validators[type];

  let result;
  if (validator) {
    result = validator(value);
  } else {
    result = false;
  }
  return result;
};
