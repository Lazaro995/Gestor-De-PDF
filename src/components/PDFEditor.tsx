import { PDFDocument } from 'pdf-lib';

interface PDFEditorProps {
    setPdfBytes: React.Dispatch<React.SetStateAction<Uint8Array | null>>;
}

const PDFEditor: React.FC<PDFEditorProps> = ({ setPdfBytes }) => {
    const createPdf = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
        page.drawText('Hello, world!');
        const pdfBytes = await pdfDoc.save();
        setPdfBytes(pdfBytes);
    };

    return (
        <div>
            <button onClick={createPdf} className="bg-blue-500 text-white px-4 py-2 rounded">
                Create PDF
            </button>
        </div>
    );
};

export default PDFEditor;
