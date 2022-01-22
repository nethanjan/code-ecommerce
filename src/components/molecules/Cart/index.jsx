function Cart({ product }) {
  console.log(product);
  return (
    <tr>
      <td>
        <img className="card-img-top" src={product.image} alt={product.name} />
      </td>
      <td>
        <span>{product.name}</span>
        <div>quantity {product.quantity}</div>
      </td>
      <td>{`$${product.price}`}</td>
    </tr>
  );
}

export default Cart;
