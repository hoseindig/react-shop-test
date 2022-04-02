import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardGroupCarouselBox from "./CardGroupCarousel";
import CardCarousel from "./CardCarousel/";
import PaginationBar from "./base/PaginationBar";
import styles from "./Section.module.scss";
import Combo from "./base/combo";
import LargCardBox from "./LargCardBox";
import BrandCarousel from "./Carousel/BrandCarousel";

const Section = ({ cards, title, bigCard, centerMode, slide }) => {
  const [toolbarMode, setToolbarMode] = useState(1);
  const [filter, setFilter] = useState(1);
  const [filteredCards, setFilteredCards] = useState(cards);
  const [page, setPage] = useState(6);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(2);

  const paginate = (array, page_size, page_number) => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  useEffect(() => {
    console.log("%cuseEffect filter", "background:blue", filter);

    let CopyOffilteredCards = JSON.parse(JSON.stringify(filteredCards));
    // CopyOffilteredCards.sort(function (a, b) {
    //   return a.title.localeCompare(b.title);
    // });
    switch (filter) {
      case 1:
        CopyOffilteredCards.sort((a, b) => (a.title > b.title ? 1 : -1)); //filterVariable = 1;
        break;
      case 2:
        CopyOffilteredCards.sort((a, b) => (a.title < b.title ? 1 : -1)); //filterVariable = -1;
        break;
      case 3:
        CopyOffilteredCards.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case 4:
        CopyOffilteredCards.sort((a, b) => (a.price < b.price ? 1 : -1));
        break;
      case 5:
        CopyOffilteredCards.sort((a, b) => (a.rate < b.rate ? 1 : -1));
        break;
      case 6:
        CopyOffilteredCards.sort((a, b) => (a.rate > b.rate ? 1 : -1));
      // case 7:
      //   filterVariable = "Saturday";
      // case 8:
      //   filterVariable = "Saturday";
      default: //filterVariable = 1;
        CopyOffilteredCards.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
    }

    CopyOffilteredCards.forEach((element) => {
      console.log("price", element.price, "rate", element.rate);
    });
    // console.log(filteredCards, CopyOffilteredCards);
    setFilteredCards(CopyOffilteredCards);
  }, [filter]);

  useEffect(() => {
    let CopyOfcards = JSON.parse(JSON.stringify(cards));
    const pages = Math.round(cards.length / page);
    setPages(pages);
    const res = paginate(CopyOfcards, page, activePage);
    setFilteredCards(res);
  }, [page, activePage]);

  useEffect(() => {
    setActivePage(1);
  }, [page]);

  const handleChange = ({ target: input }) => {
    if (input.name === "SortBy") setFilter(input.value);
    if (input.name === "ShowBy") setPage(input.value);
  };
  const responsiveConfig = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const showTypeList = [
    { id: 3, title: "3" },
    { id: 6, title: "6" },
    { id: 9, title: "9" },
    { id: 12, title: "12" },
  ];
  const sortTypeList = [
    { id: 99, title: "Default Sort " },
    { id: 1, title: "Sort By Name (A-Z)" },
    { id: 2, title: "Sort By Name (Z-A)" },
    { id: 3, title: "Sort By Price (Lower > Higher)" },
    { id: 4, title: "Sort By Price (Higher > Lower)" },
    { id: 5, title: "Sort By Rate (Higher )" },
    { id: 6, title: "Sort By Rate (Lower)" },
    // { id: 7, title: "Sort By Model (A-Z)" },
    // { id: 8, title: "Sort By Model (Z-A)" },
  ];

  return (
    <>
      <Container>
        <div className={styles.box}>
          <div className={styles.header}>
            <h1>{title} </h1>
          </div>

          {/* toolbar */}
          {!slide && !bigCard && (
            <div className={styles.toolbar}>
              <div className={styles.icon}>
                <div
                  onClick={() => setToolbarMode(1)}
                  className={toolbarMode === 1 ? styles.active : ""}
                >
                  <i className="fas fa-th"></i>
                </div>
                <div
                  onClick={() => setToolbarMode(2)}
                  className={toolbarMode === 2 ? styles.active : ""}
                >
                  <span className={styles["grid-four-icon"]}>
                    <i className="fas fa-grip-vertical"></i>
                    <i className="fas fa-grip-vertical"></i>
                  </span>
                </div>
                <div
                  onClick={() => setToolbarMode(3)}
                  className={toolbarMode === 3 ? styles.active : ""}
                >
                  <i className="fas fa-list"></i>
                </div>
              </div>
              {/* <div>(all items : {cards.length}) Showing 1 to 9 of 14 ({pages} Pages)</div> */}
              <div>
                (all items : {cards.length})({pages} Pages) Active Page :{" "}
                {activePage}
              </div>
              <div>
                <Combo
                  name={"ShowBy"}
                  lebel="Show By"
                  options={showTypeList}
                  defaultValue={6}
                  noLebel={false}
                  onChange={handleChange}
                />
                <Combo
                  name={"SortBy"}
                  lebel="Sort By"
                  options={sortTypeList}
                  defaultValue={99}
                  noLebel={false}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Carousel slider image */}
          {(slide || bigCard) && (
            <CardGroupCarouselBox
              cards={cards}
              bigCard={bigCard}
              centerMode={centerMode ? true : false}
              responsiveConfig={bigCard ? responsiveConfig : null}
            />
          )}
          {/* PaginationBar */}
          {!slide && !bigCard && (
            <PaginationBar
              pages={pages}
              handleActivePage={setActivePage}
              activePage={activePage}
            />
          )}
          {/* grid-mode */}
          {!slide && !bigCard && (
            <div className={styles["grid-mode"]}>
              <Container>
                <Row>
                  {filteredCards.map((c) => {
                    return (
                      <Col
                        key={c.id}
                        md={toolbarMode === 3 ? 12 : toolbarMode === 2 ? 3 : 4}
                        className={styles["box"]}
                      >
                        {toolbarMode === 1 && <CardCarousel item={c} />}
                        {toolbarMode === 2 && <CardCarousel item={c} />}
                        {toolbarMode === 3 && (
                          <LargCardBox
                            item={c}
                            bigCard={true}
                            fullwidth={true}
                          />
                        )}
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          )}
        </div>
        {/* PaginationBar */}
        {!slide && !bigCard && (
          <PaginationBar
            pages={pages}
            handleActivePage={setActivePage}
            activePage={activePage}
          />
        )}
      </Container>

      {!slide && !bigCard && <BrandCarousel></BrandCarousel>}
    </>
  );
};

export default Section;
