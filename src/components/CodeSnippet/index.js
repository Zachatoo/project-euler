import React from 'react';

export const CodeSnippet = ({ children }) => {
  return (
    <div className="bg-gray-300 rounded-lg mb-1">
      <code className="flex flex-wrap whitespace-pre-wrap text-black px-3 py-2">
        { children }
      </code>
    </div>
  );
}

export default CodeSnippet;