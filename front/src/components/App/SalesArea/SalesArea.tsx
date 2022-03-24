import Button from "../../UI/Button/Button";
import Header from "../../UI/Header/Header";
import RouteLink from "../../UI/RouteLink/RouteLink.styled";
import { APP_PAGE } from "../App";
import sony_image from "../../Images/sony.jpg";
import jbl_image from "../../Images/jbl.jpg";
import steelseries_image from "../../Images/myszka.jpg";
import Products from "../../UI/ProductView/ProductSector";
import { SalesAreaStyled } from "./SalesArea.styled";
import Auctions from "../../UI/AuctionView/AuctionSector";
import React, { useState } from "react";
import ProductFilter from "../../UI/ProductView/ProductFilter";

const EXAMPLES_PRODUCTS = [
  {
    key: "1",
    title: "TV Sony",
    img_src: sony_image,
  },
  {
    key: "2",
    title: "Słuchawki JBL",
    img_src: jbl_image,
  },
  {
    key: "3",
    title: "Mysz Steelseries",
    img_src: steelseries_image,
  },
];

const EXAMPLES_AUCTIONS = [
  {
    key: "1",
    auction_site: "Allegro",
    title: "TV Sony",
    img_src: sony_image,
  },
  {
    key: "2",
    auction_site: "Allegro",
    title: "Słuchawki JBL",
    img_src: jbl_image,
  },
  {
    key: "3",
    auction_site: "Allegro",
    title: "Mysz Steelseries",
    img_src: steelseries_image,
  },
  {
    key: "4",
    auction_site: "OLX",
    title: "Mysz Steelseries",
    img_src: steelseries_image,
  },
];

const SalesArea = () => {
  const [value, setValue] = useState("Products");

  const handleChange = (selected: string) => {
    setValue(selected);
  };

  return (
    <SalesAreaStyled>
      <Header />
      <ProductFilter value={value} onChangeFilter={handleChange} />
      {(value === "Products" || value === "Both") && (
        <Products items={EXAMPLES_PRODUCTS} />
      )}
      {(value === "Auctions" || value === "Both") && (
        <Auctions items={EXAMPLES_AUCTIONS} />
      )}
      <RouteLink to={APP_PAGE.PRODUCT}>
        <Button title="Panel produktu" />
      </RouteLink>
      <RouteLink to={APP_PAGE.HOME}>
        <Button title="Powrót do strony głównej" />
      </RouteLink>
    </SalesAreaStyled>
  );
};

export default SalesArea;
