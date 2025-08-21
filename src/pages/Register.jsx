import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center">Register</h1>
      <p className="text-sm mt-2 mb-6 text-gray-800 text-center">
        Create your account
      </p>

      <form className="space-y-4">
        <InputField
          label="Enter your Name"
          placeholder="John Doe"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
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
        <Button text="Register" />
      </form>

      <p className="text-sm mt-6 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-600 font-medium">
          Login
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
