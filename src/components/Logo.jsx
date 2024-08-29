import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to={'/'} className="flex gap-2 items-center">
        <img width="64" height="64" src="https://img.icons8.com/nolan/64/circled-play.png" alt="circled-play" />
        <span className="font-bold text-white">VideoTube</span>
      </Link>
    </>
  );
}

export default Logo;
