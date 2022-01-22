import PropTypes from "prop-types";

function Cart({ product }) {
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

Cart.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default Cart;
