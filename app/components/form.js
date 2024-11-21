import React, { useState } from 'react';

export default function FormPage() {
  const [inputs, setInputs] = useState(["", "", ""]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Input Course Codes</h1>
      <form style={styles.form}>
        {inputs.map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Input ${index + 1}`}
            style={styles.input}
          />
        ))}
        <button
          type="button"
          style={styles.button}
          onClick={handleAddInput}
        >
          Add Another Input
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};
