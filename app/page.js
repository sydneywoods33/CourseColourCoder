import React from 'react';
import './components/styles.css';
import FormPage from './components/form';
import GenerateButton from './components/generateButton';

function Page() {
  return (
    <div className="appBackground">
      <div className="container">
        <header className="header">
          <h1 className="title">Course Colour Coder</h1>
          <p className="description">
            Add your course codes, then generate a colour scheme to go with them!
          </p>
        </header>
        {/* Render FormPage and GenerateButton components */}
        <FormPage />
        <GenerateButton />
      </div>
    </div>
  );
}


const styles = {
  appBackground: {
    backgroundColor: '#FCFCFC' ,
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center',
  }, 

  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#455073',
  },

  description: {
    fontSize: '1.2rem',
    color: '#666',
  }
}
export default Page;
