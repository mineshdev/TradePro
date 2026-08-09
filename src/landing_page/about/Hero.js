import React from "react";

function Hero() {
  return (
    <div className="about-page">
      <style>{`
        .about-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          color: #333;
        }
        .about-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px 60px;
        }
        .about-hero h1 {
          font-size: 28px;
          font-weight: 400;
          line-height: 1.5;
          color: #333;
          max-width: 750px;
        }
        .about-divider {
          border: none;
          border-top: 1px solid #eee;
          max-width: 1100px;
          margin: 0 auto;
        }
        .about-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .about-body p {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 20px;
        }
        .about-body a {
          color: #387ed1;
          text-decoration: none;
        }
        .about-body a:hover {
          text-decoration: underline;
        }

        @media (max-width: 800px) {
          .about-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero heading */}
      <div className="about-hero">
        <h1>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <hr className="about-divider" />

      {/* Two-column body */}
      <div className="about-body">
        <div>
          <p>
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company Zerodha, a combination of Zero and "Rodha", the Sanskrit
            word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year
            through our powerful ecosystem of investment platforms,
            contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        <div>
          <p>
            In addition, we run a number of popular open online educational
            and community initiatives to empower retail traders and
            investors.
          </p>
          <p>
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#">blog</a> or see what the
            media is <a href="#">saying about us</a> or learn more about our
            business and product <a href="#">philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;