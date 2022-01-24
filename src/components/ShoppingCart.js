import { useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import Message from "./Message";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const [isPay, setIsPay] = useState(false);

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const totalToPay = () => {
    let totalAmount = 0;
    cart.forEach((element) => {
      totalAmount += element.price * element.quantity;
    });
    return totalAmount;
  };

  const payCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    setIsPay(true);
    setTimeout(() => {
      setIsPay(false);
    }, 4000);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        {cart.length >= 1 && (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              style={{
                backgroundColor: "#ff3300",
                color: "white",
              }}
              onClick={clearCart}
            >
              Limpiar Carrito
            </button>
            <button
              style={{ backgroundColor: "#008F39", color: "white" }}
              onClick={payCart}
            >
              Pagar: ${totalToPay()}.00
            </button>
          </div>
        )}
        {isPay && (
          <Message
            msg={"😁 Tu compra ha sido exitosa, gracias y hasta la próxima 😁"}
            bgColor={"#008F39"}
          />
        )}
        {cart.length === 0 && !isPay && (
          <>
            <div>
              <img
                src="https://www.porticodemexico.com.mx/imagenes/carrito/Carro_Vacio.png"
                alt="carrito vacio"
              />
            </div>
          </>
        )}
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
