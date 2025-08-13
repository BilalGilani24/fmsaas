import React from "react";

const Enquirypic = () => {
  return (
    <div
      className="rounded-lg ml-48 mt-5"
      style={{
        width: "1050px", // Set the width of the div
        height: "250px", // Set the height of the div
        backgroundImage: "url('/Enquiry.png')", // Replace with the image URL
        backgroundSize: "cover", // Ensure the image fits entirely inside the div
        backgroundPosition: "center", // Center the image inside the div
        backgroundRepeat: "no-repeat", // Prevent tiling of the image
      }}
    ></div>
  );
};

export default Enquirypic;
