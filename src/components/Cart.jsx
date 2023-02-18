import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems, updateItemQuantity } from "../redux/action/itemAction";
import Header from "./Header";
import PaypalButton from "./PaypalButton";

export default function Cart() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const items = useSelector((state) => state?.item.itemsList);
  const [quantity, setQuantity] = useState({});
  const handleItemRemove = (id) => {
    dispatch(deleteItems(id));
  };

  const handleQuantityChange = (id, value) => {
    console.log(value);
    setQuantity({ ...quantity, [id]: value });
    dispatch(updateItemQuantity({ id, productQuanitity: value }));
  };

  // it calculate the total amount
  let sum = 0;
  const grandTotal = items?.reduce((acc, el) => {
    return (sum += el.productPrice * (quantity[el._id] || el.productQuanitity));
  }, 0);

  // // it calculate the total amount
  // let sum = 0;
  // const grandTotal = items?.reduce((acc, el) => {
  //   return (sum += el.productPrice);
  // }, 0);

  return (
    <div>
      <Header />

      <div className="cart_conatiner">
        <h1>Shopping Cart</h1>

        <div class="shopping-cart">
          <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-removal">Remove</label>
            <label class="product-line-price">Total</label>
          </div>

          {items?.map((el, index) => {
            const {
              image,
              productDescription,
              productPrice,
              productQuanitity,
              productName,
            } = el;
            return (
              <div class="product">
                <div class="product-image">
                  <img src={`http://localhost:8080/public/images/${image}`} />
                </div>
                <div class="product-details">
                  <div class="product-title">{productName}</div>
                  <p class="product-description">{productDescription}</p>
                </div>
                <div class="product-price">{productPrice}</div>
                <div class="product-quantity">
                  <input
                    type="number"
                    value={quantity[el._id] || productQuanitity}
                    min="1"
                    max={productQuanitity}
                    onChange={(e) =>
                      handleQuantityChange(el._id, e.target.value)
                    }
                  />
                </div>
                <div class="product-removal">
                  <button
                    class="remove-product"
                    onClick={() => handleItemRemove(el._id)}
                  >
                    Remove
                  </button>
                </div>
                <div class="product-line-price">
                  {" "}
                  {productPrice * (quantity[el._id] || productQuanitity)}
                </div>
              </div>
            );
          })}

          <div class="totals">
            <div class="totals-item totals-item-total">
              <label>Grand Total</label>
              <div class="totals-value" id="cart-total">
                {grandTotal}
              </div>
            </div>
          </div>

          <button class="checkout" onClick={() => setVisible(true)}>
            Checkout
          </button>
        </div>
      </div>

      {/* payment popup */}
      {visible ? (
        <div class="checkout_dialog">
          <button className="close" onClick={() => setVisible(false)}>
            X
          </button>
          <div className="paypalBtn">
            <PaypalButton
              amount={grandTotal}
              clientId="AdWBzuH1pGpdZ2nXpANd5YFm0dCLOfOjSV-pVkTp4JGJDLWd5uw7sMhPdukI9tcV4p4YCQCWBexg1o4w"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
