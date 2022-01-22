import FilterButton from "../../molecules/FilterButton";

import filterButtons from "../../../config/FilterButtonList";

function LeftMenu() {
  const renderButtons = () => {
    const buttonList = [];
    filterButtons.forEach((element) => {
      buttonList.push(
        <FilterButton
          key={`${element.id}`}
          buttonName={element.name}
          value={element.value}
        />
      );
    });
    return buttonList;
  };

  return (
    <section id="sidebar">
      <div>
        <h6 className="p-1">Sizes</h6>
        <div className="btn-toolbar">{renderButtons()}</div>
      </div>
    </section>
  );
}

export default LeftMenu;
