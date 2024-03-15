import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  useCdn: true, // `false` if you want to ensure fresh data,
});
