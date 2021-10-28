import ApiFetch from "./ApiFetch";

export default async function Gift_Fetcher(topic) {
  const data_parse = await ApiFetch(topic).then((datos) => {
    // console.log(datos);
    const { results } = datos;
    const images_data = results.map((api_data) => {
      const { id, urls, description, user, links } = api_data;
      return { id, urls, description, user, links };
    });
    return images_data;
  });
  return data_parse;
}
