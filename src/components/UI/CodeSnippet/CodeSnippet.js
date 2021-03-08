import React from 'react';

const CodeSnippet = ({ children }) => {
  return (
    <pre>
      <code>
        { children }
      </code>
    </pre>
  );
}

export default CodeSnippet;