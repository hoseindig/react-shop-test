import { Tabs, Tab } from "react-bootstrap";
import React, { useState } from "react";
import ProductsInTowColTab from "./ProductsInTowColTab";
const ProductsInTab = ({cards}) => {
  const [key, setKey] = useState();
  
  let towRowArray = [];
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
      <ProductsInTowColTab filterBy='featuredProducts' cards={cards.filter(i=> i.featuredProducts)} towRowArray={towRowArray} />
      </Tab>
      <Tab eventKey="profile" title="New Arrivals">
        <span>New Arrivals</span>
        <ProductsInTowColTab filterBy='newArrivals' cards={cards.filter(i=> i.newArrivals)} towRowArray={towRowArray} />
      </Tab>
      <Tab eventKey="contact" title="Most view products">
        <span>Most view products</span>
        <ProductsInTowColTab filterBy='mostViewedProducts' cards={cards.filter(i=> i.mostViewedProducts)} towRowArray={towRowArray} />
      </Tab>
    </Tabs>
  );
};

export default ProductsInTab;
