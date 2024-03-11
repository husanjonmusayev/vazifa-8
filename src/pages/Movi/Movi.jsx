import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Movi() {
  const location = useLocation();
  const movi = location.search.slice(6);
  const [data, setData] = useState([]);
  const apiKey = "2NBWE8J-TBX4NH9-J5PW32T-SSDVCKR";
  useEffect(() => {
    fetch(`https://api.kinopoisk.dev/v1.4/movie/${movi}`, {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      {data ? (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-left h-96 w-full rounded"
                alt="hero"
                src={data.poster.previewUrl}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                {data.name}
                <br className="hidden lg:inline-block" />
                <h1>{data.distributors.distributor}</h1>
              </h1>
              <p className="mb-8 leading-relaxed">{data.description}</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Ko'rish
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Yuklab olish
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Movi;
