import React from "react";

const partners = [
  {
    logo: "media/images/zerodhaFundhouse.png",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    logo: "media/images/sensibullLogo.svg",
    name: "SENSIBULL",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    logo: null,
    icon: "T",
    iconBg: "transparent",
    name: "TIJORI",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    logo: "media/images/streakLogo.png",
    name: "Streak",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    logo: "media/images/smallcaseLogo.png",
    name: "smallcase",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    logo: "media/images/dittoLogo.png",
    name: "ditto",
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function Universe() {
  return (
    <div className="universe-section">
      <style>{`
        .universe-section {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 40px 100px;
          text-align: center;
        }
        .universe-title {
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        .universe-subtitle {
          font-size: 17px;
          color: #666;
          margin-bottom: 60px;
        }
        .universe-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
          margin-bottom: 50px;
        }
        .universe-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .universe-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .universe-logo-img {
          max-height: 44px;
          max-width: 200px;
          object-fit: contain;
        }
        .universe-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
        }
        .universe-name {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          white-space: pre-line;
          text-align: left;
          line-height: 1.2;
        }
        .universe-description {
          font-size: 14.5px;
          color: #777;
          line-height: 1.7;
          max-width: 320px;
        }
        .universe-btn {
          background-color: #387ed1;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 4px;
          cursor: pointer;
        }
        .universe-btn:hover {
          background-color: #2f6cb8;
        }

        @media (max-width: 900px) {
          .universe-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h2 className="universe-title">The Zerodha Universe</h2>
      <p className="universe-subtitle">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="universe-grid">
        {partners.map((partner) => (
          <div className="universe-item" key={partner.name}>
            <div className="universe-logo-row">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="universe-logo-img"
                />
              ) : (
                <>
                  <div
                    className="universe-icon"
                    style={{ backgroundColor: partner.iconBg }}
                  >
                    {partner.icon}
                  </div>
                  <div className="universe-name">{partner.name}</div>
                </>
              )}
            </div>
            <p className="universe-description">{partner.description}</p>
          </div>
        ))}
      </div>

      <button className="universe-btn">Sign up for free</button>
    </div>
  );
}

export default Universe;