import logo from "../assets/logo.jpeg";
import { useState } from "react";
import { addFav, removeFav } from "../redux/Action";

export const FavoriteCard = ({
  ardaId,
  username,
  name,
  imageUrl,
  professionalHeadline,
}) => {
  const [isFav, setIsFav] = useState(true);

  const handleFavorite = async () => {
    isFav
      ? await removeFav(ardaId)
      : await addFav({
          ardaId,
          username,
          name,
          imageUrl,
          professionalHeadline,
        });
    setIsFav(!isFav);
  };
  return (
    <div className="flex flex-col max-h-30 min-h-30  bg-gray-800 border border-white rounded-lg shadow md:flex-row items-center md:max-w-xl hover:bg-gray-700 m-3">
      {imageUrl ? (
        <img
          className="object-cover max-h-30 min-h-30 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={imageUrl}
          alt={name}
        />
      ) : (
        <img
          className="object-cover max-h-30 min-h-30 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={logo}
          alt={name}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <a href={`http://www.torre.ai/${username}`} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            {name}
          </h5>
        </a>

        <p className="mb-3 font-normal text-white">{professionalHeadline}</p>

        {<button onClick={handleFavorite}>{isFav ? "❤️" : "🖤"}</button>}
      </div>
    </div>
  );
};
