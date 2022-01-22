import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { filterProducts } from "../../../actions/productsAction";

function FilterButton({ buttonName, value }) {
  const dispatch = useDispatch();

  const filterSelectedProducts = (val) => {
    dispatch(filterProducts(val));
  };

  return (
    <Button
      className="round-button"
      onClick={() => filterSelectedProducts(value)}
    >
      {buttonName}
    </Button>
  );
}

FilterButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterButton;
