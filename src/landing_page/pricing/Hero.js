import React from "react";

const stats = [
  {
    value: "0",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.",
  },
  {
    value: "20",
    title: "Intraday and F&O trades",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
  },
  {
    value: "0",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
  },
];

function Hero() {
  return (
    <div className="pricing-hero">
      <style>{`
        .pricing-hero {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 40px 60px;
          text-align: center;
        }
        .pricing-hero h1 {
          font-size: 30px;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }
        .pricing-hero .subtitle {
          font-size: 17px;
          color: #999;
          margin-bottom: 80px;
        }
        .pricing-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-value-wrap {
          position: relative;
          display: inline-flex;
          align-items: flex-start;
          margin-bottom: 30px;
        }
        .stat-rupee {
          font-size: 34px;
          font-weight: 700;
          color: #f5a623;
          margin-top: 6px;
        }
        .stat-value {
          font-size: 100px;
          font-weight: 700;
          color: #f5a623;
          line-height: 1;
        }
        .stat-dots {
          position: absolute;
          right: -30px;
          top: 10px;
          width: 60px;
          height: 60px;
        }
        .stat-title {
          font-size: 22px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        .stat-description {
          font-size: 15px;
          color: #777;
          line-height: 1.7;
          max-width: 320px;
        }

        @media (max-width: 900px) {
          .pricing-stats {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>

      <h1>Charges</h1>
      <p className="subtitle">List of all charges and taxes</p>

      <div className="pricing-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-value-wrap">
              <span className="stat-rupee">₹</span>
              <span className="stat-value">{stat.value}</span>
              <svg className="stat-dots" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="26"
                  fill="none"
                  stroke="#387ed1"
                  strokeWidth="3"
                  strokeDasharray="1 8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="stat-title">{stat.title}</div>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;