import React from 'react';

function Education() {
    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='row align-items-center'>

                <div className='col-6'>
                    <img
                        src='media/images/education.svg'
                        style={{
                            width: "90%",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </div>

                <div className='col-6' style={{ paddingLeft: "50px" }}>

                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "500",
                            marginBottom: "25px",
                            color: "#424242"
                        }}
                    >
                        Free and open market education
                    </h1>

                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: "1.8",
                            color: "#424242",
                            marginBottom: "25px"
                        }}
                    >
                        Varsity, the largest online stock market education book
                        in the world, covering everything from the basics to
                        advanced trading.
                    </p>

                    <a
                        href=''
                        style={{
                            textDecoration: "none",
                            color: "#387ed1",
                            fontSize: "16px"
                        }}
                    >
                        Varsity →
                    </a>

                    <p
                        style={{
                            fontSize: "17px",
                            lineHeight: "1.8",
                            color: "#424242",
                            marginTop: "50px",
                            marginBottom: "25px"
                        }}
                    >
                        TradingQ&A, the most active trading and investing
                        community in India for all your market related queries.
                    </p>

                    <a
                        href=''
                        style={{
                            textDecoration: "none",
                            color: "#387ed1",
                            fontSize: "16px"
                        }}
                    >
                        TradingQ&A →
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Education;