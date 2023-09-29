import React, { useEffect, useState } from "react";

const PostData = ({ onDataFetched }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        onDataFetched(data); // Pass the fetched data to the parent component
        // console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [onDataFetched]);

  return null; // You don't need to render anything in this component
};

export default PostData;
