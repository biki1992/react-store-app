import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-3"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text__title">
                subtotal :{" "}
                <span>
                  <strong>$ {cartSubTotal}</strong>
                </span>
              </span>
            </h5>
            <h5>
              <span className="text__title">
                tax :
                <span>
                  <strong>$ {cartTax}</strong>
                </span>
              </span>
            </h5>
            <h5>
              <span className="text__title">
                total :
                <span>
                  <strong>$ {cartTotal}</strong>
                </span>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
