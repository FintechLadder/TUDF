"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Segment_1 = __importDefault(require("../libs/Segment"));
const headerSpec_1 = __importDefault(require("../specs/headerSpec"));
const nameSegmentHandler_1 = require("../segmentHandler/nameSegmentHandler");
const nameSpec_1 = __importDefault(require("../specs/nameSpec"));
const idSegmentHandler_1 = require("../segmentHandler/idSegmentHandler");
const idSpec_1 = __importDefault(require("../specs/idSpec"));
const telephoneSpec_1 = __importDefault(require("../specs/telephoneSpec"));
const addressSegmentHandler_1 = require("../segmentHandler/addressSegmentHandler");
const addressSpec_1 = __importDefault(require("../specs/addressSpec"));
const accountSpec_1 = __importDefault(require("../specs/accountSpec"));
const esSpec_1 = __importDefault(require("../specs/esSpec"));
const trailerSpec_1 = __importDefault(require("../specs/trailerSpec"));
const tudf_1 = require("../tudf");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("headerSegment", () => {
    (0, globals_1.test)("header Segment", () => {
        try {
            const data = {
                reportingMemberId: "NB93950001_DATASUBMISSION",
                reportingMemberShortName: "GANGANGA",
                cycleIdentification: "NB",
                dateReported: "30092023",
                authenticationMethod: "A",
            };
            const expected = "TUDF12NB93950001_DATASUBMISSION     GANGANGA        NB30092023                              A00000                                                ";
            const headerSegment = new Segment_1.default(headerSpec_1.default, data);
            const res = headerSegment.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("nameSegment", () => {
    (0, globals_1.test)("simple name Segment", () => {
        try {
            const data = {
                customer_name: "Ashok Salvi",
                dob: "31101998",
                gender: 2,
            };
            const expected = "PN03N010111Ashok Salvi07083110199808012";
            const nameSegmentHandler = new nameSegmentHandler_1.NameSegmentHandler(nameSpec_1.default, data);
            const res = nameSegmentHandler.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
    (0, globals_1.test)("name Segment where customer_name exceeds maximum length - 26", () => {
        try {
            const data = {
                customer_name: "Hasan Abbas Parvez Husain Sayed",
                dob: "10032004",
                gender: 2,
            };
            const expected = "PN03N010125Hasan Abbas Parvez Husain0205Sayed07081003200408012";
            const nameSegmentHandler = new nameSegmentHandler_1.NameSegmentHandler(nameSpec_1.default, data);
            const res = nameSegmentHandler.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("idSegment", () => {
    (0, globals_1.test)("simple id Segment", () => {
        try {
            const data = {
                pan: "RCCPS3755R",
                aadhaar_number: "XXXXXXXX5336",
            };
            const expected = "ID03I010102010210RCCPS3755RID03I020102060212XXXXXXXX5336";
            const idSegmentHandler = new idSegmentHandler_1.IdSegmentHandler(idSpec_1.default, data);
            const res = idSegmentHandler.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("telephoneSegment", () => {
    (0, globals_1.test)("telephone Segment", () => {
        try {
            const data = {
                mobile_number: "9340798324",
            };
            const expected = "PT03T0101109340798324030201";
            const telephoneSegment = new Segment_1.default(telephoneSpec_1.default, data);
            const res = telephoneSegment.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("addressSegment", () => {
    (0, globals_1.test)("simple address Segment", () => {
        try {
            const data = {
                address_1: "DEHRADUN DEHRADUN UTTARAKHAND 248001",
                state_code_1: "05",
                pin_code_1: "248001",
                address_category_1: "01",
            };
            const expected = "PA03A010136DEHRADUN DEHRADUN UTTARAKHAND 2480010602050706248001080201";
            const addressSegmentHandler = new addressSegmentHandler_1.AddressSegmentHandler(addressSpec_1.default, data);
            const res = addressSegmentHandler.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
    (0, globals_1.test)("address Segment where address exceeds maximum length - 40", () => {
        try {
            const data = {
                address_1: "S/O: SHERAJUL HAK GRAM- GAMHARIYA KHURD WARD NO- 13 POST- GAMHARIYA KHURD THANA- ADAPUR GAMHARIYA KHURD EAST CHAMPARAN BIHAR 845301",
                state_code_1: "10",
                pin_code_1: 845301,
                address_category_1: "01",
            };
            const expected = "PA03A010137S/O SHERAJUL HAK GRAM GAMHARIYA KHURD0237WARD NO 13 POST GAMHARIYA KHURD THANA0337ADAPUR GAMHARIYA KHURD EAST CHAMPARAN0412BIHAR 8453010602100706845301080201";
            const addressSegmentHandler = new addressSegmentHandler_1.AddressSegmentHandler(addressSpec_1.default, data);
            const res = addressSegmentHandler.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("accountSegment", () => {
    (0, globals_1.test)("account Segment", () => {
        try {
            const data = {
                customer_name: "Ashok Salvi",
                dob: "31101998",
                gender: 2,
                pan: "RCCPS3755R",
                aadhaar_number: "XXXXXXXX5336",
                mobile_number: "9340798324",
                address_1: "S/O MANOHARLAL SALVI MAKAN KR - 56 WARD KR - 40 DHANERIYA RAOD BAGHANA NEEMUCH NEEMUCH MADHYA PRADESH 458441",
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
            const expected = "TL04T0010110NB939500010208GANGANGA0310GNG-22586504020505011080831082023110830092023120410001303500140350015021839011";
            const accountSegment = new Segment_1.default(accountSpec_1.default, data);
            const res = accountSegment.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("esSegment", () => {
    (0, globals_1.test)("end of Subject Segment", () => {
        try {
            const data = {};
            const expected = "ES02**";
            const esSegment = new Segment_1.default(esSpec_1.default, data);
            const res = esSegment.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
(0, globals_1.describe)("trailerSegment", () => {
    (0, globals_1.test)("trailer Segment", () => {
        try {
            const data = {};
            const expected = "TRLR";
            const trailerSegment = new Segment_1.default(trailerSpec_1.default, data);
            const res = trailerSegment.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
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
        address_1: "S/O: SHERAJUL HAK GRAM- GAMHARIYA KHURD WARD NO- 13 POST- GAMHARIYA KHURD THANA- ADAPUR GAMHARIYA KHURD EAST CHAMPARAN BIHAR 845301",
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
(0, globals_1.describe)("tuef", () => {
    (0, globals_1.test)("tuef", () => {
        try {
            const expected = `TUDF12NB93950001_DATASUBMISSION     GANGANGA        NB30092023                              A00000                                                PN03N010111Ashok Salvi07083110199808012ID03I010102010210RCCPS3755RID03I020102060212XXXXXXXX5336PT03T0101109340798324030201PA03A010137S/O SHERAJUL HAK GRAM GAMHARIYA KHURD0237WARD NO 13 POST GAMHARIYA KHURD THANA0337ADAPUR GAMHARIYA KHURD EAST CHAMPARAN0412BIHAR 8453010602100706845301080201TL04T0010110NB939500010208GANGANGA0310GNG-22586504020505011080831082023110830092023120410001303500140350015021839011ES02**TRLR`;
            const tuef = new tudf_1.TudfWriter(recordsData, headerData);
            const res = tuef.toString();
            (0, globals_1.expect)(res).toEqual(expected);
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
});
