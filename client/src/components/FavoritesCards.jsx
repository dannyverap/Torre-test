import { Card } from "./Card";
import { FavoriteCard } from "./FavoriteCard";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Pagination } from "./pagination";
import { useNavigate } from 'react-router-dom'

import {getAllFavorites} from "../redux/Action"

export const FavoritesCardsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.allFavorites);

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);


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
  const currentFavoritesUsers = allUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

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
      {currentFavoritesUsers?.map(
        ({ ardaId, username, name, imageUrl, professionalHeadline }) => {
          return (
            <FavoriteCard
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
