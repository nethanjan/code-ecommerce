import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../actions/cartAction";

function Product(props) {
  const dispatch = useDispatch();
  const { product } = props;

  const addProductsToCart = (element) => {
    dispatch(addToCart(element));
  };

  return (
    <div className="col-lg-3 d-flex mb-4">
      <div className="card">
        <div className="position-absolute top-0 end-0 text-light bg-dark">
          {product.details.tag}
        </div>
        <img
          className="card-img-top"
          src={product.details.image}
          alt={product.name}
        />
        <div className="card-body">
          <p className="card-text">{product.name}</p>
          <p>{`$${product.details.price}`}</p>{" "}
          <span className="fa fa-circle" id="red"></span>
        </div>
        <button
          className="text-light bg-dark add-to-cart"
          onClick={() => addProductsToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.shape({
      image: PropTypes.string,
      price: PropTypes.number,
      size: PropTypes.string,
      tag: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
};

export default Product;
