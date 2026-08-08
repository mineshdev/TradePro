import React from "react";

function ProductsPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Products</h1>
      <p className="text-muted">
        Explore our range of trading and investment products designed to
        help you grow your portfolio.
      </p>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Kite</h5>
              <p className="card-text">
                Our flagship trading platform, blazing fast and easy to use.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Console</h5>
              <p className="card-text">
                The backoffice for all your reports and analytics needs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Coin</h5>
              <p className="card-text">
                Direct mutual funds platform, invest with zero commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;