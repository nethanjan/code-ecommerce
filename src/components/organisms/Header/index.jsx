import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useSelector } from "react-redux";

import Cart from "../../molecules/Cart";

function Header() {
  const [modal, toggle] = useState(false);

  const { cartList } = useSelector((state) => ({
    cartList: state.cart.cartList,
  }));

  const renderCart = () => {
    const cart = [];
    cartList.forEach((element) => {
      cart.push(<Cart key={element.id} product={element} />);
    });
    return cart;
  };

  let quantity = 0;
  cartList.forEach(function (value) {
    quantity += parseInt(value.quantity, 10);
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light menu-bar">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto topnav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
        </ul>

        <div
          className="position-absolute top-10 end-0"
          onClick={() => toggle(!modal)}
        >
          <FaShoppingCart size={40} />
          {cartList.length ? (
            <div className="cart-badge">
              <Badge color="warning">{quantity}</Badge>
            </div>
          ) : null}
        </div>

        <div>
          <Modal
            isOpen={modal}
            toggle={() => toggle(!modal)}
            className=""
            animation={"false"}
          >
            <ModalHeader toggle={() => toggle(!modal)}>Bag</ModalHeader>
            <ModalBody>
              <table className="table">
                <tbody>{renderCart()}</tbody>
              </table>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={() => toggle(!modal)}>
                Checkout
              </Button>
              <Button color="secondary" onClick={() => toggle(!modal)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default Header;
