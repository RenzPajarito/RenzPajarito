"use client";

import { useEffect } from "react";
import { incrementAndGetViews } from "../actions/action";

export default function ViewCounter() {
  useEffect(() => {
    const incrementViews = async () => {
      try {
        await incrementAndGetViews();
      } catch (error) {
        console.error("Failed to increment views:", error);
      }
    };

    incrementViews();
  }, []);

  return null;
}
