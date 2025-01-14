// ViewsPage.js
"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { incrementAndGetViews } from "../actions/action";

export default function ViewsPage() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      const updatedViews = await incrementAndGetViews();
      setViews(updatedViews);
    };

    fetchViews();
  }, []);

  return (
    <div className="container h-screen mx-auto flex justify-center items-center px-6">
      <div className="max-w-xl w-full border flex flex-col justify-center items-center p-8 gap-6 rounded-xl shadow">
        <h1 className="text-4xl uppercase font-extrabold text-gray-800">
          Total Views
        </h1>
        <p className="text-6xl uppercase font-extrabold text-gray-700">
          {views}
        </p>
      </div>
    </div>
  );
}
