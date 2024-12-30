import { AirportListResponse } from "../api/documentation";

const getAirportByCode = async (code: string): Promise<AirportListResponse> => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/airports?filters[code][$eq]=${code}`,
    {
      headers: {
        "Strapi-Response-Format": "v4"
      }
    }
  );

  return await response.json();
};

export default getAirportByCode;
