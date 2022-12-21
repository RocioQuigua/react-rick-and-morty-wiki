import React from "react";

import { Button } from "antd";

export const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
        <Button
          className="pagination__buttons"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          {"< Previous"}
          </Button>
          <span>{page}</span>
          <Button
          className="pagination__buttons"
          onClick={()=> setPage(page + 1)}
          >
          {"Next >"}
          </Button>
    </div>
  );
};
