import React from 'react';
import DocumentUpload from '../components/DocumentUpload';

const DocumentView: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Lizardy - Presentación de Documentación</h1>
                {/* Se muestra la tabla directamente */}
                <DocumentUpload />
            </div>
        </div>
    );
};

export default DocumentView;
