import { FC } from 'react';

interface CustomerFormProps {
    customerName: string;
    setCustomerName: (name: string) => void;
    customerAddress: string;
    setCustomerAddress: (address: string) => void;
}

const CustomerForm: FC<CustomerFormProps> = ({ customerName, setCustomerName, customerAddress, setCustomerAddress }) => {
    return (
        <div className="mb-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Customer Address"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
        </div>
    );
};

export default CustomerForm;
