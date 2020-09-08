import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer, ModalContainer } from "../styled/style";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col8 mx-auto col-md-6 col-lg-4 text-center p-5 text-capitalize"
                    >
                      <h1>item is added to Cart</h1>
                      <img src={img} className="img-fluid" alt={title} />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
