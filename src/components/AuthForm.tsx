import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            navigate('/document-upload');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg transform hover:translate-y-1 transition-transform duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
