import React from "react";

function SupportPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Support</h1>
      <p className="text-muted">
        Need help? Browse our support resources or reach out to our team.
      </p>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Help Center</h5>
              <p className="card-text">
                Find answers to frequently asked questions and step-by-step
                guides.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">
                Reach out to our support team for personalised assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;