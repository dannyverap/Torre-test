import { Card } from "./Card";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Pagination } from "./pagination";

export const CardsContainer = () => {
  const allUsers = useSelector((state) => state.allUsers);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    usersPerPage: 10,
  });

  useEffect(() => {
    setPagination(() => ({
      ...pagination,
      currentPage: 1,
    }));
  }, [allUsers]);

  const { currentPage, usersPerPage } = pagination;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const maxPages = Math.ceil(allUsers.length / usersPerPage);

  const clickPage = (pageNumber) => {
    setPagination({
      ...pagination,
      currentPage: pageNumber,
    });
  };
  const clickPrevPage = () => {
    if (pagination.currentPage > 1) {
      setPagination({
        ...pagination,
        currentPage: currentPage - 1,
      });
    }
  };

  const clickNextPage = () => {
    if (pagination.currentPage < maxPages) {
      setPagination({
        ...pagination,
        currentPage: currentPage + 1,
      });
    }
  };

  return (
    <div className="   grid place-content-center  ">
      {currentUsers?.map(
        ({ ardaId, username, name, imageUrl, professionalHeadline }) => {
          return (
            <Card
              key={ardaId}
              username={username}
              ardaId={ardaId}
              name={name}
              imageUrl={imageUrl}
              professionalHeadline={professionalHeadline}
            />
          );
        }
      )}
      {allUsers.length > 0 ? (
        <Pagination
          maxPages={maxPages}
          clickPage={clickPage}
          clickPrevPage={clickPrevPage}
          clickNextPage={clickNextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};
