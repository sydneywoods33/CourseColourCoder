"use client";

import React, { useState } from 'react';
import FormPage from './components/form';
import GenerateButton from './components/generateButton';

function Page() {
  const [courseCodes, setCourseCodes] = useState([]);

  const handleGenerate = () => {
    console.log("Course Codes:", courseCodes);
    alert("Colors have been generated for your courses!");
  };

  return (
    <div style={styles.appBackground}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Course Colour Coder</h1>
          <p style={styles.description}>
            Add your course codes, then generate a colour scheme to go with them!
          </p>
        </header>
        <FormPage setCourseCodes={setCourseCodes} />
        <GenerateButton onGenerate={handleGenerate} />
      </div>
    </div>
  );
}

const styles = {
  appBackground: {
    backgroundColor: '#eaeaea',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  header: {
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#455073',
  },
  description: {
    fontSize: '1.2rem',
    color: 'grey',
  },
};

export default Page;