"use client";

import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-500">Connection Error</h1>
        <p className="text-lg text-gray-700 mt-4">
          Oops! We couldn't connect to the server. Please check your internet
          connection and try again.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
