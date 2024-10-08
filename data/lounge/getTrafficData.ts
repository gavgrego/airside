import { FootTraffic } from "@/types/footTraffic/types";

const getTrafficData = async ({
  name,
  address,
}: {
  name: string;
  address: string;
}): Promise<FootTraffic> => {
  const params = new URLSearchParams({
    api_key_private: process.env.BEST_TIME_API_KEY_PRI as string,
    venue_name: name,
    venue_address: address,
  });
  const response = await fetch(`${process.env.BEST_TIME_ENDPOINT}?${params}`, {
    method: "POST",
    next: {
      revalidate: 60 + 60 + 24,
    },
  });

  const data = await response.json();

  return data;
};

export default getTrafficData;
