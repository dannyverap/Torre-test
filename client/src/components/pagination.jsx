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
    <nav className="flex justify-center">
      <ul className="inline-flex -space-x-px text-sm justify-center">
        <li>
          <a
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={clickPrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </a>
        </li>
        {pageNumbers?.map((number) => {
            const isActive = number === currentPage
          return (
            <li
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              key={number}
              onClick={() => clickPage(number)}
            >
              {number}
            </li>
          );
        })}
        <li>
          <a
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={clickNextPage}
            disabled={currentPage === maxPages}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
