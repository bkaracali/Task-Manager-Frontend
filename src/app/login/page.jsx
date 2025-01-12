'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { loginUser } from '../../../lib/api.js';
import { useRouter } from 'next/navigation'; // next/router'dan import edilen hata veriyor.

export default function LoginPage() {

  const [email, setemail] = useState('');
  const [loggedin, setloggedin] = useState(false);
  const [password, setpassword] = useState('');
  const [isAdmin, setisAdmin] = useState();
  const [showPassword, setShowPassword] = useState(false); // Şifreyi gösterme kontrolü

  const router = useRouter(); // Router'ı kullanarak yönlendirme yapacağız

  // Şifre görünürlüğünü değiştiren fonksiyon
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   // Login işlemi
   const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Backend'e login isteği gönderiyoruz.
      const userLoginDTO = { email, password };
      const response = await loginUser(userLoginDTO);

      // Giriş başarılıysa
      if (response) {
        document.cookie = "loggedin=true; path=/; max-age=86400"; // Cookie ayarı
        setloggedin(true);
        router.push('/loggedin'); // Giriş başarılı, yönlendirme yapılıyor.
      }
    } catch (error) {
      console.error('Login API error:', error.response || error);
      alert('Login failed: ' + error.response?.data?.message || error.message ||'Invalid credentials');
    }
  };

  return (
    <section onSubmit={handleLogin} className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Login Container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border text-black"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full text-black"
                type={showPassword ? 'text' : 'password'} // Şifreyi göster/gizle
                name="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              {/* Password visibility icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility} // İkon tıklama ile göster/gizle
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button type= "submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              {/* Diğer Path'leri Burada Kullan */}
            </svg>
            Login with Google
          </button>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs text-[#002D74]">
            <p>
              <Link href="/signup" className="font-bold">Don't have an account? Register</Link>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:block hidden w-1/2">
          <Image
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Login Background"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-100 text-center p-4 mt-auto'>
        <p className='text-sm text-gray-500'>
          © 2025 All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
