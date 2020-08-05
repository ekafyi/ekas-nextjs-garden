import { useState } from "react";

const ITEMS = 3; // for checking, change back to 40 later

function usePagination(data, itemsPerPage = ITEMS) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(null, end);
  }

  function getNext() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  return { getNext, currentData, currentPage, maxPage };
}

export default usePagination;
