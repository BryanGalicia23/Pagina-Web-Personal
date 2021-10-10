const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity, imagen } = data;
  return (
    <div style={{ borderBottom: "thin solid gray", padding: "0.5rem" }}>
      <img style={{ width: "50px", height: "50px" }} src={imagen} alt={name} />
      <h4>{name}</h4>
      <h5>
        ${price}.00 x <b>{quantity}</b> = ${quantity * price}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <span> </span>
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
