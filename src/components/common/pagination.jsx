import React from "react";
import l from "lodash";
const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = l.ceil(itemsCount / pageSize);
  console.log(pagesCount);
  return (
    <nav>
      <ul className="pagination">
        
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
