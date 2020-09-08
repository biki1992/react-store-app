import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products" />
            <div className="row">
              <ProductConsumer>
                {(value) =>
                  value.products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      handleDetail={value.handleDetail}
                      addToCart={value.addToCart}
                      openModal={value.openModal}
                    />
                  ))
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
