import { Tabs, Tab } from "react-bootstrap";
import React, { useState } from "react";

const ProductsInTab = () => {
  const [key, setKey] = useState();
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <span>Home</span>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <span>Profile</span>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <span>Contact</span>
      </Tab>
    </Tabs>
  );
};

export default ProductsInTab;
