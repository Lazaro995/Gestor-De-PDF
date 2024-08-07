import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

// Configurar el worker de pdfjs

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
    const [file, setFile] = useState<string | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <input
                type="file"
                onChange={(e) => {
                    const file = e.target.files ? e.target.files[0] : null;
                    if (file) {
                        setFile(URL.createObjectURL(file));
                    }
                }}
            />
            {file && (
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            )}
        </div>
    );
};

export default PDFViewer;
