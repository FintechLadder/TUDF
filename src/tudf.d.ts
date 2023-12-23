import { IContent } from "json-as-xlsx";

declare module "tudf" {
    export class TudfWriter{
        constructor(recordsData: IContent[], headerData: IContent);
        toString(): string;
        getRecordsString(recordsData: IContent[]): string;
        getRecordSegmentString(recordData: IContent): string;
    }
  }
  