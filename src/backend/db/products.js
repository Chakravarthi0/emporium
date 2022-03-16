import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
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
  },
  {
    _id: uuid(),
    title: "IPhone 13",
    brand: "Apple",
    category: "mobile",
    price: 72000,
    imgSrc: "/assests/products/top-picks/iphone13.jpg",
  },
  {
    _id: uuid(),
    title: "Samsumg galaxy 11",
    brand: "Samsung",
    category: "tablet",
    price: 12000,
    oldPrice: 14000,
    imgSrc: "/assests/products/top-picks/samsung11.webp",
  },
  {
    _id: uuid(),
    title: "Apple iPad a13",
    brand: "Apple",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/apple_ipad.png",
  },
  {
    _id: uuid(),
    title: "Dell Inspiron 15 Laptop",
    brand: "Dell",
    category: "tablet",
    price: 31000,
    imgSrc: "/assests/products/top-picks/dell_2.jpg",
  },
  {
    _id: uuid(),
    title: "ASUS TUF Gaming F15",
    brand: "Asus",
    category: "tablet",
    price: 31000,
    oldPrice: 33000,
    imgSrc: "/assests/products/top-picks/asus_tuf.jpg",
  },
];
