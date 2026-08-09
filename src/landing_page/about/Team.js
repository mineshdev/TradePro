import React from "react";

function Team() {
  return (
    <div className="people-section">
      <style>{`
        .people-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 40px 80px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
        }
        .people-heading {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin-bottom: 60px;
        }
        .person-row {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 60px;
          align-items: start;
          margin-bottom: 60px;
        }
        .person-photo-wrap {
          text-align: center;
        }
        .person-photo {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
        }
        .person-name {
          margin-top: 16px;
          font-size: 18px;
          font-weight: 500;
          color: #333;
        }
        .person-bio p {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 20px;
        }
        .person-bio a {
          color: #387ed1;
          text-decoration: none;
        }
        .person-bio a:hover {
          text-decoration: underline;
        }

        @media (max-width: 800px) {
          .person-row {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>

      <h2 className="people-heading">People</h2>

      <div className="person-row">
        <div className="person-photo-wrap">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="person-photo"
          />
          <div className="person-name">Nithin Kamath</div>
          <div class-title="person-title">Founder, CEO</div>
        </div>

        <div className="person-bio">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;