import { Table } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../redux/actions/products/index";

const Cart = () => {
  let cartItems = useSelector((state) => state.addToCart.addToCartItems);

  const dispatch = useDispatch();
  const removeCartItemAction = (item) => {
    dispatch(removeCartItem(item));
  };
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {cartItems.map((item) => (
            <Table.Row
              key={item.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.id}
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
              <Table.Cell>
                <button
                  onClick={() => removeCartItemAction(item)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Cart;
