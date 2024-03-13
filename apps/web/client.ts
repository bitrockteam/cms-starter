import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
});
