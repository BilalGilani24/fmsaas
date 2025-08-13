import React from "react";

const Headerpic = () => {
  return (
    <div
      className="rounded-lg"
      style={{
        width: "1020px", // Set the width of the div
        height: "250px", // Set the height of the div
        backgroundImage: "url('/d-pic.png')", // Replace with the image URL
        backgroundSize: "cover", // Ensure the image fits entirely inside the div
        backgroundPosition: "center", // Center the image inside the div
        backgroundRepeat: "no-repeat", // Prevent tiling of the image
      }}
    ></div>
  );
};

export default Headerpic;
