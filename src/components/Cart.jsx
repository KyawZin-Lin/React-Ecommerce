import {
  Button,
  Label,
  Select,
  Table,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../redux/actions/products";
import { api } from "../api";
import { useNavigate } from "react-router";

const Cart = () => {
  const cartItems = useSelector((state) => state.addToCart.addToCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [checkOutStatus, setCheckOutStatus] = useState(false);

  // Get auth token from localStorage
  const getAuthTokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };

  // Remove item from cart
  const removeCartItemAction = (item) => {
    dispatch(removeCartItem(item));
  };

  // Handle checkout submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const authToken = getAuthTokenFromLocalStorage();

    if (authToken) {
      try {
        const payload = {
          customer_name: formData.name, // Rename to customer_name
          address: formData.address,
          phone: formData.phone,
          email: formData.email,
          township_id: formData.township_id,
          note: formData.description, // Rename to note
          cartItems: cartItems.map((item) => ({
            product_id: item.product_id,
            variant_id: item.variant_id,
            quantity: item.quantity,
          })),
        };

        console.log(payload);
        const res = await api.post("/sale/store", payload, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        console.log("Checkout successful:", res.data);
        // // Optionally, clear the cart or navigate to a success page
      } catch (error) {
        console.error("Checkout failed:", error);
      }
    } else {
      navigate("/login");
    }
  };

  // Calculate total price and quantity
  let totalPrice = 0;
  let totalQty = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalQty += item.quantity;
  });

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell>Sub Total</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Remove</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cartItems.map((item) => (
            <Table.Row
              key={item.cartItemKey} // Use cartItemKey as the unique identifier
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.name}
              </Table.Cell>
              <Table.Cell>
                <img className="w-24" src={item.image} alt="product_image" />
              </Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell>{item.price * item.quantity}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => removeCartItemAction(item)}
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Remove
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell colSpan={3} className="font-bold">
              Total
            </Table.Cell>
            <Table.Cell className="font-bold">{totalQty}</Table.Cell>
            <Table.Cell className="font-bold">{totalPrice}</Table.Cell>
            <Table.Cell>
              <button
                onClick={() => setCheckOutStatus(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-3"
              >
                Proceed To Checkout
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {checkOutStatus && (
        <div className="max-w-xxl">
          <form className="p-3 max-w-xxl" onSubmit={submitHandler}>
            <div className="columns-3">
              <div>
                <Label htmlFor="name" value="Customer Name" />
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="address" value="Address" />
                <TextInput
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="Enter Your Address"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="township_id" value="Select your country" />
                <Select
                  id="township_id"
                  name="township_id"
                  required
                  value={formData.township_id || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, township_id: e.target.value })
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
              <div>
                <Label htmlFor="phone" value="Phone Number" />
                <TextInput
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="description" value="Order Note" />
                <Textarea
                  name="description"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;



