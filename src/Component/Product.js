import React, { useState } from "react";
import "../Component/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/Cartslices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ post }) => {
  const { Cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("item added");
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="card-container">
        <img src={post.image} />

        <div className="card-content">
          <p className="card-title">{post.title}</p>
          <p className="card-description">
            {post.description.length > 60
              ? `${post.description.substr(0, 60)}...`
              : post.description}
            <p>{`$${post.price}`}</p>
          </p>

          <button>
            {Cart.some((p) => p.id === post.id) ? (
              <p onClick={removeFromCart}> Remove</p>
            ) : (
              <p onClick={addToCart}>Add to Cart</p>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
