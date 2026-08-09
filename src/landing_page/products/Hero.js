import React from "react";

function Hero() {
  return (
    <div className="products-hero">
      <style>{`
        .products-hero {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          padding: 100px 40px 60px;
        }
        .products-hero h1 {
          font-size: 34px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }
        .products-hero .tagline {
          font-size: 20px;
          color: #444;
          margin-bottom: 24px;
        }
        .products-hero .offerings-line {
          font-size: 16px;
          color: #333;
        }
        .products-hero .offerings-line a {
          color: #387ed1;
          text-decoration: none;
          font-weight: 500;
        }
        .products-hero .offerings-line a:hover {
          text-decoration: underline;
        }
        .products-hero-divider {
          border: none;
          border-top: 1px solid #eee;
          max-width: 1300px;
          margin: 60px auto 0;
        }
      `}</style>

      <h1>Zerodha Products</h1>
      <p className="tagline">Sleek, modern, and intuitive trading platforms</p>
      <p className="offerings-line">
        Check out our <a href="#">investment offerings</a> &rarr;
      </p>

      <hr className="products-hero-divider" />
    </div>
  );
}

export default Hero;