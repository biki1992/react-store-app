import React, { Component } from "react";
import { ProductWrapper } from "../styled/style";
import { Link } from "react-router-dom";
import PropType from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img__container p-5"
            onClick={() => this.props.handleDetail(id)}
          >
            <Link to="/details">
              <img src={img} alt={title} className="card-img-top" />
            </Link>
            <button
              className="card-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                this.props.addToCart(id);
                this.props.openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus"></i>
              )}
            </button>
          </div>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-center mb-0">{title}</p>
            <h5 className="text__blue font-italic mb-0">
              <span>$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propType = {
  product: PropType.shape({
    id: PropType.number,
    img: PropType.string,
    title: PropType.string,
    price: PropType.number,
    inCart: PropType.bool,
  }).isRequired,
};
