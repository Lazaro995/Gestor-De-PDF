import React from 'react';
import AuthForm from '../components/AutoForm';

const AuthView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AuthForm />
    </div>
  );
};

export default AuthView;
