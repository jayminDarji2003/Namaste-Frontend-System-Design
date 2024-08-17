import React from "react";

const Card = ({ memes }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      {memes.map((meme) => {
        return (
          <div key={meme?.url} className="border-2 border-black p-2 m-2">
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
