import {
  Button,
  Label,
  Select,
  Table,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../redux/actions/products/index";
import { api } from "../api";
import { useNavigate } from "react-router";

const Cart = () => {
  let cartItems = useSelector((state) => state.addToCart.addToCartItems);
  // let authToken = useSelector((state) => state.getToken.authToken);
  const getAuthTokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeCartItemAction = (item) => {
    dispatch(removeCartItem(item));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const authToken = getAuthTokenFromLocalStorage();
    console.log(authToken);
    if (authToken != null) {
      console.log(authToken);
      const res = await api.post("/sale/store", cartItems, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(res.data);
      // console.log(authToken);
    } else {
      navigate("/login");
    }
  };

  const [checkOutStatus, setCheckOutStatus] = useState(false);
  let totalPrice = 0;
  let totalQty = 0;

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Qty</Table.HeadCell>
          <Table.HeadCell>Sub Total</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cartItems.map((item) => {
            totalPrice += parseInt(item.price) * parseInt(item.qty);
            totalQty += parseInt(item.qty);

            return (
              <Table.Row
                key={item.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <img
                    className="w-24"
                    src={item.image}
                    alt="product_image"
                  />{" "}
                </Table.Cell>
                <Table.Cell>{item.category.name}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.qty}</Table.Cell>
                <Table.Cell>
                  {parseInt(item.qty) * parseInt(item.price)}
                </Table.Cell>

                <Table.Cell>
                  <button
                    onClick={() => removeCartItemAction(item)}
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Remove
                  </button>
                </Table.Cell>
              </Table.Row>
            );
          })}

          <Table.Row>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>Total</p>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>{totalQty}</p>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>{totalPrice}</p>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <button
                onClick={() => setCheckOutStatus(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-3"
              >
                Proceed To CheckOut{" "}
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {checkOutStatus == true ? (
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
                  <Label htmlFor="description" value="Order Note" />
                </div>
                <Textarea
                  name="description"
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      description: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
