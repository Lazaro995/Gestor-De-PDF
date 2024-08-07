import { useState } from 'react';
import PDFViewer from './components/PDFViewer';
import PDFEditor from './components/PDFEditor';
import PDFDownloader from './components/PDFDownloader';

const App = () => {
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Manager</h1>
      <PDFViewer />
      <PDFEditor setPdfBytes={setPdfBytes} />
      <PDFDownloader pdfBytes={pdfBytes} />
    </div>
  );
};

export default App;
