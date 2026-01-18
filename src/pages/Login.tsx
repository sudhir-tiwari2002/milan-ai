import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border rounded p-2" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;