import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center ">
      {Array(15)
        .fill("")
        .map((index) => {
          return (
            <div key={index} className="border-2 border-black p-2 m-2">
              <div className="h-64 w-64 bg-gray-300 flex justify-center items-center">
                <h1>Image</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
