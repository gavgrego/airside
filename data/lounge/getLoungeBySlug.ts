import { LoungeListResponse } from "../api/documentation";

const getLoungeBySlug = async (slug: string): Promise<LoungeListResponse> => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/lounges?&populate[amenities][populate]=*&populate[detriments][populate]=*&populate[alliance_access][populate]=*&populate[cards][populate]=*&populate=airport&filters[slug][$eq]=${slug}`,
    {
      headers: {
        "Strapi-Response-Format": "v4"
      }
    }
  );

  return await response.json();
};

export default getLoungeBySlug;
