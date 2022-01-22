import React from "react";

import PageTemplate from "../../templates";
import PageTitle from "../../molecules/PageTitle";
import LeftMenu from "../../organisms/LeftMenu";
import ProductList from "../../organisms/ProductList";

const HomePage = () => {
  return (
    <PageTemplate className="home">
      <>
        <PageTitle pageTitle="Home"></PageTitle>

        <LeftMenu />

        <ProductList />
      </>
    </PageTemplate>
  );
};

export default HomePage;
