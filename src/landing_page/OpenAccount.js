import React from 'react';

function OpenAccount() {
    return (
        <div
            className='container-fluid text-center'
            style={{
                paddingTop: "100px",
                paddingBottom: "120px"
            }}
        >
            <h1
                style={{
                    fontSize: "32px",
                    fontWeight: "500",
                    color: "#424242",
                    marginBottom: "35px"
                }}
            >
                Open a Zerodha account
            </h1>

            <p
                style={{
                    fontSize: "18px",
                    color: "#666",
                    marginBottom: "60px"
                }}
            >
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
                and F&O trades.
            </p>

            <button
                style={{
                    backgroundColor: "#387ed1",
                    color: "white",
                    border: "none",
                    padding: "14px 45px",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderRadius: "4px"
                }}
            >
                Sign up for free
            </button>
        </div>
    );
}

export default OpenAccount;