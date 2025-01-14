"use server";

import { supabase } from "@/lib/supabase";

export async function incrementAndGetViews() {
  try {
    // Use Supabase's `increment` function to atomically increment the view count
    const { data, error } = await supabase.rpc("increment_views");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error incrementing views:", error);
    return 0;
  }
}
