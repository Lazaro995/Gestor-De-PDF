import React from 'react';
import AuthForm from '../components/AuthForm';

const AuthView: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-center">
                <img src="/Logo.jpg" alt="Lizardy Logo" className="w-24 h-24 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-white mb-6">Lizardy PDF Manager</h1>
                <AuthForm />
            </div>
        </div>
    );
};

export default AuthView;
