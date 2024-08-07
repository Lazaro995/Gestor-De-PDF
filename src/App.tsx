import React, { useState } from 'react';
import CustomerForm from './components/CustomerForm';
import ItemList from './components/ItemList';
import GenerateBillButton from './components/GenerateBillButton';

interface Item {
  name: string;
  quantity: number;
  price: number;
}

const App: React.FC = () => {
  const [customerName, setCustomerName] = useState<string>('');
  const [customerAddress, setCustomerAddress] = useState<string>('');
  const [items, setItems] = useState<Item[]>([{ name: '', quantity: 0, price: 0 }]);
  const [error, setError] = useState<boolean>(false);

  const handleItemChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItems((prevItems) => {
      const newItems = [...prevItems];
      if (name === 'quantity' || name === 'price') {
        newItems[index][name as 'quantity' | 'price'] = Number(value);
      } else {
        newItems[index][name as 'name'] = value;
      }
      return newItems;
    });
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0 }]);
  };

  const deleteItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bill Generator</h1>
      <CustomerForm
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerAddress={customerAddress}
        setCustomerAddress={setCustomerAddress}
      />
      <ItemList
        items={items}
        handleItemChange={handleItemChange}
        addItem={addItem}
        deleteItem={deleteItem}
      />
      {error && <p className="text-red-500">Please fill out all fields.</p>}
      <GenerateBillButton
        customerName={customerName}
        customerAddress={customerAddress}
        items={items}
        setError={setError}
      />
    </div>
  );
};

export default App;
