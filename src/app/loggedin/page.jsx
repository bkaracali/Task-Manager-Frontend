'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoggedInPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feature, setFeature] = useState(null); // Hangi feature'ın modal'ı açılacak?
  const [modalContent, setModalContent] = useState(''); // Modal içeriği
  const [stockName, setStockName] = useState('');
  const [interval, setInterval] = useState('');
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie = 'loggedin=; path=/; max-age=0'; // Cookie sıfırlama
    setLoggedIn(false);
    router.push('/');
  };

  const handleProfile = () => {
    router.push('/profile'); // Profile sayfasına yönlendirme
  };

  const openModal = (featureName) => {
    setFeature(featureName);
    setIsModalOpen(true);

    // Modal içeriği belirle
    switch (featureName) {
      case 'manageStock':
        setModalContent(
          'Manage Stock functionality will allow you to manage stock levels and create new stock items.'
        );
        break;
      case 'setPassword':
        setModalContent(
          'Set Password functionality will help you set strong passwords for your account.'
        );
        break;
      default:
        setModalContent('');
        break;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFeature(null);
    setModalContent('');
  };

  const handleStockSubmit = () => {
    // Burada stock adı ve interval ile işlem yapılabilir
    console.log('Stock Name:', stockName);
    console.log('Interval:', interval);
  };

  return (
    <section className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#002D74] text-white py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Task Manager</h1>
        <p className="text-lg mb-6">
          Manage your tasks efficiently and collaborate with your team in real-time.
        </p>
        <div className="flex gap-6 items-center">
          {loggedIn ? (
            <>
              <button
                onClick={handleProfile}
                className="bg-[#002D74] text-white py-2 px-6 rounded-xl hover:scale-105 duration-300"
              >
                Profile
              </button>
              <button
                onClick={handleSignOut}
                className="bg-[#002D74] text-white py-2 px-6 rounded-xl hover:scale-105 duration-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="bg-[#002D74] text-white py-3 px-8 rounded-xl hover:scale-105 duration-300">
                Login
              </button>
              <button className="bg-[#002D74] text-white py-3 px-8 rounded-xl hover:scale-105 duration-300">
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
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Manage Stock</h3>
            <p className="text-gray-700 mb-4">
              Easily manage stock levels and create new stock items.
            </p>
            <button
              onClick={() => openModal('manageStock')}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Stock
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Password Remainder</h3>
            <p className="text-gray-700 mb-4">
              Create personalized password reminders to manage your account access.
            </p>
            <button
              onClick={() => openModal('setPassword')}
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Password Remainder
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#002D74] mb-8">Coming Soon</h3>
            <p className="text-gray-700">
              This feature is coming soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </section>

      {/* Modal Section */}
      {isModalOpen && feature === 'manageStock' && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          id="default-modal"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Manage Stock Feature
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {modalContent}
                </p>

                {/* Input Fields for Stock Name and Interval */}
                <div className="mt-4 space-y-4">
                  <div className="flex flex-col">
                    <label htmlFor="stockName" className="text-gray-700 font-medium">
                      Stock Name
                    </label>
                    <input
                      type="text"
                      id="stockName"
                      placeholder="Enter stock name"
                      value={stockName}
                      onChange={(e) => setStockName(e.target.value)}
                      className="mt-2 p-2 border rounded-md bg-gray-100 text-gray-900"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="interval" className="text-gray-700 font-medium">
                      Interval
                    </label>
                    <input
                      type="number"
                      id="interval"
                      placeholder="Enter interval"
                      value={interval}
                      onChange={(e) => setInterval(e.target.value)}
                      className="mt-2 p-2 border rounded-md bg-gray-100 text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleStockSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <button
                  onClick={closeModal}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-[#002D74] text-center p-6 text-white mt-auto">
        <p className="text-sm">&copy; 2025 All Rights Reserved.</p>
        <p className="text-sm">
        <a href="#about-us" className="hover:underline">About Us</a> | 
        {' '}<a href="#contact" className="hover:underline">
            Contact
          </a>{' '}
          |{' '}
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </footer>
    </section>
  );
};

export default LoggedInPage;
