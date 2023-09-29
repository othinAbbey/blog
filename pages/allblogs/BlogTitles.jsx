// import Link from "next/link";
// import React, { useState } from "react";
// import FullBlog from "../FullBlog";
// import PostData from "./postData"; // Import the PostData component

// const BlogTitles = () => {
//   const [postData, setPosts] = useState([]); // Initialize state to store fetched data

//   // Define a function to receive the fetched data
//   const handleDataFetched = (data) => {
//     setPosts(data);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-blue-500 mb-4">Blogs</h1>
//       <ul className="list-none">
//         {postData.map((post) => (
//           <li key={post.id} className="mb-2">
//             <Link
//               href={`/FullBlog?id=${post.id}`}
//               className="text-blue-500 hover:underline"
//             >
//               {post.id}. {post.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <PostData onDataFetched={handleDataFetched} />
//     </div>
//   );
// };

// export default BlogTitles;

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import FullBlog from "../FullBlog";
// import PostData from "./postData"; // Import the PostData component

// const BlogTitles = () => {
//   const [postData, setPosts] = useState([]); // Initialize state to store fetched data
//   const [currentPage, setCurrentPage] = useState(1);

//   // Define a function to receive the fetched data
//   const handleDataFetched = (data) => {
//     setPosts(data);
//   };

//   // Slice the blogs for the current page (e.g., 5 blogs per page)
//   const blogsPerPage = 5;
//   const startIndex = (currentPage - 1) * blogsPerPage;
//   const endIndex = startIndex + blogsPerPage;
//   const limitedPosts = postData.slice(startIndex, endIndex);

//   // Function to go to the next page
//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   // Function to go to the previous page
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-blue-500 mb-4">Blogs</h1>
//       <ul className="list-none">
//         {limitedPosts.map((post) => (
//           <li key={post.id} className="mb-2">
//             <Link
//               href={`/FullBlog?id=${post.body}`}
//               className="text-blue-500 hover:underline"
//             >
//               {post.id}. {post.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//           onClick={prevPage}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={nextPage}
//         >
//           Next
//         </button>
//       </div>
//       <PostData onDataFetched={handleDataFetched} />
//     </div>
//   );
// };

// export default BlogTitles;

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import FullBlog from "../FullBlog";
// import PostData from "./postData"; // Import the PostData component

// const BlogTitles = () => {
//   const [postData, setPosts] = useState([]); // Initialize state to store fetched data
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
//   const [filteredPosts, setFilteredPosts] = useState([]); // State to store filtered posts

//   // Define a function to receive the fetched data
//   const handleDataFetched = (data) => {
//     setPosts(data);
//   };

//   // Slice the blogs for the current page (e.g., 5 blogs per page)
//   const blogsPerPage = 5;
//   const startIndex = (currentPage - 1) * blogsPerPage;
//   const endIndex = startIndex + blogsPerPage;
//   const limitedPosts = filteredPosts.slice(startIndex, endIndex);

//   // Function to go to the next page
//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   // Function to go to the previous page
//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Function to handle search input change
//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Function to perform the search
//   const performSearch = () => {
//     // Filter blog posts based on the search query
//     const filtered = postData.filter((post) => {
//       // You can adjust this condition to match the search criteria you want
//       return post.title.toLowerCase().includes(searchQuery.toLowerCase());
//     });

//     setFilteredPosts(filtered);
//     setCurrentPage(1); // Reset the current page to 1 when searching
//   };

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data);
//         setFilteredPosts(data); // Initialize filteredPosts with all posts
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-blue-500 mb-4">Blogs</h1>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           className="border p-2 rounded-md"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
//           onClick={performSearch}
//         >
//           Search
//         </button>
//       </div>

//       <ul className="list-none">
//         {limitedPosts.map((post) => (
//           <li key={post.id} className="mb-2">
//             <Link
//               href={`/FullBlog?id=${post.id}`}
//               className="text-blue-500 hover:underline"
//             >
//               {post.id}. {post.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//           onClick={prevPage}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           onClick={nextPage}
//         >
//           Next
//         </button>
//       </div>
//       <PostData onDataFetched={handleDataFetched} />
//     </div>
//   );
// };

// export default BlogTitles;

import Link from "next/link";
import React, { useState, useEffect } from "react";
import FullBlog from "../FullBlog";
import PostData from "./postData"; // Import the PostData component

const BlogTitles = () => {
  const [postData, setPosts] = useState([]); // Initialize state to store fetched data
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [filteredPosts, setFilteredPosts] = useState([]); // State to store filtered posts
  const [noMatch, setNoMatch] = useState(false); // State to track if there's no match

  // Define a function to receive the fetched data
  const handleDataFetched = (data) => {
    setPosts(data);
  };

  // Slice the blogs for the current page (e.g., 5 blogs per page)
  const blogsPerPage = 5;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const limitedPosts = filteredPosts.slice(startIndex, endIndex);

  // Function to go to the next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to perform the search
  const performSearch = () => {
    // Filter blog posts based on the search query
    const filtered = postData.filter((post) => {
      // You can adjust this condition to match the search criteria you want
      return post.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (filtered.length === 0) {
      setNoMatch(true); // Set no match flag
    } else {
      setNoMatch(false); // Clear no match flag
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset the current page to 1 when searching
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Initialize filteredPosts with all posts
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Blogs</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 rounded-md"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={performSearch}
        >
          Search
        </button>
      </div>

      {noMatch ? (
        <p className="text-red-500">No Match Found</p>
      ) : (
        <ul className="list-none">
          {limitedPosts.map((post) => (
            <li key={post.id} className="mb-2">
              <Link
                href={`/FullBlog?id=${post.body}`}
                className="text-blue-500 hover:underline"
              >
                {post.id}. {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <PostData onDataFetched={handleDataFetched} />
    </div>
  );
};

export default BlogTitles;
