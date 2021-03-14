import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen min-w-screen overflow-hidden">
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;