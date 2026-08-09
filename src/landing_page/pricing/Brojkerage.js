import React from "react";

const segments = [
  {
    title: "Equity",
    icon: "media/images/pricingEquity.svg",
    rows: [
      ["Equity delivery", "₹0", "Free investing. Zero brokerage on all equity delivery (NSE, BSE) investments."],
      ["Equity intraday", "0.03% or ₹20/executed order, whichever is lower", "Applicable on both entry & exit orders."],
      ["Futures", "0.03% or ₹20/executed order, whichever is lower", "On all futures trades."],
      ["Options", "Flat ₹20 per executed order", "On all options trades."],
    ],
  },
  {
    title: "Currency",
    icon: null,
    rows: [
      ["Futures", "0.03% or ₹20/executed order, whichever is lower", ""],
      ["Options", "Flat ₹20 per executed order", ""],
    ],
  },
  {
    title: "Commodity",
    icon: null,
    rows: [
      ["Futures", "0.03% or ₹20/executed order, whichever is lower", ""],
      ["Options", "Flat ₹20 per executed order", ""],
    ],
  },
];

const otherCharges = [
  ["Account opening charges", "₹0"],
  ["Account maintenance charges (AMC)", "₹300/year (free for the 1st year on accounts opened on or after 1st June 2026)"],
  ["Mutual funds", "₹0, free direct mutual fund investments"],
  ["DP (Depository Participant) charges", "₹15.34 (₹13 + 18% GST) per scrip, on the day, irrespective of quantity, only on sell"],
  ["Physical CMR / DIS request", "₹100 (+ courier charges)"],
  ["Auto Square-off charges (MIS not squared off)", "₹50 + GST per position"],
];

const equityIntradayIcon = "media/images/intradayTrades.svg";
const mutualFundIcon = "media/images/pricingMF.svg";

function Brokerage() {
  return (
    <div className="brokerage-section">
      <style>{`
        .brokerage-section {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 40px 80px;
        }
        .brokerage-intro {
          font-size: 16px;
          color: #444;
          line-height: 1.8;
          margin-bottom: 50px;
          text-align: center;
        }
        .segment-block {
          margin-bottom: 50px;
        }
        .segment-title {
          font-size: 20px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
          border-bottom: 2px solid #387ed1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 6px;
        }
        .segment-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .row-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
          vertical-align: middle;
          margin-right: 8px;
        }
        table.brokerage-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14.5px;
        }
        table.brokerage-table th {
          text-align: left;
          padding: 12px 16px;
          background-color: #f7f7f7;
          color: #333;
          font-weight: 600;
          border-bottom: 1px solid #e6e6e6;
        }
        table.brokerage-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #eee;
          color: #555;
          vertical-align: top;
        }
        table.brokerage-table td:first-child {
          font-weight: 500;
          color: #333;
          white-space: nowrap;
        }
        .other-charges-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 70px 0 30px;
          text-align: center;
        }
        table.other-charges-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14.5px;
        }
        table.other-charges-table td {
          padding: 14px 16px;
          border-bottom: 1px solid #eee;
          color: #555;
        }
        table.other-charges-table td:first-child {
          font-weight: 500;
          color: #333;
          width: 40%;
        }
        .brokerage-note {
          font-size: 13px;
          color: #999;
          margin-top: 30px;
          line-height: 1.7;
          text-align: center;
        }

        @media (max-width: 700px) {
          table.brokerage-table,
          table.other-charges-table {
            font-size: 13px;
          }
        }
      `}</style>

      <p className="brokerage-intro">
        We pioneered the concept of discount broking and price transparency
        in India. Flat fees and no hidden charges.
      </p>

      {segments.map((segment) => (
        <div className="segment-block" key={segment.title}>
          <h3 className="segment-title">
            {segment.icon && (
              <img src={segment.icon} alt={segment.title} className="segment-icon" />
            )}
            {segment.title}
          </h3>
          <table className="brokerage-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Brokerage</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {segment.rows.map((row) => (
                <tr key={row[0]}>
                  <td>
                    {row[0] === "Equity intraday" && (
                      <img
                        src={equityIntradayIcon}
                        alt="Intraday"
                        className="row-icon"
                      />
                    )}
                    {row[0]}
                  </td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2 className="other-charges-title">Account opening & other charges</h2>
      <table className="other-charges-table">
        <tbody>
          {otherCharges.map((row) => (
            <tr key={row[0]}>
              <td>
                {row[0] === "Mutual funds" && (
                  <img
                    src={mutualFundIcon}
                    alt="Mutual funds"
                    className="row-icon"
                  />
                )}
                {row[0]}
              </td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="brokerage-note">
        All charges are inclusive of GST, exchange transaction charges,
        SEBI charges, and stamp duty, unless mentioned otherwise. Brokerage
        will not exceed the rates specified by SEBI and the exchanges.
      </p>
    </div>
  );
}

export default Brokerage;