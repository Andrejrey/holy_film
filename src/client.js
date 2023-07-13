import * as contentful from "contentful";

export const client = contentful.createClient({
<<<<<<< HEAD
  space: import.meta.env.REACT_APP_SPACE_ID,
  accessToken: import.meta.env.REACT_APP_ACCESS_TOKEN,
=======
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
>>>>>>> 33c96a7772560ee7ee4f59d2959078ab7fcdc5c8
});

export const getCampaigns = () =>
  client
    .getEntries()
    .then((res) => res.items)
    .catch((err) => console.log(err));
