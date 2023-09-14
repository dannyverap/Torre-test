export const Pagination = ({
  maxPages,
  clickPage,
  clickPrevPage,
  clickNextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <a onClick={clickPrevPage} disabled={currentPage === 1}>
        Anterior
      </a>
      {pageNumbers?.map((number) => {
        const isActive = number === currentPage;
        return (
          <li key={number} onClick={() => clickPage(number)}>
            {number}
          </li>
        );
      })}
      <a onClick={clickNextPage} disabled={currentPage === maxPages}>
        Siguiente
      </a>
    </nav>
  );
};
