import { useState, FC } from 'react';
import DocumentUploadModal from './DocumentUploadModal';

const DocumentUpload: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Datos de ejemplo
    const documents = [
        {
            recurso: 'Elmon golito',
            criterio: 'Monotributista',
            documento: 'Pago de Monotributo',
            estadoAuditoria: 'Aprobado',
            aptitudDocumental: 'Apto',
            vencimiento: '31/12/2024'
        },

        {
            recurso: 'Mario Neta',
            criterio: 'Régimen General',
            documento: 'Constancia de Inscripción AFIP',
            estadoAuditoria: 'Pendiente',
            aptitudDocumental: 'No Apto',
            vencimiento: 'Presentación Única'
        },

        {
            recurso: 'Ana Conda',
            criterio: 'Régimen General',
            documento: 'Constancia de Inscripción AFIP',
            estadoAuditoria: 'Pendiente',
            aptitudDocumental: 'Apto parcial',
            vencimiento: 'Presentación Única'
        },

        {
            recurso: 'Tomas Turbado',
            criterio: 'Régimen General',
            documento: 'Constancia de Inscripción AFIP',
            estadoAuditoria: 'Pendiente',
            aptitudDocumental: 'No corresponde',
            vencimiento: 'Presentación Única'
        },
    ];

    return (
        <div className="max-w-full mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Presentación de Documentación</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="w-1/7 px-4 py-2">Recurso</th>
                        <th className="w-1/7 px-4 py-2">Criterio</th>
                        <th className="w-1/7 px-4 py-2">Documento</th>
                        <th className="w-1/7 px-4 py-2">Estado de Auditoría</th>
                        <th className="w-1/7 px-4 py-2">Aptitud Documental</th>
                        <th className="w-1/7 px-4 py-2">Vencimiento</th>
                        <th className="w-1/7 px-4 py-2">Presentación</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{doc.recurso}</td>
                            <td className="border px-4 py-2">{doc.criterio}</td>
                            <td className="border px-4 py-2">{doc.documento}</td>
                            <td className="border px-4 py-2">{doc.estadoAuditoria}</td>
                            <td className="border px-4 py-2">
                                <span className={`px-2 py-1 rounded-full ${doc.aptitudDocumental === 'Apto' ? 'bg-green-200 text-green-800 font-bold' :
                                    doc.aptitudDocumental === 'No Apto' ? 'bg-red-200 text-red-800 font-bold' :
                                        doc.aptitudDocumental === 'Apto parcial' ? 'bg-yellow-200 text-yellow-800 font-bold' :
                                            'bg-purple-200 text-purple-800 font-bold'
                                    }`}>
                                    {doc.aptitudDocumental}
                                </span>
                            </td>
                            <td className="border px-4 py-2">{doc.vencimiento}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={openModal}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Subir Archivo
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para subir archivos */}
            <DocumentUploadModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default DocumentUpload;
