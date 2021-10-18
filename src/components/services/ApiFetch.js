import {
  URL_API,
  PAGE,
  PER_PAGE,
  ORDER_BY,
  COLOR,
  ORIENTATION,
  CLIENT_ID,
} from "../../constants";

export default async function ApiFetch(
  endpoint = "naturaleza",
  method = "GET",
  headers,
  body
) {
  const response = await fetch(
    //  https://api.unsplash.com/search/photos?&query=gaming&page=1&per_page=10&order_by=relevant&color=purple&client_id=nOng1IqX6cw1GZS-WeLzn6BexT_W2y1V0ckNYCrDuoM
    // `https://api.unsplash.com/search/photos?&query=gaming&page=1&per_page=10&order_by=relevant&color=purple&client_id=nOng1IqX6cw1GZS-WeLzn6BexT_W2y1V0ckNYCrDuoM`,
    `${URL_API}?&query=${endpoint}&page=${PAGE}&per_page=${PER_PAGE}&order_by=${ORDER_BY}&color=${COLOR}&client_id=${CLIENT_ID}`,
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
