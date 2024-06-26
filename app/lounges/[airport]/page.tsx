import LoungeCard from "@/components/lounges/LoungeCard";
import getAirportByCode from "@/data/airport/getAirportByCode";
import getLoungesByAirportCode from "@/data/lounge/getLoungesByAirportCode";

const AirportPage = async ({ params }: { params: { airport: string } }) => {
  const airport = await getAirportByCode(params.airport);
  const airportData = airport.data?.[0].attributes;
  const airportLounges = await getLoungesByAirportCode(params.airport);

  // Want to have a table with all lounges

  // then below, lounges by terminal

  return (
    <div>
      {airportData?.name}
      <div className="grid grid-cols-3 gap-8">
        {airportLounges.map((lounge) => {
          return (
            <div key={lounge.id} className="">
              <LoungeCard key={lounge.id} lounge={lounge} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AirportPage;
