// ToggleButton.js
import React from 'react';

const ToggleButton = ({ onClick }) => {
  return (
    <button className="fixed top-4 left-4 p-2 bg-gray-600 text-white" onClick={onClick}>
      Toggle Sidebar
    </button>
  );
};

export default ToggleButton;
