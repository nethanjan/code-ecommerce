import PropTypes from "prop-types";

function PageTitle({ pageTitle }) {
  return <h1>{pageTitle}</h1>;
}

PageTitle.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default PageTitle;
