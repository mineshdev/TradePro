import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

const SupportPage = () => {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
      display: "flex",
      gap: "40px",
      marginTop: "30px",
      width: "80%",
    },
    faq: {
      background: "#f1f3f4",
      padding: "20px",
      borderRadius: "8px",
      flex: 0.5,
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: "10px",
      color: "#333",
    },
  };

  return (
    <div style={styles.page}>
      <Hero />
      <div style={styles.content}>
        <CreateTicket />
        <aside style={styles.faq}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Account Opening</li>
            <li style={styles.listItem}>Kite Login Issues</li>
            <li style={styles.listItem}>Fund Withdrawal</li>
            <li style={styles.listItem}>Margin & Pledging</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SupportPage;
