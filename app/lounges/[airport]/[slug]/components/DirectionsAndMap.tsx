import { GoogleMapsEmbed } from "@next/third-parties/google";

import { Lounge } from "@/data/api/documentation";
type DirectionsAndMapProps = {
  loungeData: Lounge | undefined;
};

const DirectionsAndMap = ({ loungeData }: DirectionsAndMapProps) => {
  return (
    <>
      <div className="mt-5 [&_iframe]:rounded-lg">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}
          height={400}
          maptype="satellite"
          mode="place"
          q={`place_id:${loungeData?.googlePlaceId}`}
          width="100%"
        />
      </div>
    </>
  );
};

export default DirectionsAndMap;
