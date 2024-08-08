import React, { useState, FC } from 'react';

const DocumentUpload: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Aquí podrías agregar la lógica de subida del archivo
      console.log('File uploaded:', selectedFile.name);
      alert(`File ${selectedFile.name} uploaded successfully!`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Presentación de documentación</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 w-full border border-gray-300 p-2 rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Upload
      </button>
      {selectedFile && (
        <div className="mt-4">
          <p><strong>Selected File:</strong> {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
