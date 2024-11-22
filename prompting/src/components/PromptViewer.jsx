import React from 'react';

const PromptViewer = ({ prompt }) => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
      <h3>Generated Prompt:</h3>
      <p>{prompt || "Your prompt will appear here..."}</p>
    </div>
  );
};

export default PromptViewer;
