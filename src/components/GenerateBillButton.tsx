import { FC } from 'react';
import jsPDF from 'jspdf';

interface Item {
    name: string;
    quantity: number;
    price: number;
}

interface GenerateBillButtonProps {
    customerName: string;
    customerAddress: string;
    items: Item[];
    setError: (value: boolean) => void;
}

const GenerateBillButton: FC<GenerateBillButtonProps> = ({ customerName, customerAddress, items, setError }) => {
    const generateBill = () => {
        if (!customerName || !customerAddress || items.some((item) => !item.name || !item.quantity || !item.price)) {
            setError(true);
            return;
        }

        let doc = new jsPDF('p', 'pt');
        doc.setFontSize(24);
        doc.text('Bill', 40, 60);
        doc.setFontSize(10);
        doc.text('Bill Number: 123456', 40, 90);
        doc.text(`Date: ${new Date().toDateString()}`, 40, 110);
        doc.text(`Customer Name: ${customerName}`, 40, 130);
        doc.text(`Customer Address: ${customerAddress}`, 40, 150);

        doc.setFontSize(14);
        doc.text('Items:', 40, 200);
        doc.line(40, 210, 550, 210);

        doc.setFontSize(12);
        let yOffset = 240;
        let total = 0;
        items.forEach((item) => {
            let itemTotal = item.quantity * item.price;
            total += itemTotal;
            doc.text(`Item: ${item.name}`, 40, yOffset);
            doc.text(`Quantity: ${item.quantity}`, 200, yOffset);
            doc.text(`Price: $${item.price}`, 300, yOffset);
            doc.text(`Total: $${itemTotal}`, 400, yOffset);
            yOffset += 20;
        });

        doc.line(40, yOffset, 550, yOffset);
        doc.setFontSize(14);
        doc.text(`Total: $${total}`, 400, yOffset + 30);
        doc.save('bill.pdf');
    };

    return (
        <button onClick={generateBill} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Generate Bill</button>
    );
};

export default GenerateBillButton;
