import React from "react";

const Card = ({ memes }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {memes.map((meme) => {
        return (
          <div
            key={meme?.url}
            className="border-4 border-black p-2 m-2 bg-red-900"
          >
            <div>
              <img src={meme?.url} alt={meme?.author} className="h-64 w-64" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
