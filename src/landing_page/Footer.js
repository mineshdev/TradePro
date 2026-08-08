import React from "react";

/* ---- Plain inline SVG icons (no external package needed) ---- */
const Twitter = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.8L4.1 22H1l8.1-9.3L.9 2H8l5 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
  </svg>
);
const Facebook = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
  </svg>
);
const Instagram = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const Linkedin = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.9 8.4H3.6V21h3.3V8.4ZM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM21 21h-3.3v-6.3c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.9V8.4h3.2v1.7h.1c.4-.8 1.6-1.7 3.2-1.7 3.4 0 4.6 2.2 4.6 5.1V21Z" />
  </svg>
);
const Youtube = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23 12s0-3.6-.5-5.3a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.6a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.5 5.3a3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.6a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);
const MessageCircle = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4 8.5 8.5 0 0 1-3.7-.8L3 21l1.9-5.7A8.4 8.4 0 0 1 21 11.5Z" />
  </svg>
);
const Send = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="zf-footer">
      <style>{`
        .zf-footer {
          background-color: #f7f7f7;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          border-top: 1px solid #e6e6e6;
          padding: 48px 0 0;
          box-sizing: border-box;
        }
        .zf-footer *, .zf-footer *::before, .zf-footer *::after {
          box-sizing: border-box;
        }
        .zf-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .zf-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr;
          gap: 24px;
          padding-bottom: 40px;
        }
        .zf-brand-col {
          min-width: 200px;
        }
        .zf-logo-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }
        .zf-logo-mark {
          color: #387ed1;
          font-size: 22px;
        }
        .zf-logo-text {
          color: #387ed1;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.5px;
        }
        .zf-copy-text {
          color: #53626f;
          font-size: 13.5px;
          margin: 3px 0;
        }
        .zf-social-row {
          display: flex;
          gap: 16px;
          margin: 16px 0;
        }
        .zf-icon {
          color: #53626f;
          cursor: pointer;
        }
        .zf-divider {
          border-top: 1px solid #e0e0e0;
          width: 100%;
          margin: 4px 0;
        }
        .zf-badge-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .zf-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #333;
          border-radius: 6px;
          padding: 6px 12px;
          width: 170px;
          background-color: #000;
          color: #fff;
        }
        .zf-badge-icon {
          font-size: 18px;
        }
        .zf-badge-small {
          font-size: 9px;
          line-height: 10px;
        }
        .zf-badge-big {
          font-size: 14px;
          font-weight: 600;
          line-height: 16px;
        }
        .zf-link-col {
          min-width: 140px;
        }
        .zf-heading {
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 700;
          margin: 0 0 18px 0;
        }
        .zf-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .zf-link {
          color: #53626f;
          text-decoration: none;
          font-size: 14.5px;
        }
        .zf-link:hover {
          text-decoration: underline;
        }
        .zf-legal-section {
          border-top: 1px solid #e6e6e6;
          padding: 24px 0;
        }
        .zf-legal-text {
          color: #909090;
          font-size: 12.5px;
          line-height: 1.7;
          margin: 0 0 16px 0;
        }
        .zf-inline-link {
          color: #387ed1;
          text-decoration: none;
        }
        .zf-inline-link:hover {
          text-decoration: underline;
        }
        .zf-bottom-bar {
          border-top: 1px solid #e6e6e6;
          padding: 20px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          justify-content: center;
        }
        .zf-bottom-link {
          color: #3a3a3a;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
        }
        .zf-bottom-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .zf-top-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .zf-top-grid {
            grid-template-columns: 1fr;
          }
          .zf-container {
            padding: 0 20px;
          }
        }
      `}</style>

      <div className="zf-container">
        {/* ===== Top grid: brand + 4 link columns ===== */}
        <div className="zf-top-grid">
          {/* Brand column */}
          <div className="zf-brand-col">
            <div className="zf-logo-row">
              <span className="zf-logo-mark">▮</span>
              <span className="zf-logo-text">ZERODHA</span>
            </div>
            <p className="zf-copy-text">© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p className="zf-copy-text">All rights reserved.</p>

            <div className="zf-social-row">
              <Twitter className="zf-icon" />
              <Facebook className="zf-icon" />
              <Instagram className="zf-icon" />
              <Linkedin className="zf-icon" />
            </div>

            <div className="zf-divider" />

            <div className="zf-social-row">
              <Youtube className="zf-icon" />
              <MessageCircle className="zf-icon" />
              <Send className="zf-icon" />
            </div>

            <div className="zf-badge-row">
              <div className="zf-badge">
                <span className="zf-badge-icon">▶</span>
                <div>
                  <div className="zf-badge-small">GET IT ON</div>
                  <div className="zf-badge-big">Google Play</div>
                </div>
              </div>
              <div className="zf-badge">
                <span className="zf-badge-icon"></span>
                <div>
                  <div className="zf-badge-small">Download on the</div>
                  <div className="zf-badge-big">App Store</div>
                </div>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="zf-link-col">
            <h4 className="zf-heading">Account</h4>
            <ul className="zf-list">
              {[
                "Open demat account",
                "Minor demat account",
                "NRI demat account",
                "HUF demat account",
                "Commodity",
                "Dematerialisation",
                "Fund transfer",
                "MTF",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="zf-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="zf-link-col">
            <h4 className="zf-heading">Support</h4>
            <ul className="zf-list">
              {[
                "Contact us",
                "Support portal",
                "How to file a complaint?",
                "Status of your complaints",
                "Bulletin",
                "Circular",
                "Z-Connect blog",
                "Downloads",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="zf-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="zf-link-col">
            <h4 className="zf-heading">Company</h4>
            <ul className="zf-list">
              {[
                "About",
                "Philosophy",
                "Press & media",
                "Careers",
                "Zerodha Cares (CSR)",
                "Zerodha.tech",
                "Open source",
                "Referral program",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="zf-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="zf-link-col">
            <h4 className="zf-heading">Quick links</h4>
            <ul className="zf-list">
              {[
                "Upcoming IPOs",
                "Brokerage charges",
                "Market holidays",
                "Economic calendar",
                "Calculators",
                "Markets",
                "Sectors",
                "Gift Nifty",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="zf-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Legal / disclosure section ===== */}
        <div className="zf-legal-section">
          <p className="zf-legal-text">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI Registration no.:
            INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI
            Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru
            - 560078, Karnataka, India. For any complaints pertaining to securities broking please
            write to{" "}
            <a href="#" className="zf-inline-link">complaints@zerodha.com</a>, for DP related to{" "}
            <a href="#" className="zf-inline-link">dp@zerodha.com</a>. Please ensure you carefully
            read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p className="zf-legal-text">
            Procedure to file a complaint on{" "}
            <a href="#" className="zf-inline-link">SEBI SCORES</a>: Register on SCORES portal.
            Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
            E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>

          <p className="zf-legal-text">
            <a href="#" className="zf-inline-link">Smart Online Dispute Resolution</a> |{" "}
            <a href="#" className="zf-inline-link">Grievances Redressal Mechanism</a>
          </p>

          <p className="zf-legal-text">
            Investments in securities market are subject to market risks; read all the related
            documents carefully before investing.
          </p>

          <p className="zf-legal-text">
            Attention investors: 1 Stock brokers can accept securities as margins from clients
            only by way of pledge in the depository system w.e.f September 01, 2020. 2 Update
            your e-mail and phone number with your stock broker / depository participant and
            receive OTP directly from depository on your e-mail and/or mobile number to create
            pledge. 3 Check your securities / MF / bonds in the consolidated account statement
            issued by NSDL/CDSL every month.
          </p>

          <p className="zf-legal-text">
            India's largest broker based on networth as per NSE.{" "}
            <a href="#" className="zf-inline-link">NSE broker factsheet</a>
          </p>

          <p className="zf-legal-text">
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email
            IDs with your stock brokers/depository participants. Receive information of your
            transactions directly from Exchange/Depositories on your mobile/email at the end of
            the day. Issued in the interest of investors. KYC is one time exercise while dealing
            in securities markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you
            approach another intermediary." Dear Investor, if you are subscribing to an IPO, there
            is no need to issue a cheque. Please write the Bank account number and sign the IPO
            application form to authorize your bank to make payment in case of allotment. In case
            of non allotment the funds will remain in your bank account. As a business we don't
            give stock tips, and have not authorized anyone to trade on behalf of others. If you
            find anyone claiming to be part of Zerodha and offering such services, please{" "}
            <a href="#" className="zf-inline-link">create a ticket here</a>.
          </p>

          <p className="zf-legal-text">
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting
            Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will
            not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR,
            or arbitration mechanism for such products.
          </p>

          <p className="zf-legal-text">
            Fixed deposit products offered on this platform are third-party products (TPP) and are
            not Exchange traded products. These are offered through Blostem Fintech Private
            Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting
            solely as a distributor for these products. Any disputes arising with respect to such
            distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor
            Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by
            the Reserve Bank of India (RBI).
          </p>
        </div>

        {/* ===== Bottom mini-links bar ===== */}
        <div className="zf-bottom-bar">
          {[
            "NSE",
            "BSE",
            "MCX",
            "MSEI",
            "Terms & conditions",
            "Policies & procedures",
            "Privacy policy",
            "Disclosure",
            "For investor's attention",
            "Investor charter",
            "Sitemap",
          ].map((item) => (
            <a key={item} href="#" className="zf-bottom-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;