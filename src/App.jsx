import React from 'react';
import Routing from './Routing';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header with background */}
      <header style={{
        backgroundColor: '#8B0000',
        padding: '20px',
        textAlign: 'center',
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>My React Website</h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: '30px 20px', minHeight: '70vh', textAlign: 'center', backgroundColor:"#e0f7fa"}}>
        <Routing />
      </main>

      {/* Footer with background */}
      <footer style={{
        backgroundColor: '#fff9c4',
        padding: '15px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666',
        boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.2)"
      }}>
        © 2025 My Website
      </footer>
    </div>
  );
};

export default App;