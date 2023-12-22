import { IContent } from "json-as-xlsx";
import { BaseSegmentHandler } from "./segmentHandler/baseSegmentHandler";
import { NameSegmentHandler } from "./segmentHandler/nameSegmentHandler";
import { IdSegmentHandler } from "./segmentHandler/idSegmentHandler";
import { AddressSegmentHandler } from "./segmentHandler/addressSegmentHandler";
import HEADER_SPEC from "./specs/headerSpec";
import TRAILER_SPEC from "./specs/trailerSpec";
import NAME_SPEC from "./specs/nameSpec";
import ID_SPEC from "./specs/idSpec";
import TELEPHONE_SPEC from "./specs/telephoneSpec";
import ADDRESS_SPEC from "./specs/addressSpec";
import ACCOUNT_SPEC from "./specs/accountSpec";
import ES_SPEC from "./specs/esSpec";

export class TudfWriter {
  recordsData: IContent[];

  headerData: IContent;

  constructor(recordsData: IContent[], headerData: IContent) {
    this.recordsData = recordsData;
    this.headerData = headerData;
  }

  toString() {
    const headerString = new BaseSegmentHandler(HEADER_SPEC, this.headerData).toString();
    const recordsString = this.getRecordsString(this.recordsData);
    const trailerString = new BaseSegmentHandler(TRAILER_SPEC, {}).toString();
    return [headerString, recordsString, trailerString].join("");
  }

  getRecordsString(recordsData: IContent[]): string {
    return recordsData.map((recordData) => this.getRecordSegmentString(recordData)).join("");
  }

  getRecordSegmentString(recordData: IContent): string {
    return [
      new NameSegmentHandler(NAME_SPEC, recordData).toString(),
      new IdSegmentHandler(ID_SPEC, recordData).toString(),
      new BaseSegmentHandler(TELEPHONE_SPEC, recordData).toString(),
      new AddressSegmentHandler(ADDRESS_SPEC, recordData).toString(),
      new BaseSegmentHandler(ACCOUNT_SPEC, recordData).toString(),
      new BaseSegmentHandler(ES_SPEC, recordData).toString(),
    ].join("");
  }
}
