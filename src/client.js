import * as contentful from "contentful";

export const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getCampaigns = () =>
  client
    .getEntries()
    .then((res) => res.items)
    .catch((err) => console.log(err));
