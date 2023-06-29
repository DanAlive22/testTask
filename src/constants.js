import { iphone12Pro128, iphone12Pro256 } from "src/img";

const events = ["login"];

const mainPageNavigation = [
  {
    name: "Главная страница",
    link: "/",
  },
  {
    name: "Авторизация",
    link: "/login"
  },
  {
    name: "Магазин",
    link: "/store",
  }
]

const userListHeader = [
  {
    title: "ID"
  },
  {
    title: "Имя"
  },
  {
    title: "Роль"
  },
  {
    title: "Дата создания"
  },
  {
    title: "Действия"
  },
];

const eventsListHeader = [
  {
    title: "Дата"
  },
  {
    title: "Событие"
  }
];

const shopItemsInfoList = [
  {
    imgSrc: iphone12Pro128,
    imgAlt: "iphone12Pro128",
    actualPrice: "86 956",
    discount: 14,
    previousPrice: "99 990",
    onlinePaymentPrice: "85 251",
    tags: `Apple / Смартфон Iphone 12 Pro 128GB / 6.1" / 2531x1170 / OLED / 128 ГБ`,
    rating: 5,
    reviewsNumber: 87,
    id: 1
  },
  {
    imgSrc: iphone12Pro256,
    imgAlt: "iphone12Pro256",
    actualPrice: "120 000",
    previousPrice: "",
    onlinePaymentPrice: "118 450",
    tags: `Apple / Смартфон Iphone 12 Pro 256GB / 6.1" / 2531x1170 / OLED / 256 ГБ`,
    rating: 4.5,
    reviewsNumber: 50,
    id: 1
  }
];

const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegexp = /(?=.*[A-Z])[a-zA-Z0-9]{8,}/;

const palette = {
  white: "#ffffff",
  black: "#000000",
  grey: "#808080",
  blue: "#3333FF",
  darkPink: "#C108A2",
  lightPink: "#fdeef9",
  redErorr: "ed6969",
  backgroundColor: "#2d3a4b",
  red: "#FF0000",
  darkRed: "#990000"

}

export { 
  events,
  mainPageNavigation,
  userListHeader,
  eventsListHeader,
  shopItemsInfoList,
  emailRegexp,
  passwordRegexp,
  palette
};