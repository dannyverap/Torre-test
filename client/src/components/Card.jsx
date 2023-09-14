export const Card = ({
  ardaId,
  username,
  name,
  imageUrl,
  professionalHeadline,
}) => {
  return (
    
      <a
        href={`http://www.torre.ai/${username}`}
        className="flex flex-col items-center bg-green-500 border border-green-900 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-700 m-3"
        target="_blank"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={imageUrl}
          alt={name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {professionalHeadline}
          </p>
        </div>
      </a>
    
  );
};
