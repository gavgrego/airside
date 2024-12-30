import { GooglePlace } from "@/types/googlePlaces/types";

const getGooglePlaceDetails = async (
  placeId: string,
  forAllLoungesTable?: boolean
): Promise<GooglePlace> => {
  const fields = forAllLoungesTable
    ? "current_opening_hours.open_now,rating"
    : "formatted_address,photos,rating,nationalPhoneNumber,internationalPhoneNumber,current_opening_hours,business_status";

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
      {
        headers: {
          "X-Goog-FieldMask": fields
        },
        cache: "force-cache"
      }
    );

    return await response.json();
  } catch {
    throw new Error("Failed to fetch Google Place Details");
  }
};

export default getGooglePlaceDetails;
