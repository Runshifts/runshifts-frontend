import Image from "next/image";
import React, { useState } from "react";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100  mb-2 p-2 rounded-md shadow-md w-96">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        {selectedFile && (
          <div>
            <Image
              width={50}
              height={50}
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="max-w-full max-h-40 mb-4 rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
