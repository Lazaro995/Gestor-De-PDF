import React from 'react';
import { saveAs } from 'file-saver';

interface PDFDownloaderProps {
    pdfBytes: Uint8Array | null;
}

const PDFDownloader: React.FC<PDFDownloaderProps> = ({ pdfBytes }) => {
    const downloadPdf = () => {
        if (pdfBytes) {
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            saveAs(blob, 'document.pdf');
        }
    };

    return (
        <div>
            <button onClick={downloadPdf} className="bg-green-500 text-white px-4 py-2 rounded">
                Download PDF
            </button>
        </div>
    );
};

export default PDFDownloader;
