import Header from "../organisms/Header";

const PageTemplate = ({ title, className, children, ...props }) => {
  return (
    <>
      <Header />
      <div className={className}>{children}</div>
    </>
  );
};

export default PageTemplate;
