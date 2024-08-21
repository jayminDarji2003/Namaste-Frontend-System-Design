import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0ba0e0b1e1da264d.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b229a95edd3af8bd.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [active]); // Adding active as a dependency to ensure re-render

  const handlePrevClick = () => {
    setActive((prevActive) =>
      prevActive === 0 ? images.length - 1 : prevActive - 1
    );
  };

  const handleNextClick = () => {
    setActive((prevActive) =>
      prevActive === images.length - 1 ? 0 : prevActive + 1
    );
  };

  const handleNumberClick = (index) => {
    setActive(index);
  };

  return (
    <div className="flex items-center gap-3 mx-4 font-bold flex-col">
      <div className="flex flex-row items-center gap-2">
        <div
          className="border-2 border-black p-2 cursor-pointer"
          onClick={handlePrevClick}
        >
          Prev
        </div>

        <div>
          <img src={images[active]} alt="Image" className="" />
        </div>

        <div
          className="border-2 border-black p-2 cursor-pointer"
          onClick={handleNextClick}
        >
          Next
        </div>
      </div>

      <div className="flex gap-2">
        {images.map((img, index) => (
          <p
            key={index}
            className={`border-2 border-black px-3 cursor-pointer ${
              active === index ? "bg-black text-white" : ""
            }`}
            onClick={() => handleNumberClick(index)}
          >
            {index}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
