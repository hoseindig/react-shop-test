import { Pagination } from "react-bootstrap";
import { useState, useEffect } from "react";
const PaginationBar = ({ pages, handleActivePage, activePage }) => {
  const [pagesList, seter] = useState([]);
  const [activeNumberPage, setActiveNumberPage] = useState(
    activePage ? activePage : 1
  );
  const setActivePage = (p) => {
    handleActivePage(p);
    setActiveNumberPage(p);
  };
  useEffect(() => {
    let list = [];
    for (let i = 0; i < pages; i++) {
      list.push(i + 1);
    }
    seter(list);
  }, [pages]);
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pagesList.map((p) => {
        return (
          <Pagination.Item
            key={p}
            active={p === activeNumberPage}
            onClick={() => setActivePage(p)}
          >
            {p}
          </Pagination.Item>
        );
      })}
      {/* 
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};
{
  /* <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination> */
}
export default PaginationBar;
