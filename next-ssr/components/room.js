import React, { useState } from "react";
import {
  addQuantityByProduct,
  subtractQuantityByProduct,
  addToCart,
  removeFromCart,
} from "../actions";
import { useCart, useDispatchCart } from "../providers/CartProvider";
import Product from "../components/product";
import plusIcon from "../assets/svg/plus.svg";
import minusIcon from "../assets/svg/minus.svg"

const Room = ({ room }) => {
  const { _id, room_type, price, rooms_available, image_url } = room;
  const { dispatch } = useDispatchCart();
  const [quantity, setQuantity] = useState(0);
  const {
    state: { data: cart },
  } = useCart();

  

  const handleQuantity = ({ type, value }) => {
    let checkRoomType = undefined;

    if (cart) {
      checkRoomType = cart.find((item) => item.room_type === room_type);
    }

    if (checkRoomType !== undefined) {
      if (checkRoomType.room_type === room_type) {
        console.log("check: ", checkRoomType);
        switch (type) {
          case "add":
            setQuantity(quantity + 1);
            return addQuantityByProduct({
              dispatch,
              _id,
            });
          case "subtract":
            setQuantity(quantity - 1);
            return subtractQuantityByProduct({
              dispatch,
              _id,
            });
          default:
            return null;
        }
      }
    } else {
      switch (type) {
        case "add":
          setQuantity(quantity + 1);
          return addToCart({
            dispatch,
            payload: {
              _id,
              room_type,
              price,
              quantity: 1
            },
          });
        case "subtract":
          setQuantity(quantity - 1);
          return removeFromCart({
            dispatch,
            _id
          });

        default:
          return setQuantity(quantity);
      }
    }
  };

  return (
    <div className="sph-room hotel_room">
      <div className="sph-room-main">
        <div className="sph-room-image">
          <img src={image_url} />
        </div>
        <div className="sph-room-details">
          <h5>{room_type}</h5>
          <div className="sph-room-price-container ">
            <p className="hotel-price">{price}</p>

            <p className="sph-room-price sph-range ">
              {price}
              <span>avg/night</span>
            </p>
          </div>
        </div>
        <div className="sph-room-button-box">
          <div className="number-of-rooms">
            <button
              className="btn-decrease"
              onClick={() =>
                handleQuantity({
                  type: "subtract",
                })
              }
            ><img src={minusIcon}/></button>

            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value )}
              />
            <button
              className="btn-increase font-white"
              onClick={() =>
                handleQuantity({
                  type: "add",
                })
              }
            ><img src={plusIcon}/></button>

            <p className="sph-room-selected room-selected">{quantity} room selected</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Room;
