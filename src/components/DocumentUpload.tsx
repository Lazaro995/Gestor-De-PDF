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
            console.log('File uploaded:', selectedFile.name);
            alert(`File ${selectedFile.name} uploaded successfully!`);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Presentación de Documentación</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Seleccionar archivo PDF</label>
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-gray-50 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
            </div>
            <button
                onClick={handleUpload}
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-lg transform hover:translate-y-1 transition-transform duration-300"
            >
                Subir Archivo
            </button>
            {selectedFile && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
                    <p className="text-gray-700"><strong>Archivo seleccionado:</strong> {selectedFile.name}</p>
                </div>
            )}
        </div>
    );
};

export default DocumentUpload;
