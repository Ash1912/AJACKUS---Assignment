import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
