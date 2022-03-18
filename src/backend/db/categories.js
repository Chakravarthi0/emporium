import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptop",
    imgSrc: "/assests/categories/laptops.png",
    link: "/products/?category=laptop"
  },
  {
    _id: uuid(),
    categoryName: "Tablet",
    imgSrc: "/assests/categories/tablets.jpeg",
    link: "/products/?category=tablet"
  },
  {
    _id: uuid(),
    categoryName: "Phone",
    imgSrc: "/assests/categories/phones.jpg",
    link: "/products/?category=phone"
  },
  {
    _id: uuid(),
    categoryName: "Smart Watch",
    imgSrc: "/assests/categories/smart_watches.jpg",
    link: "/products/?category=smart-watch"
  },
];
