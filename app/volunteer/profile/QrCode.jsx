import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = ({ data }) => {
  const [size, setSize] = useState(128);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <label className="mb-2 text-lg font-semibold">QR Code Generator</label>

      <div className="mb-4">
        <input
          type="text"
          value={data}
          onChange={() => {}}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="mr-2">Size:</label>
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          min="1"
          max="500"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="border p-4 rounded-md">
        <QRCode value={data} size={size} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
