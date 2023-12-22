
import Segment from "../libs/Segment";
import HEADER_SPEC from "../specs/headerSpec";
import { NameSegmentHandler } from "../segmentHandler/nameSegmentHandler";
import NAME_SPEC from "../specs/nameSpec";
import { IdSegmentHandler } from "../segmentHandler/idSegmentHandler";
import ID_SPEC from "../specs/idSpec";
import TELEPHONE_SPEC from "../specs/telephoneSpec";
import { AddressSegmentHandler } from "../segmentHandler/addressSegmentHandler";
import ADDRESS_SPEC from "../specs/addressSpec";
import ACCOUNT_SPEC from "../specs/accountSpec";
import ES_SPEC from "../specs/esSpec";
import TRAILER_SPEC from "../specs/trailerSpec";
import { TudfWriter } from "../tudf";
import { describe, test, expect } from '@jest/globals';

describe("headerSegment", () => {
  test("header Segment", () => {
    try {
      const data = {
        reportingMemberId: "NB93950001_DATASUBMISSION",
        reportingMemberShortName: "GANGANGA",
        cycleIdentification: "NB",
        dateReported: "30092023",
        authenticationMethod: "A",
      };
      const expected =
        "TUDF12NB93950001_DATASUBMISSION     GANGANGA        NB30092023                              A00000                                                ";
      const headerSegment = new Segment(HEADER_SPEC, data);
      const res = headerSegment.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("nameSegment", () => {
  test("simple name Segment", () => {
    try {
      const data = {
        customer_name: "Ashok Salvi",
        dob: "31101998",
        gender: 2,
      };
      const expected = "PN03N010111Ashok Salvi07083110199808012";
      const nameSegmentHandler = new NameSegmentHandler(NAME_SPEC, data);
      const res = nameSegmentHandler.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
  test("name Segment where customer_name exceeds maximum length - 26", () => {
    try {
      const data = {
        customer_name: "Hasan Abbas Parvez Husain Sayed",
        dob: "10032004",
        gender: 2,
      };
      const expected = "PN03N010125Hasan Abbas Parvez Husain0205Sayed07081003200408012";
      const nameSegmentHandler = new NameSegmentHandler(NAME_SPEC, data);
      const res = nameSegmentHandler.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("idSegment", () => {
  test("simple id Segment", () => {
    try {
      const data = {
        pan: "RCCPS3755R",
        aadhaar_number: "XXXXXXXX5336",
      };
      const expected = "ID03I010102010210RCCPS3755RID03I020102060212XXXXXXXX5336";
      const idSegmentHandler = new IdSegmentHandler(ID_SPEC, data);
      const res = idSegmentHandler.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("telephoneSegment", () => {
  test("telephone Segment", () => {
    try {
      const data = {
        mobile_number: "9340798324",
      };
      const expected = "PT03T0101109340798324030201";
      const telephoneSegment = new Segment(TELEPHONE_SPEC, data);
      const res = telephoneSegment.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("addressSegment", () => {
  test("simple address Segment", () => {
    try {
      const data = {
        address_1: "DEHRADUN DEHRADUN UTTARAKHAND 248001",
        state_code_1: "05",
        pin_code_1: "248001",
        address_category_1: "01",
      };
      const expected = "PA03A010136DEHRADUN DEHRADUN UTTARAKHAND 2480010602050706248001080201";
      const addressSegmentHandler = new AddressSegmentHandler(ADDRESS_SPEC, data);
      const res = addressSegmentHandler.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });

  test("address Segment where address exceeds maximum length - 40", () => {
    try {
      const data = {
        address_1:
          "S/O: SHERAJUL HAK GRAM- GAMHARIYA KHURD WARD NO- 13 POST- GAMHARIYA KHURD THANA- ADAPUR GAMHARIYA KHURD EAST CHAMPARAN BIHAR 845301",
        state_code_1: "10",
        pin_code_1: 845301,
        address_category_1: "01",
      };
      const expected =
        "PA03A010137S/O SHERAJUL HAK GRAM GAMHARIYA KHURD0237WARD NO 13 POST GAMHARIYA KHURD THANA0337ADAPUR GAMHARIYA KHURD EAST CHAMPARAN0412BIHAR 8453010602100706845301080201";
      const addressSegmentHandler = new AddressSegmentHandler(ADDRESS_SPEC, data);
      const res = addressSegmentHandler.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("accountSegment", () => {
  test("account Segment", () => {
    try {
      const data = {
        customer_name: "Ashok Salvi",
        dob: "31101998",
        gender: 2,
        pan: "RCCPS3755R",
        aadhaar_number: "XXXXXXXX5336",
        mobile_number: "9340798324",
        address_1:
          "S/O MANOHARLAL SALVI MAKAN KR - 56 WARD KR - 40 DHANERIYA RAOD BAGHANA NEEMUCH NEEMUCH MADHYA PRADESH 458441",
        state_code_1: "09",
        pin_code_1: 250222,
        address_category_1: "01",
        current_member_code: "NB93950001",
        current_short_name: "GANGANGA",
        current_account_no: "GNG-225865",
        account_type: "05",
        ownership_indicator: 1,
        date_opened: "31082023",
        date_reported: "30092023",
        sanctioned_limit: 1000.0,
        current_balance: 500.0,
        amt_overdue: 500.0,
        dpd: 18,
        repayment_tenure: 1,
        written_off_amount: "",
        written_off_principal_amount: "",
        settlement_amount: "",
      };
      const expected =
        "TL04T0010110NB939500010208GANGANGA0310GNG-22586504020505011080831082023110830092023120410001303500140350015021839011";
      const accountSegment = new Segment(ACCOUNT_SPEC, data);
      const res = accountSegment.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("esSegment", () => {
  test("end of Subject Segment", () => {
    try {
      const data = {};
      const expected = "ES02**";
      const esSegment = new Segment(ES_SPEC, data);
      const res = esSegment.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

describe("trailerSegment", () => {
  test("trailer Segment", () => {
    try {
      const data = {};
      const expected = "TRLR";
      const trailerSegment = new Segment(TRAILER_SPEC, data);
      const res = trailerSegment.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});

const headerData = {
  reportingMemberId: "NB93950001_DATASUBMISSION",
  reportingMemberShortName: "GANGANGA",
  cycleIdentification: "NB",
  dateReported: "30092023",
  authenticationMethod: "A",
};
const recordsData = [
  {
    customer_name: "Ashok Salvi",
    dob: "31101998",
    gender: 2,
    pan: "RCCPS3755R",
    aadhaar_number: "XXXXXXXX5336",
    mobile_number: "9340798324",
    address_1:
      "S/O: SHERAJUL HAK GRAM- GAMHARIYA KHURD WARD NO- 13 POST- GAMHARIYA KHURD THANA- ADAPUR GAMHARIYA KHURD EAST CHAMPARAN BIHAR 845301",
    state_code_1: "10",
    pin_code_1: 845301,
    address_category_1: "01",
    current_member_code: "NB93950001",
    current_short_name: "GANGANGA",
    current_account_no: "GNG-225865",
    account_type: "05",
    ownership_indicator: 1,
    date_opened: "31082023",
    date_reported: "30092023",
    sanctioned_limit: 1000.0,
    current_balance: 500.0,
    amt_overdue: 500.0,
    dpd: 18,
    repayment_tenure: 1,
    written_off_amount: "",
    written_off_principal_amount: "",
    settlement_amount: "",
  },
];

describe("tuef", () => {
  test("tuef", () => {
    try {
      const expected = `TUDF12NB93950001_DATASUBMISSION     GANGANGA        NB30092023                              A00000                                                PN03N010111Ashok Salvi07083110199808012ID03I010102010210RCCPS3755RID03I020102060212XXXXXXXX5336PT03T0101109340798324030201PA03A010137S/O SHERAJUL HAK GRAM GAMHARIYA KHURD0237WARD NO 13 POST GAMHARIYA KHURD THANA0337ADAPUR GAMHARIYA KHURD EAST CHAMPARAN0412BIHAR 8453010602100706845301080201TL04T0010110NB939500010208GANGANGA0310GNG-22586504020505011080831082023110830092023120410001303500140350015021839011ES02**TRLR`;
      const tuef = new TudfWriter(recordsData, headerData);
      const res = tuef.toString();
      expect(res).toEqual(expected);
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});
