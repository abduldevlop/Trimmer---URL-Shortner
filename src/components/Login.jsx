import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Yup from "yup";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./Error";
import useFeatchApi from "@/hooks/useFeatchApi";
import { login } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/context/Context";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { loading, error, fn: fnLogin, data } = useFeatchApi(login, formData);
  const { fetchUser } = UrlState();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  useEffect(() => {
    if (error === null && data) {
      fetchUser();
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
    }
  }, [error, data, fetchUser, navigate, longLink]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });
      await fnLogin();
    } catch (e) {
      const newErrors = {};
      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Login to your account if you already have one
        </CardDescription>
        {error && <Error message={error.message} />}
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleLogin} className="space-y-2">
          <div className="space-y-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
              value={formData.email}
            />
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInputChange}
              value={formData.password}
            />
            {errors.password && <Error message={errors.password} />}
          </div>
          <CardFooter>
            <Button type="submit">
              {loading ? <BeatLoader size={10} color="#36d7d7" /> : "Login"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
