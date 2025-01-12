export default function AuthForms() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Login Form */}
          <div className="p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2" htmlFor="login-email">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2" htmlFor="login-password">
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </form>
          </div>
  
          {/* Signup Form */}
          <div className="p-6 md:p-8 bg-gray-100">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Signup</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2" htmlFor="signup-name">
                  Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2" htmlFor="signup-email">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2" htmlFor="signup-password">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  