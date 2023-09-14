import { Card } from "../components/Card";
import { CardsContainer } from "../components/CardsContainer";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div className="px-3 pt-3 bg-gray-800 min-h-screen ">
      <Header />
      <CardsContainer />
    </div>
  );
};
