import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { getAuthToken } from "../redux/actions/auth";

const Register = () => {
  const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    const res = await api.post("/register", JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.data.token);
    dispatch(getAuthToken(res.data.data.token));

  };
  return (
    <div className="max-w-xxl">
      <form
        className="p-3 max-w-xxl"
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <div className="columns-3">
          {" "}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Customer Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address" />
            </div>
            <TextInput
              id="address"
              name="address"
              type="text"
              required
              placeholder="Enter Your Address"
              onChange={(event) =>
                setFormData({ ...formData, address: event.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="township_id" value="Select your country" />
            </div>
            <Select
              id="township_id"
              name="township_id"
              required
              value={formData.township_id || ""}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  township_id: event.target.value,
                })
              }
            >
              <option value="">Select your country</option>
              <option value="1">United States</option>
              <option value="2">Canada</option>
              <option value="3">France</option>
              <option value="4">Germany</option>
            </Select>
          </div>
        </div>
        <div className="columns-3">
          {" "}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput
              id="phone"
              type="number"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Enter Your Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Register;
