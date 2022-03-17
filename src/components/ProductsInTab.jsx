import { Tabs, Tab } from "react-bootstrap";
import React, { useState } from "react";
import ProductsInTowColTab from "./ProductsInTowColTab";
const ProductsInTab = () => {
  const [key, setKey] = useState();
  const cards = [
    {
      id: 1,
      title: "Epple",
      img: "product-4.jpg",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
      text: "  What You Can Learn From Bill Gates",
    },
    {
      id: 2,
      title: "Hpple",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 3,
      title: "Bpple",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 33,
      title: "zpple",
      img: "product-13.jpg",
      text: "BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 4,
      title: "Lpple",
      img: "product-2.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 5,
      title: "Jpple",
      img: "product-10.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 6,
      title: "Wpple",
      img: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 7,
      title: "Hpple 2",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 8,
      title: "Bpple 2",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 10,
      title: "Wpple 2",
      img: "product-3.jpg",
      text: "Revolutionize Your BOOK With ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 11,
      title: "Hpple 3",
      img: "product-5.jpg",
      text: "a Half Very Simple Things You To",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
    {
      id: 12,
      title: "Bpple 3",
      img: "product-8.jpg",
      text: "  BOOK: Do You Really Need It? This ",
      price: 51.2,
      priceOld: 51.2,
      priceDiscount: "20%",
    },
  ];
  let towRowArray = {};
  let rowArray = 0;
  for (let i = 0; i < cards.length; i++) {
    if (!towRowArray[rowArray]) towRowArray[rowArray] = [];
    towRowArray[rowArray].push(cards[i]); 
    if (i === 5) rowArray++;
  }
  console.log("towRowArray", towRowArray);
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Featured Products">
        <span>Featured Products</span>
        <ProductsInTowColTab cards={cards} />
      </Tab>
      <Tab eventKey="profile" title="New Arrivals">
        <span>New Arrivals</span>
        <ProductsInTowColTab cards={cards} />
      </Tab>
      <Tab eventKey="contact" title="Most view products">
        <span>Most view products</span>
        <ProductsInTowColTab cards={cards} />
      </Tab>
    </Tabs>
  );
};

export default ProductsInTab;
