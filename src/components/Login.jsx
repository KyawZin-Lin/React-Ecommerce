import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { getAuthToken } from "../redux/actions/auth";

const Login = () => {
  const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("clicked", formData);

    const res = await api.post("/login", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(res.data.data);
    dispatch(getAuthToken(res.data.data.token))
  };
  return (
    <div className="container max-w-md mx-auto">
      <form
        className="flex  max-w-md flex-col gap-4"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
