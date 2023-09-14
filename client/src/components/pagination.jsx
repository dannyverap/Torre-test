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
            className="cursor-default flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white bg-gray-800 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
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
              className={`cursor-default flex items-center justify-center px-3 h-8 leading-tight ${isActive ? 'text-white' : ' text-gray-500'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700  `}
              key={number}
              onClick={() => clickPage(number)}
            >
              {number}
            </li>
          );
        })}
        <li>
          <a
            className="cursor-default  flex items-center justify-center px-3 h-8 leading-tight text-white bg-gray-800  border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
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
