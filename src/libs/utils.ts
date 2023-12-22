import _ from "lodash";

export const lpad = (val: any, length: number, padStr = " ") => {
  let result = val.toString();
  while (result.length < length) {
    result = `${padStr}${result}`;
  }
  return result;
};

export const rpad = (val: any, length: number, padStr = " ") => {
  let result = val.toString();
  while (result.length < length) {
    result = `${result}${padStr}`;
  }
  return result;
};

export const truncate = (val: any, length: number) => {
  let result = val.toString();
  if (result.length > length) {
    result = result.substr(0, length);
  }
  return result;
};

export const isValueAvailable = (val: any) => {
  return !_.isNil(val);
};

export const isArray = (val: any) => {
  return !_.isNil(val) && Array.isArray(val);
};
