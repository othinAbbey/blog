import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const FullBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const { body } = router.query;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Blog Content</h1>
      <p className="text-lg text-gray-700">Blog {id}</p>
      <p className="text-lg text-gray-700">{body}</p>
    </div>
  );
};

export default FullBlog;
