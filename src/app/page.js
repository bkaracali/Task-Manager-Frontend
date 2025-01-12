'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie = 'loggedin=; path=/; max-age=0'; // Cookie sıfırlama
    setLoggedIn(false);
    router.push('/');
  };

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#002D74] text-white py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Task Manager</h1>
        <p className="text-lg mb-6">
          Manage your tasks efficiently and collaborate with your team in real-time.
        </p>
        <div className="flex gap-6">
          {loggedIn ? (
            <>
              <button
                onClick={handleSignOut}
                className="bg-[#002D74] text-white py-3 px-8 rounded-xl hover:scale-105 duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push('/login')}
                className="bg-[#002D74] text-white py-3 px-8 rounded-xl hover:scale-105 duration-300"
              >
                Login
              </button>
              <button
                onClick={() => router.push('/signup')}
                className="bg-[#002D74] text-white py-3 px-8 rounded-xl hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 text-center flex-grow">
        <h2 className="text-3xl font-bold text-[#002D74] mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Manage Stock</h3>
            <p className="text-gray-700 mb-4">
              Easily manage stock levels and create new stock items.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Password Remainder</h3>
            <p className="text-gray-700 mb-4">
            Create personalized password reminders to manage your account access.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Coming Soon</h3>
            <p className="text-gray-700">
              This feature is coming soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002D74] text-center p-6 text-white mt-auto">
        <p className="text-sm">&copy; 2025 All Rights Reserved.</p>
        <p className="text-sm">
          <a href="#about-us" className="hover:underline">About</a> | 
          <a href="#contact" className="hover:underline"> Contact</a> | 
          <a href="#privacy" className="hover:underline"> Privacy Policy</a>
        </p>
      </footer>
    </section>
  );
};

export default HomePage;
