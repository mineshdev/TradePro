import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "70vh" }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", color: "#387ed1" }}>
        404
      </h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn"
        style={{
          backgroundColor: "#387ed1",
          color: "#fff",
          padding: "10px 24px",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Go back home
      </Link>
    </div>
  );
}

export default PageNotFound;