import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Redmi 11t",
    brand: "Xiamo",
    category: "mobile",
    price: 16000,
    oldPrice: 20000,
    imgSrc: "/assests/products/top-picks/redmi11t.jpg",
    rating: 4.5,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "IPhone 13",
    brand: "Apple",
    category: "mobile",
    price: 72000,
    imgSrc: "/assests/products/top-picks/iphone13.jpg",
    rating: 4.3,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "One Plus Nord 2",
    brand: "One Plus",
    category: "mobile",
    price: 29999,
    imgSrc: "/assests/products/top-picks/one_plus_nord.jpg",
    rating: 5.0,
  },
  {
    _id: uuid(),
    title: "Samsumg galaxy 11",
    brand: "Samsung",
    category: "tablet",
    price: 12000,
    oldPrice: 14000,
    imgSrc: "/assests/products/top-picks/samsung11.webp",
    rating: 4.7,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "Apple iPad a13",
    brand: "Apple",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/apple_ipad.png",
    rating: 4.1,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "One Plus Watch",
    brand: "One Plus",
    category: "watch",
    price: 14999,
    imgSrc: "/assests/products/top-picks/one_plus_watch.jpg",
    rating: 5.0,
  },
  {
    _id: uuid(),
    title: "Dell Inspiron 15 Laptop",
    brand: "Dell",
    category: "tablet",
    price: 31000,
    imgSrc: "/assests/products/top-picks/dell_2.jpg",
    rating: 4.5,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "ASUS TUF Gaming F15",
    brand: "Asus",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/asus_tuf.jpg",
    rating: 4.1,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "Redmi band 5",
    brand: "Xiamo",
    category: "smartWatch",
    price: 16000,
    oldPrice: 2500,
    imgSrc: "/assests/products/top-picks/redmi_band_5.webp",
    rating: 4.5,
    isTopPick: true,
  },
  {
    _id: uuid(),
    title: "Apple Watch Series 7",
    brand: "Apple",
    category: "smartWatch",
    price: 2500,
    oldPrice:3000,
    imgSrc: "/assests/products/top-picks/i_watch_7.jpg",
    rating: 4.3,
    isTopPick: true,
  },
];

export const topPicks = [
  {
    _id: uuid(),
    title: "Redmi 11t",
    brand: "Xiamo",
    category: "mobile",
    price: 16000,
    oldPrice: 20000,
    imgSrc: "/assests/products/top-picks/redmi11t.jpg",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "IPhone 13",
    brand: "Apple",
    category: "mobile",
    price: 72000,
    imgSrc: "/assests/products/top-picks/iphone13.jpg",
    rating: 4.3,
  },
  {
    _id: uuid(),
    title: "Samsumg galaxy 11",
    brand: "Samsung",
    category: "tablet",
    price: 12000,
    oldPrice: 14000,
    imgSrc: "/assests/products/top-picks/samsung11.webp",
    rating: 4.7,
  },
  {
    _id: uuid(),
    title: "Apple iPad a13",
    brand: "Apple",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/apple_ipad.png",
    rating: 4.1,
  },
  {
    _id: uuid(),
    title: "Dell Inspiron 15 Laptop",
    brand: "Dell",
    category: "tablet",
    price: 31000,
    imgSrc: "/assests/products/top-picks/dell_2.jpg",
    rating: 4.5,
  },
  {
    _id: uuid(),
    title: "ASUS TUF Gaming F15",
    brand: "Asus",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/asus_tuf.jpg",
    rating: 4.1,
  },
];
