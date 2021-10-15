import { LIMIT, URL_API } from "../../constants";

export default async function ApiFetch(
  endpoint,
  method = "GET",
  headers,
  body
) {
  const response = await fetch(
    `${URL_API}&q=${endpoint}&limit=${LIMIT}&offset=${0},&rating=${"g"}&lang=en`,
    { method, headers, body: JSON.stringify(body) }
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors.message);
  } else {
    if (response.status === 204) return {};
    return await response.json();
  }
}

// export default function ApiCall({ endpoint = "goku" } = {}) {
//   const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=60e9q0RWywC93hnc1IweAhggOpjNhgv0&q=${endpoint}&limit=25&offset=0&rating=g&lang=en`;
//   return fetch(URL_API)
//     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//     .then((response) => {
//       const { data } = response;
//       const gifs = data.map((dat) => {
//         const { images, title, id } = dat;
//         const { url } = images.downsized_medium;
//         return { url, title, id };
//       });
//       return gifs;
//     })
//     .catch((error) => console.log("Error Catch ", error));
// }
