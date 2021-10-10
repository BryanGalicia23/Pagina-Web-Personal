const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, imagen } = data;
  return (
    <div style={{ border: "thin solid gray", padding: "0.5rem" }}>
      <img src={imagen} alt={name} />
      <h5>{name}</h5>
      <h6>${price}.00</h6>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
