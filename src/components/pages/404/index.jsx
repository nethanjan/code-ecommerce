import React from "react";

import PageTemplate from "../../templates";

const NotFoundPage = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <PageTemplate className="home">
      <>
        <h1>Page Not Found</h1>

        <div className="description">
          <p>
            Apologies, it seems the page you're looking for can’t be found.
            Click below to continue.
          </p>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          onClick={goToHome}
        >
          Home
        </button>
      </>
    </PageTemplate>
  );
};

export default NotFoundPage;
