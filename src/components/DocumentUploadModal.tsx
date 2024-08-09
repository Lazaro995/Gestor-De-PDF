import { FC } from 'react';
import Modal from 'react-modal';

interface DocumentUploadModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const DocumentUploadModal: FC<DocumentUploadModalProps> = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Presentar Documento"
            className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
            <h2 className="text-2xl font-bold mb-4">Presentar Documento</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Seleccionar archivo PDF</label>
                <input type="file" accept="application/pdf" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg" rows={4}></textarea>
            </div>
            <div className="flex justify-end">
                <button onClick={onRequestClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2">
                    Cancelar
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Aceptar
                </button>
            </div>
        </Modal>
    );
};

export default DocumentUploadModal;
