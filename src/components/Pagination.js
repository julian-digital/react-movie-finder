import React from "react";

const Pagination = props => {
  const pageLinks = [];
  let firstLink = props.currentPage > 3 ? props.currentPage - 3 : 1;
  for (let i = firstLink; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "active" : "";
    if (i <= firstLink + 6) {
      pageLinks.push(
        <li
          className={`page-item ${active}`}
          key={i}
          onClick={() => props.nextPage(i)}
        >
          <a href="#" className="page-link">
            {i}
          </a>
        </li>
      );
    }
  }
  return (
    <section className="row">
      <nav className="col-sm-12" aria-label="Page navigation">
        <ul className="pagination">
          {props.currentPage > 1 ? (
            <li
              className={`page-item`}
              // key={i}
              onClick={() => props.nextPage(1)}
            >
              <a href="#" className="page-link">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          ) : (
            ""
          )}
          {pageLinks}
          {props.currentPage < props.pages + 1 ? (
            <li
              className={`page-item`}
              // key={i}
              onClick={() => props.nextPage(props.pages + 1)}
            >
              <a href="#" className="page-link">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
