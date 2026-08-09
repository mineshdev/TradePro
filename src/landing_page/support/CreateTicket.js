import React, { useState } from "react";

const CreateTicket = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket submitted successfully!");
  };

  const styles = {
    container: {
      background: "#fff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      flex: 1,
    },
    heading: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      height: "100px",
      marginBottom: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
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
    <div style={styles.container}>
      <h2 style={styles.heading}>Create a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          style={styles.input}
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Account">Account</option>
          <option value="Kite">Kite</option>
          <option value="Console">Console</option>
          <option value="Coin">Coin</option>
        </select>
        <textarea
          style={styles.textarea}
          name="description"
          placeholder="Describe your issue"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
