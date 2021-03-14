import React from 'react';

export const Overlay = ({ setOverlayVisible }) => (
  <div
    className="fixed w-screen h-screen inset-0 bg-gray-600 bg-opacity-70 z-10"
    onClick={() => setOverlayVisible(false)}
  />
);

export default Overlay;