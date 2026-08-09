import React from "react";

const Hero = () => {
  const styles = {
    hero: {
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      padding: "60px 20px",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "10px",
    },
    text: {
      color: "#555",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#1e88e5",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.hero}>
      <h1 style={styles.heading}>Need help with your account?</h1>
      <p style={styles.text}>Search for answers or create a support ticket below.</p>
      <button style={styles.button}>Create a ticket</button>
    </section>
  );
};

export default Hero;
