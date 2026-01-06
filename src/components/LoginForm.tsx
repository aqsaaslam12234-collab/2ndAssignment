import { useState } from "react";

const LoginForm = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-teal-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Login Form
        </h1>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-teal-500 rounded-l flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              className="w-full pl-14 pr-4 py-3 border-2 border-teal-500 rounded focus:outline-none focus:border-teal-600"
            />
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-teal-500 rounded-l flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-14 pr-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="text-left">
            <a
              href="#"
              className="text-teal-500 text-sm hover:text-teal-600 transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-500 text-white py-3 rounded font-semibold hover:bg-teal-600 transition-colors shadow-md"
          >
            Login
          </button>
          <div className="text-center text-gray-600 text-sm mt-4">
            Not a member?{" "}
            <a
              href="#"
              className="text-teal-500 font-semibold hover:text-teal-600 transition-colors"
            >
              Signup now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
