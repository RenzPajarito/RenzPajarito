"use server";

import { supabase } from "@/lib/supabase";

export async function incrementAndGetViews() {
  // First, try to get the current view count
  const { data: viewData } = await supabase
    .from("page_views")
    .select("views")
    .single();

  if (!viewData) {
    // If no record exists, create one with initial view count of 1
    const { data } = await supabase
      .from("page_views")
      .insert([{ views: 1 }])
      .select()
      .single();
    return data?.views || 0;
  }

  // If record exists, increment the view count
  const { data } = await supabase
    .from("page_views")
    .update({ views: viewData.views + 1 })
    .eq("id", 1)
    .select()
    .single();

  return data?.views || 0;
}
