import React from "react";

function LeftSection({ image, title, description, links = [] }) {
  return (
    <div className="left-section">
      <style>{`
        .left-section {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .left-section-image {
          width: 100%;
          height: auto;
        }
        .left-section-content h2 {
          font-size: 32px;
          font-weight: 600;
          color: #333;
          margin-bottom: 24px;
        }
        .left-section-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 28px;
          max-width: 480px;
        }
        .left-section-links {
          display: flex;
          gap: 40px;
          margin-bottom: 32px;
        }
        .left-section-links a {
          color: #387ed1;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .left-section-links a:hover {
          text-decoration: underline;
        }
        .left-section-badges {
          display: flex;
          gap: 16px;
        }
        .badge {
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 6px;
          padding: 8px 16px;
          background-color: #000;
          color: #fff;
        }
        .badge-icon {
          font-size: 22px;
        }
        .badge-small {
          font-size: 10px;
          line-height: 12px;
        }
        .badge-big {
          font-size: 15px;
          font-weight: 600;
          line-height: 18px;
        }

        @media (max-width: 900px) {
          .left-section {
            grid-template-columns: 1fr;
          }
          .left-section-content p {
            max-width: 100%;
          }
        }
      `}</style>

      <img src={image} alt={title} className="left-section-image" />

      <div className="left-section-content">
        <h2>{title}</h2>
        <p>{description}</p>

        {links.length > 0 && (
          <div className="left-section-links">
            {links.map((link) => (
              <a href="#" key={link}>
                {link} &rarr;
              </a>
            ))}
          </div>
        )}

        <div className="left-section-badges">
          <div className="badge">
            <span className="badge-icon">&#9654;</span>
            <div>
              <div className="badge-small">GET IT ON</div>
              <div className="badge-big">Google Play</div>
            </div>
          </div>
          <div className="badge">
            <span className="badge-icon"></span>
            <div>
              <div className="badge-small">Download on the</div>
              <div className="badge-big">App Store</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;