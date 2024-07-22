import Image from "next/image";
import React, { useState } from "react";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="">
      {selectedFile && (
      <div className=" mb-2 rounded w-56">
      <Image
            width={50}
            height={50}
            src={URL.createObjectURL(selectedFile)}
            alt="Selected"
            className="max-w-full max-h-40 mb-4 rounded-md"
          />
        </div>
      )}
      <div className="mb-2 rounded max-w-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
      </div>
    </div>
  );
}

export default ImageUpload;
