import { BaseSegmentHandler } from "./baseSegmentHandler";
import _ from 'lodash';

export class AddressSegmentHandler extends BaseSegmentHandler {
  cleanAddress(inputString: string) {
    const cleanedString = inputString.replace(/[:-]/g, "");
    return cleanedString;
  }

  getData() {
    const fieldName = "address_1";
    if(_.isNil(this.data) || _.isNil(this.data[fieldName])){
      throw new Error(`Field ${fieldName} is missing`);
    }
    const cleanedStr = this.cleanAddress(this.data[fieldName].toString());
    const splitAddress = this.handleStringSplit(fieldName, cleanedStr);
    const newData = {
      ...this.data,
      ...splitAddress,
    };
    return [newData];
  }
}
