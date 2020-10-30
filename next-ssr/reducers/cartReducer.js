
const initialState = [];

const cartReducer = (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        data: state.data ? [...state.data, action.payload] : [action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== action._id),
      };
    case "ADD_QUANTITY":
      return {
        ...state,
        data: state.data.map(item => item._id === action._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
          )
      };
    case "SUBTRACT_QUANTITY":
      return {
        ...state,
        data: state.data.map((item) =>
          item._id === action._id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      }; 
      
      case "GET_CART_QUANTITY":
        return {
          ...state,
          items_quantity: state.data.reduce((count, curItem)=> {
            return count + curItem.quantity;
          }, 0)
        };
      case "GET_CART_TOTAL":
        return {
          ...state,
          items_cost: state.data.reduce((count, curItem)=> {
            return count + curItem.price * curItem.quantity;
          }, 0)
        }

        case "ADD_SLUG":
          return {
            ...state,
              slug: action.slug
          }
    default:
      return state;
  }
};

export default cartReducer;
