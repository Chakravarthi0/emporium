import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    title: "Laptop",
    categoryName:"laptop",
    imgSrc: "/assests/categories/laptops.png",
    link: "/products/?category=laptop"
  },
  {
    _id: uuid(),
    title: "Tablet",
    categoryName:"tablet",
    imgSrc: "/assests/categories/tablets.jpeg",
    link: "/products/?category=tablet"
  },
  {
    _id: uuid(),
    title: "Phone",
    categoryName:"phone",
    imgSrc: "/assests/categories/phones.jpg",
    link: "/products/?category=phone"
  },
  {
    _id: uuid(),
    title: "Smart Watch",
    categoryName:"smartWatch",
    imgSrc: "/assests/categories/smart_watches.jpg",
    link: "/products/?category=smart-watch"
  },
];
