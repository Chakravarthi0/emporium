import { useCart } from "../context";

const priceReducer = (acc, curr) => {
  const discount = curr.oldPrice ? (curr.oldPrice - curr.price) * curr.qty : 0;
  return {
    totalItems: acc.totalItems + curr.qty,
    totalItemsPrice:
      acc.totalItemsPrice +
      (curr.oldPrice ? curr.oldPrice : curr.price) * curr.qty,
    totalDiscount: acc.totalDiscount + discount,
  };
};

const calculatePrice = (chosenCoupon) => {
  const { cartItems } = useCart();
  let result = cartItems.reduce(priceReducer, {
    totalItems: 0,
    totalItemsPrice: 0,
    totalDiscount: 0,
  });

  let couponDiscount = 0;

  if (chosenCoupon) {
    if (chosenCoupon === "500OFF" && result.totalItemsPrice >= 5000) {
      couponDiscount = 500;
    } else if (chosenCoupon === "10%OFF" && result.totalItemsPrice >= 10000) {
      couponDiscount = (result.totalItemsPrice - result.totalDiscount )* (1 / 10);
    }
  }

  return {
    ...result,
    couponDiscount,
    deliveryCharge: cartItems.length > 0 ? 100 : 0,
    total:
      result.totalItemsPrice -
      result.totalDiscount +
      (cartItems.length > 0 ? 100 : 0) -
      couponDiscount,
  };
};

export { calculatePrice };
