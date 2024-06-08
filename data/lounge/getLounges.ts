import { LoungeResponseDataObject } from "../api/documentation";

type GetLoungesProps = {
  // Add props here
  lat: string;
  lon: string;
  limit: number;
};

const getLounges = async ({}: // lat,
// lon,
// limit,
GetLoungesProps): Promise<LoungeResponseDataObject[] | null> => {
  try {
    // Ideally need to optionally pass lat, lon, and limit to the API, otherwise, it will return all lounges
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/lounges?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching lounges!", error);
    return null;
  }
};

export default getLounges;
