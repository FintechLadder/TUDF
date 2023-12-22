import { BaseSegmentHandler } from "./baseSegmentHandler";

export class IdSegmentHandler extends BaseSegmentHandler {
  getData() {
    const newData = [
      {
        id: "I01",
        id_type: "01",
        id_number: this.data.pan,
      },
      {
        id: "I02",
        id_type: "06",
        id_number: this.data.aadhaar_number,
      },
    ];
    return newData;
  }
}
