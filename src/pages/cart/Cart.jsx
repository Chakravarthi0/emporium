import React from 'react'
import { topPicks } from "../../backend/db/products";
import { CartCard, PriceDetails } from "../../components";
import "./cart.css"

function Cart() {
  return (
    <>
      <h1 className="text-center page-title">My Cart</h1>
      <div className="cart-container">
      <div className="cart-products">
      {topPicks.map((ele) => {
        return (
          <CartCard
            key={ele._id}
            title={ele.title}
            brand={ele.brand}
            rating={ele.rating}
            oldPrice={ele.oldPrice}
            newPrice={ele.price}
            imgSrc={ele.imgSrc}
          />
        );
      })}
      </div>
      <PriceDetails/>
    </div>
    </>
  )
}

export default Cart