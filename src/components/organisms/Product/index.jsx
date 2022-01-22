import PropTypes from "prop-types";

function Product(props) {
  const { id, imageUrl, title, price, tag } = props;

  return (
    <div className="col-lg-3 d-flex mb-4">
      <div className="card">
        <div className="position-absolute top-0 end-0 text-light bg-dark">
          {tag}
        </div>
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p>{`$${price}`}</p> <span className="fa fa-circle" id="red"></span>
        </div>
        <button className="text-light bg-dark add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  tag: PropTypes.string,
};

export default Product;
