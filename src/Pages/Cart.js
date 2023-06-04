import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cartitem from "../Component/Cartitem";
import { NavLink } from "react-router-dom";
import "../Component/Product.css";

const Cart = () => {
  const { Cart } = useSelector((state) => state);
  console.log(Cart);
  const [totalAmout, settotalAmout] = useState(0);

  useEffect(() => {
    settotalAmout(Cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [Cart]);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {Cart.length > 0 ? (
          Cart.map((curr, index) => {
            return <Cartitem key={curr.id} cart={curr} itemindex={index} />;
          })
        ) : (
          <div>
            <p style={{ position: "absolute", top: "350px", left: "655px" }}>
              Empty Cart
            </p>


            <br />
           
            <NavLink to="/">
              <div>
                <button
                  style={{
                    width: "100px",
                    height: "50px",
                    position: "absolute",
                    top: "400px",
                    left: "650px",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </NavLink>
          </div>
        )}
       </div>

      <div
        style={{
          width: "500px",
          height: "600px",
          position: "absolute",
          top: "100px",
          left: "850px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <div>Your Cart</div>
        <div>Your Summary</div>
        <p>
          <span
            style={{
              width: "100px",
              height: "50px",
              position: "absolute",
              top: "250px",
              left: "0px",
            }}
          >
            Total Items: {Cart.length}
          </span>
        </p>
        <div>
          <p
            style={{
              width: "100px",
              height: "50px",
              position: "absolute",
              top: "350px",
              left: "0px",
            }}
          >
            Total Amount: ${totalAmout}
          </p>
        </div>
        <button className="button-checkout">Check out</button>
      </div>
    </>
  );
};

export default Cart;
