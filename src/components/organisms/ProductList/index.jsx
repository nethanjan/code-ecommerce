import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllProducts } from "../../../actions/productsAction";

import Product from "../Product";

function ProductList(props) {
  const { products } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const renderProducts = () => {
    const productList = [];
    products.forEach((element, i) => {
      productList.push(
        <Product
          key={element.id}
          id={element.id}
          imageUrl={element.details.image}
          title={element.name}
          price={element.details.price}
          tag={element.details.tag}
        />
      );
    });
    return productList;
  };

  return (
    <section id="products">
      <div className="container">
        <div className="row">{renderProducts()}</div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.productList,
});

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      details: PropTypes.shape({
        image: PropTypes.string,
        price: PropTypes.number,
        size: PropTypes.string,
        tag: PropTypes.string,
        type: PropTypes.string,
      }),
    })
  ),
};

export default connect(mapStateToProps, null)(ProductList);
