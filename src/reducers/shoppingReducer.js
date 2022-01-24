import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Audífonos",
      price: 340,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/001/932/991/small_2x/audio-headset-device-isolated-icon-free-vector.jpg",
    },
    {
      id: 2,
      name: "Control X",
      price: 550,
      imagen:
        "https://us.123rf.com/450wm/luplupme/luplupme1703/luplupme170300249/73281621-ilustraci%C3%B3n-de-vector-de-joystick-de-consola-de-juego.jpg?ver=6",
    },
    {
      id: 3,
      name: "Celular",
      price: 3000,
      imagen:
        "https://png.pngtree.com/png-vector/20190429/ourlarge/pngtree-smartphone-icon-png-image_1003223.jpg",
    },
    {
      id: 4,
      name: "Zapatos",
      price: 990,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/002/607/916/small_2x/sport-shoes-accessory-equipment-silhouette-icon-design-free-vector.jpg",
    },
    {
      id: 5,
      name: "Sombrero",
      price: 500,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/000/554/728/small_2x/hat_008.jpg",
    },
    {
      id: 6,
      name: "Collar",
      price: 2600,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/002/508/497/small_2x/mothers-day-necklace-with-heart-love-accessory-block-style-icon-free-vector.jpg",
    },
    {
      id: 7,
      name: "Monitor",
      price: 3700,
      imagen: "https://img.icons8.com/plasticine/400/monitor.png",
    },
    {
      id: 8,
      name: "Mochila",
      price: 800,
      imagen:
        "https://static.vecteezy.com/system/resources/thumbnails/003/112/862/small_2x/backpack-icon-front-view-tourist-item-for-vacation-travel-vector.jpg",
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
