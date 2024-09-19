import AirportCard from "@/components/airports/AirportCard";
import Search from "@/components/search/Search";
import getFeaturedAirports from "@/data/airport/getFeaturedAirports";
import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

const AirportsPage = async () => {
  const airports = await getFeaturedAirports();

  return (
    <div>
      <Search placeholder="Find a lounge or airport..." />
      <h1 className="text-center mb-10">Popular Airports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-evenly content-evenly justify-items-center items-center">
        {airports?.map((airport) => {
          return (
            <AirportCard
              key={airport.id}
              airport={airport}
              className="w-full"
            />
          );
        })}
      </div>
      <h2 className="text-center mt-20 mb-8 text-4xl">All Airports</h2>

      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300"></div>
          </Skeleton>
        }
      ></Suspense>
    </div>
  );

  // airport map
};

export default AirportsPage;
