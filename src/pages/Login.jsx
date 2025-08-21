import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center">Login</h1>
      <p className="text-sm mt-2 mb-6 text-gray-800 text-center">
        Welcome back! Please log in.
      </p>

      <form className="space-y-4">
        <InputField
          label="Enter your Email"
          placeholder="hello@reallygreatsite.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Enter Password"
          type="password"
          placeholder="********"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button text="Login" />
      </form>

      <p className="text-sm mt-6 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="text-orange-600 font-medium">
          Register
        </Link>
      </p>
    </Layout>
  );
};

export default Login;
