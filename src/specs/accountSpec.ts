import { SegmentSpec } from "../libs/interface";

const ACCOUNT_SPEC: SegmentSpec = {
  lengthType: "vary",
  fieldSpecs: [
    {
      tag: "TL",
      name: "Segment Tag",
      required: true,
      type: "AN",
      length: 4,
      val: "T001",
    },
    {
      tag: "01",
      name: "Current/New Reporting Member Code",
      required: true,
      type: "AN",
      length: 10,
      mapKey: "current_member_code",
    },
    {
      tag: "02",
      name: "Current/New Member Short Name",
      required: true,
      type: "ANS",
      length: 16,
      mapKey: "current_short_name",
    },
    {
      tag: "03",
      name: "Current/New Account Number",
      required: true,
      type: "P",
      length: 25,
      mapKey: "current_account_no",
    },
    {
      tag: "04",
      name: "Account Type",
      required: true,
      type: "N",
      length: 2,
      mapKey: "account_type",
    },
    {
      tag: "05",
      name: "Ownership Indicator",
      required: true,
      type: "N",
      length: 1,
      mapKey: "ownership_indicator",
    },
    {
      tag: "08",
      name: "Date Opened/Disbursed",
      required: true,
      type: "N",
      length: 8,
      mapKey: "date_opened",
    },
    {
      tag: "09",
      name: "Date of Last Payment",
      type: "N",
      length: 8,
      mapKey: "date_of_last_payment",
    },
    {
      tag: "10",
      name: "Date Closed",
      type: "N",
      length: 8,
      mapKey: "date_closed",
    },
    {
      tag: "11",
      name: "Date Reported and Certified",
      type: "N",
      length: 8,
      mapKey: "date_reported",
    },
    {
      tag: "12",
      name: "High Credit/Sanctioned Amount",
      required: true,
      type: "N",
      length: 9,
      mapKey: "sanctioned_limit",
    },
    {
      tag: "13",
      name: "Current Balance",
      required: true,
      type: "N",
      length: 10,
      mapKey: "current_balance",
      mapFunc: (val: number) => {
        if (val > 0) {
          return val;
        }
        const positiveVal = -1 * val;
        return `${positiveVal}-`;
      },
    },
    {
      tag: "14",
      name: "Amount Overdue",
      type: "N",
      length: 9,
      mapKey: "amt_overdue",
    },
    {
      tag: "15",
      name: "Number of Days Past Due",
      type: "N",
      length: 3,
      mapKey: "dpd",
    },
    {
      tag: "16",
      name: "Old Reporting Member Code",
      type: "AN",
      length: 10,
      mapKey: "old_mbr_code",
    },
    {
      tag: "17",
      name: "Old Member Short Name",
      type: "ANS",
      length: 16,
      mapKey: "old_mbr_short_name",
    },
    {
      tag: "18",
      name: "Old Account Number",
      type: "P",
      length: 25,
      mapKey: "old_acc_no",
    },
    {
      tag: "19",
      name: "Old Account Type",
      type: "N",
      length: 2,
      mapKey: "old_acc_type",
    },
    {
      tag: "20",
      name: "Old Ownership Indicator",
      type: "N",
      length: 1,
      mapKey: "old_ownership_indicator",
    },
    {
      tag: "21",
      name: "Suit Filed / Wilful Default",
      type: "N",
      length: 2,
      mapKey: "willful_default",
    },
    {
      tag: "22",
      name: "Credit Facility Status",
      type: "N",
      length: 2,
      mapKey: "written_off_status",
    },
    {
      tag: "26",
      name: "Asset Classification",
      type: "N",
      length: 2,
      mapKey: "asset_classification",
    },
    {
      tag: "34",
      name: "Value of Collateral",
      type: "N",
      length: 9,
      mapKey: "value_of_collateral",
    },
    {
      tag: "35",
      name: "Type of Collateral",
      type: "N",
      length: 2,
      mapKey: "type_of_collateral",
    },
    {
      tag: "36",
      name: "Credit Limit",
      type: "N",
      length: 9,
      mapKey: "credit_limit",
    },
    {
      tag: "37",
      name: "Cash Limit",
      type: "N",
      length: 9,
      mapKey: "cash_limit",
    },
    {
      tag: "38",
      name: "Rate Of Interest",
      type: "N",
      length: 8,
      mapKey: "rate_of_interest",
    },
    {
      tag: "39",
      name: "Repayment Tenure",
      type: "N",
      length: 3,
      mapKey: "repayment_tenure",
    },
    {
      tag: "40",
      name: "EMI Amount",
      type: "N",
      length: 9,
      mapKey: "emi_amount",
    },
    {
      tag: "41",
      name: "Written-off Amount (Total)",
      type: "N",
      length: 9,
      mapKey: "written_off_amount",
    },
    {
      tag: "42",
      name: "Written-off Amount (Principal)",
      type: "N",
      length: 9,
      mapKey: "written_off_principal_amount",
    },
    {
      tag: "43",
      name: "Settlement Amount",
      type: "N",
      length: 9,
      mapKey: "settlement_amount",
    },
    {
      tag: "44",
      name: "Payment Frequency",
      type: "N",
      length: 2,
      mapKey: "payment_frequency",
    },
    {
      tag: "45",
      name: "Actual Payment Amount",
      type: "N",
      length: 9,
      mapKey: "actual_payment_amount",
    },
    {
      tag: "46",
      name: "Occupation Code",
      type: "N",
      length: 2,
      mapKey: "occupation_code",
    },
    {
      tag: "47",
      name: "Income",
      type: "N",
      length: 9,
      mapKey: "income",
    },
    {
      tag: "48",
      name: "Net/Gross Income Indicator",
      type: "A",
      length: 1,
      mapKey: "gross_indicator",
    },
    {
      tag: "49",
      name: "Monthly/Annual Income Indicator",
      type: "A",
      length: 1,
      mapKey: "monthly_annual_indicator",
    },
  ],
};

export default ACCOUNT_SPEC;
