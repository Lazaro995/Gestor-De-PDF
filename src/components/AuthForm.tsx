import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if ((username === 'admin' && password === 'lizardy') || (username === 'user' && password === 'password')) {
            navigate('/document-upload');
        } else {
            alert('Credenciales inválidas');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Lizardy Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
            </form>
        </div>
    );
};

export default AuthForm;
