import React, { useEffect, useState } from "react";
import { MEME_API } from "../utils/config";
import Card from "./Card";
import Shimmer from "./Shimmer";

// https://meme-api.com/gimme/30
const Body = () => {
  const [memeData, setMemeData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  };

  useEffect(() => {
    fetchMeme();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMeme = async () => {
    setShowShimmer(true);
    const response = await fetch(MEME_API);
    const json = await response.json();
    setShowShimmer(false);
    setMemeData((memes) => [...memes, ...json?.memes]);
  };

  return (
    <div>
      <Card memes={memeData} />

      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
