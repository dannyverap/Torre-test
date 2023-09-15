import { Card } from "../components/Card";
import { CardsContainer } from "../components/CardsContainer";
import { FavoritesCardsContainer } from "../components/FavoritesCards";
import { Header } from "../components/Header";

export const Favorites = () => {
  return (
    <div className="px-3 pt-3 bg-gray-800 min-w-screen min-h-screen   ">
      <Header />
      <FavoritesCardsContainer />
    </div>
  );
};
