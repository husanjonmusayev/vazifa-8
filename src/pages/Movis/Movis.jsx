import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Movis() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const apiKey = "2NBWE8J-TBX4NH9-J5PW32T-SSDVCKR";
  useEffect(() => {
    fetch("https://api.kinopoisk.dev/v1.4/movie?lists=top250", {
      headers: {
        "X-API-KEY": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.docs))
      .catch((error) => console.error("Error:", error));
  }, []);

  function hendalClick(e) {
    navigate(`/movi?${e}`);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((el) => {
            return (
              <div
                onClick={() => {
                  hendalClick(el);
                }}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={el.cover.url}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-100 truncate title-font text-lg font-medium">
                    {el.name}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Movis;
