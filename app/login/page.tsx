"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (type: number) => {
    if (username === "admin" && password === "password") {
      if (type == 1) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/dashboard");
      } else {
        Cookies.set("isLoggedIn", "true", { expires: 7 }); // Cookie expires in 7 days
        router.push("/test_product_with_middleware");
      }
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={() => handleLogin(1)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => handleLogin(2)}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Second Login Protected Middeware
        </button>

        <Link
          href={"/test_product_with_middleware"}
          className="text-blue-500 mt-4 block"
        >
          Link test_product_with_middleware
        </Link>
        <Link href={"/dashboard"} className="text-blue-500 mt-4 block">
          Link test_to_ dashboard
        </Link>
        <Link href={"/news"} className="text-blue-500 mt-4 block">
          Link test_to News
        </Link>
      </div>
    </div>
  );
}
