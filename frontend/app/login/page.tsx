"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // ==================
  // handle form change
  //   =================
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   handle submit button
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        // Save token in cookies
        Cookies.set("token", data?.access_token, { expires: 2 });
        Cookies.set("permissions", JSON.stringify(data?.permissions), {
          expires: 2,
        });

        router.push("/dashboard");
      } else {
        setError(
          data?.message || "Login failed. Please check your credentials.",
        );
      }
    } catch (error) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 p-5 rounded-lg shadow-xl border border-gray-200">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="text-gray-600 text-sm">
            Enter your details to continue
          </p>
        </div>

        {error && (
          <div className="text-red-800 text-sm my-3 bg-red-200 rounded border border-red-200 border-l-2 border-l-red-800 p-1">
            {error}
          </div>
        )}

        {/* submit form  */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-5">
          <div className="space-y-1">
            <label className="block text-sm" htmlFor="Email">
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              value={formData?.email}
              onChange={handleFormChange}
              className="w-full text-sm p-2 rounded-xl text-gray-900 outline-none border border-gray-300"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm" htmlFor="Password">
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              value={formData?.password}
              onChange={handleFormChange}
              className="w-full text-sm p-2 rounded-xl text-gray-900 outline-none border border-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-center gap-1">
              <input type="checkbox" />
              <label htmlFor="Remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 text-white font-semibold text-sm py-2 rounded-xl hover:bg-orange-700 cursor-pointer duration-100"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
