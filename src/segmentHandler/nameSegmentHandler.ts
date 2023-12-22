import { BaseSegmentHandler } from "./baseSegmentHandler";
import _ from 'lodash';

export class NameSegmentHandler extends BaseSegmentHandler {
  cleanCustomerName(inputString: string) {
    const cleanedString = inputString.replace(/[~!#$%^&*=|?+,@/\\]/g, "");
    return cleanedString;
  }

  getData() {
    const fieldName = "customer_name";
    if(_.isNil(this.data) || _.isNil(this.data[fieldName])){
      throw new Error(`Field ${fieldName} is missing`);
    }
    const cleanedStr = this.cleanCustomerName(this.data[fieldName].toString());
    const splitCustomerName = this.handleStringSplit(fieldName, cleanedStr);
    const newData = {
      ...this.data,
      ...splitCustomerName,
    };
    return [newData];
  }
}
