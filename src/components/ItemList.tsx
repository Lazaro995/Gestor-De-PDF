import React, { FC } from 'react';

interface Item {
    name: string;
    quantity: number;
    price: number;
}

interface ItemListProps {
    items: Item[];
    handleItemChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
    addItem: () => void;
    deleteItem: (index: number) => void;
}

const ItemList: FC<ItemListProps> = ({ items, handleItemChange, addItem, deleteItem }) => {
    return (
        <div className="mb-4">
            {items.map((item, index) => (
                <div key={index} className="mb-4 flex items-center">
                    <div className="mr-4">
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(event) => handleItemChange(index, event)}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mr-4">
                        <label className="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(event) => handleItemChange(index, event)}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mr-4">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={item.price}
                            onChange={(event) => handleItemChange(index, event)}
                            className="border p-2 w-full"
                        />
                    </div>
                    <button onClick={() => deleteItem(index)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </div>
            ))}
            <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded">Add Item</button>
        </div>
    );
};

export default ItemList;
