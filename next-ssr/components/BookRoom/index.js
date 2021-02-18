import Room from "../../components/room";
import Link from "next/link";
import { useCart, useDispatchCart } from "../../providers/CartProvider";
import { getCartTotal, getCartQuantity, addSlug, addHotelName } from "../../actions";

import { useRouter } from "next/router";

const BookRoom = ({ rooms, slug, hotel_name }) => {
  const { dispatch } = useDispatchCart();

  const router = useRouter();
  const {
    state: { data: cart },
  } = useCart();

  const handleQuantity = () => {
    const total = getCartTotal({
      dispatch,
      payload: cart,
    });
    getCartQuantity({
      dispatch,
      payload: cart,
    });
    addSlug({ dispatch, slug });
    addHotelName({dispatch, hotel_name})
    router.push(`/payment`);
  };
  return (
    <div className="sph-room-list hotel_rooms">
      {rooms ? rooms.map((room) => <Room room={room} key={room._id} />) : ""}

      <div className="sph-room-action">
        <button
          type="button"
          className="new-btn-primary space-top"
          onClick={() => handleQuantity()}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookRoom;
