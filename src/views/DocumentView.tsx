import React, { useState } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import { motion } from 'framer-motion';

const DocumentView: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
            <div className="w-full max-w-md">
                <button
                    onClick={toggleDropdown}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4"
                >
                    {isOpen ? 'Close Document Upload' : 'Open Document Upload'}
                </button>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    className="overflow-hidden"
                >
                    <DocumentUpload />
                </motion.div>
            </div>
        </div>
    );
};

export default DocumentView;
