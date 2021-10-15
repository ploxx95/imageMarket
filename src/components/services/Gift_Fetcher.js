import ApiFetch from "./ApiFetch";

export default async function Gift_Fetcher(topic) {
  const finish = await ApiFetch(topic).then((datos) => {
    const { data } = datos;
    const gift_data = data.map((api_data) => {
      const { id, images, title } = api_data;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });

    return gift_data;
  });
  return finish;
}
