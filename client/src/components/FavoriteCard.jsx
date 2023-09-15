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
    <div className="flex flex-col max-h-30 min-h-30  bg-white border border-white rounded-lg shadow md:flex-row items-center md:max-w-xl m-3">
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

      <div className=" flex w-96 flex-col rounded-xl  bg-white bg-clip-border text-gray-700">
        <div className="p-6">
          <a href={`http://www.torre.ai/${username}`} target="_blank">
            <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {name}
            </h5>
          </a>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {professionalHeadline}
          </p>
        </div>
        <div className="p-6 pt-0 max-h-30 min-h-30 w-full">
          {
            <button
              className=" rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white  focus:opacity-[0.85]  active:opacity-[0.85]  disabled:pointer-events-none disabled:opacity-50 "
              type="button"
              data-ripple-light="true"
              onClick={handleFavorite}
            >
              {isFav ? "❤️" : "🤍"}
            </button>
          }
        </div>
      </div>
    </div>
  );
};
