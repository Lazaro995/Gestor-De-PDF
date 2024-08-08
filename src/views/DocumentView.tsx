import React from 'react';
import DocumentUpload from '../components/DocumentUpload';

const DocumentView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DocumentUpload />
    </div>
  );
};

export default DocumentView;
