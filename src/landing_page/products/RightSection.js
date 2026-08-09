import React from "react";

function RightSection({ image, title, description, links }) {
  return (
    <div className="right-section">
      <style>{`
        .right-section {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .right-section-content h2 {
          font-size: 32px;
          font-weight: 600;
          color: #333;
          margin-bottom: 24px;
        }
        .right-section-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 28px;
          max-width: 450px;
        }
        .right-section-links {
          display: flex;
          gap: 40px;
        }
        .right-section-content a {
          color: #387ed1;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .right-section-content a:hover {
          text-decoration: underline;
        }
        .right-section-image {
          width: 100%;
          height: auto;
        }

        @media (max-width: 900px) {
          .right-section {
            grid-template-columns: 1fr;
          }
          .right-section-content {
            order: 1;
          }
          .right-section-image {
            order: 2;
          }
          .right-section-content p {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="right-section-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="right-section-links">
          {links.map((link) => (
            <a href="#" key={link}>
              {link} &rarr;
            </a>
          ))}
        </div>
      </div>

      <img src={image} alt={title} className="right-section-image" />
    </div>
  );
}

export default RightSection;