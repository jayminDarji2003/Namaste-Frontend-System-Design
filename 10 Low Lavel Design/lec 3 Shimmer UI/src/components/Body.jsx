import React, { useEffect, useState } from "react";
import { MEME_API } from "../utils/config";
import Card from "./Card";
import Shimmer from "./Shimmer";

// https://meme-api.com/gimme/30
const Body = () => {
  const [memeData, setMemeData] = useState(null);

  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const response = await fetch(MEME_API);
    const json = await response.json();
    setMemeData(json?.memes);
  };

  return (
    <div>{memeData === null ? <Shimmer /> : <Card memes={memeData} />}</div>
  );
};

export default Body;
