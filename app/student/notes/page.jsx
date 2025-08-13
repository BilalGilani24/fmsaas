import Image from "next/image";
import React from "react";
import Displaynotes from "./displaynotes/displaynotes";

const Notes = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center ml-64 mt-5">
        {" "}
        {/* Center horizontally */}
        <Image
          src={"/Notes.svg"}
          width={800}
          height={100}
          alt="dash"
          className="rounded-lg"
        />
      </div>
      <Displaynotes />
    </div>
  );
};

export default Notes;
