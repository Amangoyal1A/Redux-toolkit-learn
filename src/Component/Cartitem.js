import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/Cartslices";

const Cartitem = ({ cart, itemindex }) => {
  const dispatch = useDispatch();
  const { Cart } = useSelector((state) => state);

  function removeitem() {
    dispatch(remove(cart.id))
  }

  return (
    <div className="card-container">
      <img src={cart.image} />

      <div className="card-content">
        <p className="card-title">{cart.title}</p>
        <p className="card-description">
          {cart.description.length > 60
            ? `${cart.description.substr(0, 60)}...`
            : cart.description}
          <p>{`$${cart.price}`}</p>
        </p>

        <button onClick={removeitem}>
          <BsFillTrash2Fill />
        </button>
      </div>
    </div>
  );
};

export default Cartitem;
